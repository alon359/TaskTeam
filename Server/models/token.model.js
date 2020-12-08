const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    tokenID: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    expires: {
        type: Date,
        required: true,
        default: Date.now(),
        expires: '10s'
    }
});

module.exports = mongoose.model('Token', tokenSchema);

