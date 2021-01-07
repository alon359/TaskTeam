// Modules
const { check, body } = require('express-validator');
const bcrypt = require('bcrypt');

// Models
const User = require('../../models/user.model');

const loginValidator = [
    check('email')
        .exists({ checkFalsy: true }).withMessage('Email is required').bail()
        .isEmail().normalizeEmail().withMessage('Invalid email').bail(),
    check('password')
        .exists({ checkFalsy: true }).withMessage('Password is required').bail()
        .if(check('email').exists({ checkFalsy: true }))
        .custom(async (password, { req }) => {
            const { email } = req.body;
            const user = await User.findOne({ email });

            if (!user) return Promise.reject('Invalid email or password');
            const match = await bcrypt.compare(password, user.password)
                .then(res => res)
                .catch(err => null)
            if (!match) return Promise.reject('Invalid email or password')

            return true;
        }),
];


const signUpValid = [
    check('email')
        .exists({ checkFalsy: true }).withMessage('Email is required').bail()
        .isEmail().normalizeEmail().withMessage('Invalid email').bail()
        .custom((email) => {
            return User.findOne({ email }).then((user) => {
                if (user) return Promise.reject('Email already in use');
            })
            return true;
        }),

    check('password')
        .exists({ checkFalsy: true }).withMessage('Password is required').bail()
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),

    check('passconfrim')
        .exists({ checkFalsy: true }).withMessage('Password confirm is required').bail()
        .notEmpty().withMessage('Password confirm is required').bail()
        .if(check('password').exists().notEmpty())
        .custom((confirmPassword, { req }) => {
            const { password } = req.body;
            if (confirmPassword.trim() != password.trim()) {
                return Promise.reject('Passwords not match')
            }
            return true;
        }),

    check('fName')
        .exists({ checkFalsy: true }).bail().withMessage('First name is required')
        .notEmpty().withMessage('First name is required').bail()
        .isLength({ min: 2 }).matches(/^[A-Z][a-z]+$/).withMessage('Invalid first name'),

    check('lName', 'Invalid last name')
        .exists({ checkFalsy: true }).withMessage('Last name is required').bail()
        .notEmpty().withMessage('Last name is required').bail()
        .isLength({ min: 2 }).matches(/^[A-Z][a-z]+(( [A-Z][a-z]+)?)+$/).withMessage('Invalid last name'),

    check('phone', 'Invalid number phone')
        .exists({ checkFalsy: true }).withMessage('Phone number is required').bail()
        .notEmpty().withMessage('Phone number is required').bail()
        .isLength({ min: 2 }).matches(/^0[1-9]\d{7,8}$/).withMessage('Invalid phone number'),

    check('title').optional()
        .matches(/^( |\d|\w|\-)+$/).withMessage('Title can only be with letters, spaces, numbers and hyphens')

];



module.exports = {
    loginValidator,
    signUpValid
}


