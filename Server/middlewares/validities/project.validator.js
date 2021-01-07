const mongoose = require('mongoose');
const { check } = require('express-validator');


projectValidator = [
    check('_id').optional()
        .custom((_id, { req }) => {
            return mongoose.Types.ObjectId.isValid(_id);
        }).withMessage('Invalid ID'),

    check('title')
        .exists({ checkFalsy: true }).withMessage('"title" is required').bail()
        .notEmpty().withMessage('"title" is required').bail()
        .isString().withMessage('"title" should have a string value'),

    check('description').optional()
        .isString().withMessage('"description" should have a string value')
]


module.exports = {
    projectValidator,
}

