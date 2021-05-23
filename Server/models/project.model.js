const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        default: null,
    },
    creatorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    projectOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member',
        default: null,
    }
});


module.exports = mongoose.model('Project', schema);
