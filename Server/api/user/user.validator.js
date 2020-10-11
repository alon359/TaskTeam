const { check } = require('express-validator');
const USER = require('../user/user.model');

const userValidator = [
    check('email')
        .isEmail()
        .normalizeEmail().withMessage('Invalid E-mail')
        .custom((email) => {
            return USER.findOne({ email }).then((user) => {
                if (user) return Promise.reject('E-mail already in use');
            })
        }),
    check('password', 'Password must be at least 8 characters long').isLength({ min: 8 }),
    check('passconfrim', 'Passwords don\'t match').custom((confirmPassword, { req }) => {
        return (confirmPassword === req.body.password)
    }).withMessage('Passwords don\'t math'),
    check('firstName', 'Invalid first name').isLength({ min: 2 }).matches(/^[A-Za-z\s]+$/),
    check('lastName', 'Invalid last name').isLength({ min: 2 }).matches(/^[A-Za-z\s]+$/),
    check('phone', 'Invalid number phone').isLength({ min: 2 }).matches(/^0[0-9]{8,9}$/)
];

module.exports = {
    userValidator,
}
