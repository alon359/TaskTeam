const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    userID: mongoose.Types.ObjectId,
    tokenValue: {
        type: String,
        lowercase: true,
        required: true,
    },
    expireAt: {
        type: Date,
        default: Date.now,

    }
});

module.exports = mongoose.model('Token', tokenSchema);

