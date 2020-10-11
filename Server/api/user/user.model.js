const mongoose = require('mongoose');
// const { getModel } = require('../../services/db.service');

// Collection name
const collectName = 'user';

const schema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    isAdmin: { type: Boolean, default: false },
    email: {
        type: String,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        unique: true,
        required: true
    },
    password: { type: String, required: true },
    firstName: { type: String, match: /^[A-Za-z\s]+$/, required: true },
    lastName: { type: String, match: /^[A-Za-z\s]+$/, required: true },
    title: { type: String },
    phone: { type: String },
    skype: { type: String },
}, { versionKey: false });


module.exports = mongoose.model(collectName, schema, collectName);
