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
    owner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
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
        enum: ['on hold', 'not started yet', 'working on it', 'waiting for response', 'stuck', 'Done'],
        lowercase: true,
        default: 'Not started yet'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: null
    },
    subTasks: {
        type: [this], // Tasks
        ref: 'Task',
        default: null
    },
    isSubTask: {
        type: Boolean,
        default: false,
        required: true
    }
});

module.exports = mongoose.model('Task', schema);
