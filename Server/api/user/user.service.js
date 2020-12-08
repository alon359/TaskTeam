const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// Services
const logger = require('../../services/logger.service');
// Models
const USER = require('../../models/user.model.js');

const salt = parseInt(process.env.SALT_ROUNDS, 10);

async function query(filterBy = {}) {
    try {
        const users = await USER.find(filterBy)
            .select('-isAdmin -password')
            .then(users => users);

        logger.debug(`user.service: query - Users query request successfully`)

        return users;
    } catch (err) {
        logger.error('user.service: query - Users query request failed\n\t' + err)
        throw err;
    }
}

async function getById(userId) {
    try {
        const user = await USER.findById(userId)
            .then(user => user);
        logger.debug(`user.service: getById - User got successfully (userId: ${userId})`)

        return user
    } catch (err) {
        logger.error(`user.service: getById - Get user by ID request failed (userID: ${userId})\n\t` + err)
        throw err;
    }
}

async function getByEmail(email) {
    try {
        const user = await USER.findOne({ email })
            .then(user => {
                if (user) {
                    logger.debug(`user.service: getByEmail - User got by mail successfully (userId: ${user._id})`)
                }
                else {
                    logger.debug(`user.service: getByEmail - User not founded (userEmail: ${email})`)
                }
                return user
            });
        return user
    } catch (err) {
        logger.error(`user.service: getByEmail -  Gat user by email request failed (userEmail: ${email})\n\t` + err)
        throw err;
    }
}

async function remove(userId) {
    await USER.deleteOne({ _id: userId })
    try {
        await USER.deleteOne({ _id: userId });

        logger.debug(`user.service: Remove user successfully (userId: ${userId})`)
    } catch (err) {
        logger.error(`user.service: User removed request failed (userId: ${userId})`)
        return err;
    }
}

async function update(user) {
    try {
        var userUpdated = await USER.findOneAndUpdate({ _id: user._id }, user, { new: true })
            .select('-password -isAdmin');

        return userUpdated
    } catch (err) {
        logger.error(`user.service: Update user request failed (UserID: ${user._id})\n\t` + err)
        throw err;
    }
}

async function add(user) {
    try {
        user._id = new mongoose.Types.ObjectId();

        const userSchema = new USER(user);
        const savedUser = await userSchema.save();

        logger.info(`user.service: User added successfully (UserID: ${savedUser._id})`);
        return savedUser;
    } catch (err) {
        logger.error(`user.service: add user request failed (UserID: ${user._id})\n\t` + err)
        throw err;
    }
}

async function updatePassword(newPassword, userID) {
    try {
        const hash = await bcrypt.hash(newPassword, salt);
        await USER.updateOne({ _id: userID }, { password: hash });

        return Promise.resolve('Password is updated');
    } catch (err) {
        logger.error(`user.service: Update password failed\n\t` + err)
        throw err;
    }
}

module.exports = {
    query,
    getById,
    getByEmail,
    remove,
    update,
    updatePassword,
    add
}
