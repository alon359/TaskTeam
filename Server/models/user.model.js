const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        lowercase: true,
        required: true,
        match: /^\w(\w|\d|\-|\_)+@\w+(\.\w{2,3})+$/
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
    title: { type: String, match: /^( |\d|\w|\-)+$/ },
    phone: { type: String, match: /^0[1-9]\d{7,8}$/ },
    imgUrl: { type: String },
});

module.exports = mongoose.model('Users', schema);
