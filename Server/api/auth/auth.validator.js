const { check } = require('express-validator');
const bcrypt = require('bcrypt');
const userService = require('../user/user.service');

const loginValidator = [
    check('email', 'Email is required')
        .exists({ checkFalsy: true }),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Password is required')
        .custom(async (password, { req }) => {
            if (!password || !req.body.email) return;

            const user = await userService.getByEmail(req.body.email);
            if (!user) return Promise.reject('Invalid email or password');
            const match = await bcrypt.compare(password, user.password)
                .then(res => res)
                .catch(err => null)
            if (!match) return Promise.reject('Invalid email or password')
        }),
];

module.exports = {
    loginValidator,
}
