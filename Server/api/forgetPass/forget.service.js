const mongoose = require('mongoose');
const crypto = require('crypto');

// Services
const logger = require('../../services/logger.service');


module.exports = {
    createToken
}

async function createToken() {
    try {
        const token = {};

        const buffer = await crypto.randomBytes(32);

        token.tokenID = await buffer.toString('hex');
        token.expires = Date.now();


        console.log({ token });

        return token;
    } catch (err) {
        logger('forget.service: Creating token failed\n\t' + err);
        throw err;
    }
}
