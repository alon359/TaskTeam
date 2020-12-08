var { validationResult } = require('express-validator');
const authService = require('./auth.service');
const logger = require('../../services/logger.service');

async function login(req, res) {
    const { email } = req.body
    try {
        const errors = validationResult(req).errors;
        if (errors.length !== 0) {
            logger.debug('auth.controller: login - errors:\n\t' + JSON.stringify(errors))

            res.status(409).json(errors);
            return;
        }

        const user = await authService.login(email);

        req.session.user = user;

        delete user._doc.isAdmin;

        logger.info(`auth.controller: login - User logged-in\n\t(UserID: ${req.session.user._id})`)
        res.status(200).json(user)
    } catch (err) {
        logger.debug('auth.controller: login - errors:\n\t' + JSON.stringify(err))

        res.status(500).send({ massage: 'Could not login, please try later' })
    }
}

async function signup(req, res) {
    try {
        const errors = validationResult(req).errors;
        if (errors.length !== 0) {
            logger.debug('auth.controller: signup - errors:\n\t' + JSON.stringify(errors))
            res.status(409).json(errors);
            return;
        }
        const user = req.body;
        let account = await authService.signup(user)

        // Remove password
        delete account._doc.password;

        // Save user
        req.session.user = account;

        // Remove isAdmin
        delete account._doc.isAdmin;

        res.status(200).json(account);
    } catch (err) {
        logger.error('aut.controller signup user filed\n\t' + err)

        res.status(500).send({ massage: 'Could not signup, please try later' })
    }
}

async function logout(req, res) {
    try {
        const userID = req.session.user._id;

        req.session.destroy()

        logger.info(`User logged out (userID: ${userID})`)
        res.status(200).send({ message: 'Logged out successfully' })
    } catch (err) {
        logger.info(`auth.service: logout - User log out filed (userID: ${userID}):\n\t${err}`)

        res.status(500).send({ massage: 'User log out filed' })
    }
}

module.exports = {
    login,
    signup,
    logout
}
