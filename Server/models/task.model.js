const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    projectID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: undefined,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: '',
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    status: {
        type: String,
        enum: ['on hold', 'not started yet', 'working on it', 'waiting for response', 'stuck', 'done'],
        lowercase: true,
        default: 'not started yet'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('Task', schema);
