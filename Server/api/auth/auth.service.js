const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userService = require('../user/user.service');
const logger = require('../../services/logger.service');

const saltRounds = parseInt(process.env.SALT_ROUNDS, 10);


async function login(email) {
    try {
        const user = await userService.getByEmail(email);
        if (user) {
            delete user._doc.password;
        } else {
            logger.debug('auth.service: login - User not founded. userEmail: ', email);
        }
        return user;
    } catch (err) {
        logger.error('auth.service: login - User login failed\n\t' + err);
        throw err;
    }
}

async function signup(user) {
    try {
        const hash = await bcrypt.hash(user.password, saltRounds)
        user.password = hash
        user.isAdmin = false;
        let account = await userService.add(user)

        logger.info('auth.service: signup - User signup successfully userID:' + account._id);
        return account;
    } catch (err) {
        logger.error('auth.service: signup - User signup failed\n\t' + err);
        throw err;
    }
}

module.exports = {
    signup,
    login,
}
