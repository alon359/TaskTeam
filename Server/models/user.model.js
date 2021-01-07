const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        match: /^\w(\w|\d|\-|\_)+@\w+(\.\w{2,3})+$/,
    },
    password: { type: String, min: 8, max: 30, required: true },
    // FirstName
    fName: {
        type: String,
        match: /^[A-Z][a-z]+(( [A-Z][a-z]+)+)?$/,
        required: true
    },
    // Last name
    lName: {
        type: String,
        match: /^[A-Z][a-z]+(( [A-Z][a-z]+)+)?$/,
        required: true
    },
    title: { type: String, match: /^( |\d|\w|\-)+$/, default: null },
    phone: { type: String, match: /^0[1-9]\d{7,8}$/, default: null },
    imgUrl: { type: String, default: null },
    token: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Token'
    },
});

module.exports = mongoose.model('User', schema);
