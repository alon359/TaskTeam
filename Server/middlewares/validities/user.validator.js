const { check } = require('express-validator');

const userValidator = [
    check('email')
        .exists({ checkFalsy: true }).withMessage('Email is required').bail()
        .notEmpty().withMessage('Email is required').bail()
        .isEmail().withMessage('Invalid Email').bail()
        .normalizeEmail().withMessage('Invalid Email').bail(),

    check('password')
        .exists({ checkFalsy: true }).withMessage('Password is required').bail()
        .notEmpty().withMessage('Password is required').bail()
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),

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

];

module.exports = {
    userValidator,
}
