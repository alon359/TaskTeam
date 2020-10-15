const userService = require('./user.service')
const logger = require('../../services/logger.service');


async function getUser(req, res) {
    try {
        const userID = req.params.id;
        const user = await userService.getById(userID);

        res.status(200).json(user);
    } catch (err) {
        logger.error(`user.controller: get user request failed userID: ${userID}\n\t ` + err);

        res.status(500).json({ massage: 'get user request failed' });
    }
}

async function getUsers(req, res) {
    try {
        const users = await userService.query(req.query)

        res.status(200).json(users);
    } catch (err) {
        logger.error('user.controller: get users request failed\n\t' + err);

        res.status(500).json({ massage: 'get users request failed' });
    }
}

async function deleteUser(req, res) {
    try {
        const userID = req.params.id;
        await userService.remove(userID)

        logger.info(`user.controller: User successfully removed userID: ${userID}`);
        res.status(200).json({ massage: 'User successfully removed' });
    } catch (err) {
        logger.error(`user.controller: User remove failed userID: ${userID}\n\t` + err);

        res.status(500).json({ massage: 'User remove failed' });
    }
}

async function updateUser(req, res) {
    try {
        const user = req.body;

        // If the user is not admin
        // if (!req.session.user.isAdmin) {
        //     user.isAdmin = false;
        // }

        const userUpdated = await userService.update(user)

        logger.info(`user.controller: User successfully update userID: ${userUpdated._id}`);
        res.status(200).json(userUpdated);
    } catch (err) {
        logger.error(`user.controller: User update failed userID: ${user._id}` + err);

        res.status(500).json({ massage: 'User update failed' });
    }
}

module.exports = {
    getUser,
    getUsers,
    deleteUser,
    updateUser
}
