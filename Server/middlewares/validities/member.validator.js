const mongoose = require('mongoose');
const { check } = require('express-validator');
// Services
const userService = require('../../api/user/user.service');
const projectService = require('../../api/project/project.service');
const memberService = require('../../api/member/member.service');


memberValidator = [
    check('_id').optional()
        .custom((_id, { req }) => {
            return mongoose.Types.ObjectId.isValid(_id);
        }).withMessage('Invalid ID'),

    check('userID')
        .exists({ checkFalsy: true }).withMessage('"_id" is required').bail()
        .notEmpty().withMessage('"_id" is required').bail()
        .custom((_id) => {
            return mongoose.Types.ObjectId.isValid(_id);
        }).withMessage('Invalid ID'),

    check('projectID')
        .exists({ checkFalsy: true }).withMessage('"_id" is required').bail()
        .notEmpty().withMessage('"_id" is required').bail()
        .custom((_id) => {
            return mongoose.Types.ObjectId.isValid(_id);
        }).withMessage('Invalid ID'),

    check('permission')
        .exists({ checkFalsy: true }).withMessage('Permission is required').bail()
        .notEmpty().withMessage('Permission is required').bail()
        .isIn(['normal', 'admin']).withMessage('Permission should be: \'normal\' or \'admin\'.')
];

createMemberValidation = [
    check('email')
        .exists({ checkFalsy: true }).withMessage('Email is required').bail()
        .notEmpty().withMessage('Email is required').bail()
        .isEmail().withMessage('Invalid Email').bail()
        .normalizeEmail().withMessage('Invalid Email')
        .custom(async (email, { req }) => {
            const user = await userService.getByEmail(email)
            if (!user) return Promise.reject('Email user not founded');

            const userID = user._id;
            const { projectID } = req.body;
            if (await memberService.isMemberAlreadyExists(userID, projectID)) {
                return Promise.reject('A user already exists in the project');
            }

            req.body.userID = userID;
            return true;
        }),

    check('permission')
        .exists({ checkFalsy: true }).withMessage('Permission is required').bail()
        .notEmpty().withMessage('Permission is required').bail()
        .isIn(['normal', 'admin']).withMessage('Permission should be: \'normal\' or \'admin\'.'),

    check('projectID')
        .exists({ checkFalsy: true }).withMessage('"_id" is required').bail()
        .notEmpty().withMessage('"_id" is required').bail()
        .custom(async (projectID) => {
            const isValid = mongoose.Types.ObjectId.isValid(projectID);
            if (!isValid) return Promise.reject('Invalid project ID');

            const project = await projectService.getByID(projectID);
            if (!project) return Promise.reject('Project doesn\'t exist in the system');

            return true;
        }),
];


module.exports = {
    memberValidator,
    createMemberValidation
}

