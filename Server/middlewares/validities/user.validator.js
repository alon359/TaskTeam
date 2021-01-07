const ObjectId = require('mongoose').Types.ObjectId;
const { check, param } = require('express-validator');
const bcrypt = require('bcrypt');
// Services
const userService = require('../../api/user/user.service');
const logger = require('../../services/logger.service');
// Models
const User = require('../../models/user.model');

const userValidator = [
    check('_id').optional()
        .exists({ checkFalsy: true }).withMessage('"_id" is required').bail()
        .notEmpty().withMessage('"_id" is required').bail()
        .custom(id => { return ObjectId.isValid(id) }).withMessage('Invalid user ID'),

    check('email').optional()
        .exists({ checkFalsy: true }).withMessage('Email is required').bail()
        .notEmpty().withMessage('Email is required').bail()
        .isEmail().withMessage('Invalid Email').bail()
        .normalizeEmail().withMessage('Invalid Email').bail()
        .custom(async (email, { req }) => {
            const userEmail = req.session.user.email;
            if (email.trim() == userEmail.trim()) return true;

            const user = await User.findOne({ email });
            if (user) return Promise.reject('Email already in use');
        }),

    check('fName').optional()
        .exists({ checkFalsy: true }).bail().withMessage('First name is required')
        .notEmpty().withMessage('First name is required').bail()
        .isLength({ min: 2 }).matches(/^[A-Z][a-z]+$/).withMessage('Invalid first name'),

    check('lName', 'Invalid last name').optional()
        .exists({ checkFalsy: true }).withMessage('Last name is required').bail()
        .notEmpty().withMessage('Last name is required').bail()
        .isLength({ min: 2 }).matches(/^[A-Z][a-z]+(( [A-Z][a-z]+)?)+$/).withMessage('Invalid last name'),

    check('phone', 'Invalid number phone').optional()
        .exists({ checkFalsy: true }).withMessage('Phone number is required').bail()
        .notEmpty().withMessage('Phone number is required').bail()
        .isLength({ min: 2 }).matches(/^0[1-9]\d{7,8}$/).withMessage('Invalid phone number'),

    check('title', 'Title should have only with letters, spaces, numbers and \'-\'').optional().matches(/^( |\d|\w|\-)+$/),
];

const userIDValidator = [
    param('id')
        .exists({ checkFalsy: true }).withMessage('User ID is required').bail()
        .notEmpty().withMessage('User ID is required').bail()
        .custom(id => { return ObjectId.isValid(id) }).withMessage('Invalid user ID'),
];

const passwordValidator = [
    check('oldPass')
        .exists({ checkFalsy: true }).withMessage('Password is required').bail()
        .notEmpty().withMessage('Password is required').bail()
        .custom(async (pass, { req }) => {
            const userID = req.session.user._id;
            const user = await userService.getById(userID)
            try {
                const match = await bcrypt.compare(pass, user.password)
                if (!match) return Promise.reject('Incorrect password');
            } catch (err) {
                logger.error('password validator\n' + err);
                return Promise.reject('Compare passwords failed');
            }
        }),

    check('newPass')
        .exists({ checkFalsy: true }).withMessage('New password is required').bail()
        .notEmpty().withMessage('New password is required').bail()
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),

    check('confirmPass')
        .exists({ checkFalsy: true }).withMessage('Confirm password is required').bail()
        .notEmpty().withMessage('Confirm password is required').bail()
        .if(check('newPass').exists({ checkFalsy: true }))
        .custom((confirmPass, { req }) => {
            try {
                const { newPass } = req.body;
                if (newPass.trim() != confirmPass.trim()) {
                    return Promise.reject('Incompatible passwords')
                }
                return true;
            } catch (err) {
                logger.error('password validator\n' + err);
                return Promise.reject('Password confirm failed');
            }
        })
]

module.exports = {
    userValidator,
    userIDValidator,
    passwordValidator,
}
