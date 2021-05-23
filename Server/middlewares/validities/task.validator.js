const mongoose = require('mongoose');
const { check } = require('express-validator');


taskValidator = [
    check('_id').optional()
        .custom((_id, { req }) => {
            return mongoose.Types.ObjectId.isValid(_id);
        }).withMessage('Invalid ID'),

    check('projectID')
        .exists({ checkFalsy: true }).withMessage('"projectID" is required').bail()
        .notEmpty().withMessage('"projectID" is required').bail()
        .custom((projectID) => {
            if (!projectID) {
                return true;
            } else if (typeof projectID === 'object') {
                if ('_id' in projectID) projectID = projectID._id
                else return false
            }
            return mongoose.Types.ObjectId.isValid(projectID);
        }).withMessage('Invalid projectID'),

    check('owner').optional()
        .custom((owner, { req }) => {
            if (!owner) {
                return true;
            } else if (typeof owner === 'object') {
                if ('_id' in owner) owner = owner._id
                else return false
            }
            return mongoose.Types.ObjectId.isValid(owner);
        }).withMessage('Invalid OwnerID'),

    check('title')
        .exists({ checkFalsy: true }).withMessage('"title" is required').bail()
        .notEmpty().withMessage('"title" is required').bail()
        .isString().withMessage('"title" should have a string value'),

    check('description').optional()
        .isString().withMessage('"description" should have a string value'),

    check('priority')
        .exists({ checkFalsy: true }).withMessage('"priority" is required').bail()
        .isIn(['high', 'medium', 'low']).withMessage('\'priority\' should be high, medium or low.'),

    check('status').optional()
        .exists({ checkFalsy: true }).withMessage('"status" is required').bail()
        .isIn(['on hold', 'working on it', 'waiting for response', 'blocked', 'done', 'not started yet'])
        .withMessage('\'status\' should be \'status\' should be \'on hold\', \'working on it\', \'waiting for response\', \'blocked\', \'done\' or \'not started yet\''),

    check('startDate').exists({ checkFalsy: true }).withMessage('"status" is required').bail()
        .isDate().withMessage('\'startDate\' should be format date'),


    check('endDate').exists({ checkFalsy: true }).withMessage('"status" is required').bail()
        .isDate('\'endDate\' should be format date').withMessage('\'startDate\' should be format date').bail()
        .custom((endDate, { req }) => {
            const timeStampEnd = Date.parse(endDate);
            const timeStampStart = Date.parse(req.body.startDate);
            if (timeStampEnd < timeStampStart) Promise.reject('"endDate" can\'t be befor "startDate"');
            return true;
        })
        .withMessage(),
]

module.exports = {
    taskValidator,
}

