const mongoose = require('mongoose');
const crypto = require('crypto');

// Services
const logger = require('../../services/logger.service');


module.exports = {
    createToken
}

async function createToken(UserID) {
    try {
        const token = {};

        token._id = new mongoose.Types.ObjectId()
        token.createAt = Date.now();

        const buffer = await crypto.randomBytes(32);
        token.tokenValue = await buffer.toString('hex');

        console.log({ token });

        return token;
    } catch (err) {
        logger('forget.service: Creating token failed\n\t' + err);
        throw err;
    }
}
