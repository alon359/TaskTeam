const mongoose = require('mongoose');
// Services
const logger = require('../../services/logger.service');
const memberService = require('../member/member.service');
const taskService = require('../task/task.service');
// Models
const Project = require('../../models/project.model');


module.exports = {
    query,
    getByID,
    create,
    update,
    remove
}

async function query(filter = {}) {
    try {
        const projects = await Project.find(filter);

        return projects;
    } catch (error) {
        logger.error('projectService - Get projects failed.')
        throw error;
    }
}

async function getByID(projectID) {
    try {
        const project = await Project.findById(projectID);

        return project;
    } catch (error) {
        logger.error('projectService - Get project failed.')
        throw error;
    }
}

async function create(project) {
    try {
        project._id = new mongoose.Types.ObjectId();

        const projectSchema = new Project(project);
        const newProject = await projectSchema.save();

        // Add the user to his project
        const member = {
            _id: new mongoose.Types.ObjectId(),
            userID: newProject.creatorID,
            projectID: newProject._id,
            permission: 'admin',
        };
        const newMember = await memberService.create(member);

        // Set projectOwner
        newProject.projectOwner = newMember._id;
        newProject.save();

        logger.info('projectService - New project created projectID: ', project._id);
        return newProject;
    } catch (error) {
        logger.error('projectService - Create new project failed.')
        throw error;
    }
}

async function update(project) {
    try {
        const updateProject = await Project.findOneAndUpdate({ _id: project._id }, project, { new: true });

        logger.info('projectService - Update Project successfully. projectID: ', project._id);
        return updateProject;
    } catch (error) {
        logger.error('projectService - Update project failed.')
        throw error;
    }
}

async function remove(projectID) {
    try {
        // Remove project tasks from DB
        await taskService.removeByProjectID(projectID);
        // Remove project members from DB
        await memberService.removeByProjectID(projectID);
        // Remove the project from DB
        const res = await Project.deleteOne({ _id: projectID });

        logger.info('projectService - Remove project successfully. projectID: ' + projectID);
        return res;
    } catch (error) {
        logger.error('projectService - Remove project failed.')
        throw error;
    }
}

