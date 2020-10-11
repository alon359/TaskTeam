const mongoose = require("mongoose");
const logger = require("../../services/logger.service");

const USER = require('./user.model');

module.exports = {
    query,
    getById,
    getByEmail,
    remove,
    update,
    add
}

async function query(filterBy = {}) {
    try {
        const users = await USER.find(filterBy)
            .select('-isAdmin -password')
            .then(users => users);

        logger.debug(`user.service: Users query request successfully`)

        return users;
    } catch (err) {
        logger.error('user.service: Users query request failed\n\t' + err)
        throw err;
    }
}

async function getById(userId) {
    try {
        const user = await USER.findById(userId)
            .select('-isAdmin -password')
            .then(user => user);

        logger.debug(`user.service: User got by ID successfully (userId: ${userId})`)

        return user
    } catch (err) {
        logger.error(`user.service: Get user by ID request failed (userID: ${userId})\n\t` + err)
        throw err;
    }
}

async function getByEmail(email) {
    try {
        const user = await USER.findOne({ email })
            .select('-isAdmin -password')
            .then(user => user);

        logger.debug(`user.service: User got by mail successfully (userId: ${user._id})`)

        return user
    } catch (err) {
        logger.error(`user.service: Gat user by email request failed (userEmail: ${email})\n\t` + err)
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
        var userUpdated = await USER.findOneAndUpdate({ _id: user._id }, user)
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
