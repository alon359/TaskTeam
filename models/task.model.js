const { ObjectId } = require('bson');
const mongoose = require('mongoose');
// const { getModel } = require('../../services/db.service');

// Collection name
const collectName = 'task';

const schema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    projectTitle: { type: String, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true }
}, { versionKey: false });


module.exports = mongoose.model(collectName, schema, collectName);
