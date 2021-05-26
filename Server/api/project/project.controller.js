var { validationResult } = require('express-validator');

// Services
const logger = require('../../services/logger.service')
const projectService = require('./project.service');

// Get projects
async function getProjects(req, res) {
    try {
        const { userID } = req.query;

        if (userID !== req.session.user._id) {
            res.status(403).end('You don\'t permission to do this action');
            return;
        }

        const projects = await projectService.query({ userID });
        res.status(200).json(projects);
    } catch (error) {
        logger.error('Get projects filed\n', error);
        res.status(500).json({ error: 'Get projects failed' })
    }
}

// Get project by id
async function getProject(req, res) {
    try {
        const { projectID } = req.params;
        const project = await projectService.getByID(projectID);

        res.status(200).json(project);
    } catch (error) {
        logger.error('Project.controller - Get project filed\n', error);
        res.status(500).json({ error: 'Get project failed' })
    }
}

// Create new project
async function createProject(req, res) {
    try {
        const errors = validationResult(req).errors;
        if (errors.length !== 0) {
            logger.error('project.controller: createProject - errors:\n\t' + JSON.stringify(errors))
            return res.status(409).json(errors);
        }
        const project = req.body;
        project.creatorID = req.session.user._id;
        const newProject = await projectService.create(project);
        res.status(200).json(newProject);
    } catch (error) {
        logger.error('Project.controller - Create new project failed.\n' + error);
        res.status(500).json({ error: 'Create new project failed.' });
    }
}

async function updateProject(req, res) {
    try {
        const errors = validationResult(req).errors;
        if (errors.length !== 0) {
            logger.error('project.controller: updateProject - errors:\n\t' + JSON.stringify(errors))
            return res.status(409).json(errors);
        }

        const project = req.body;

        if (!('_id' in project)) {
            const error = {
                location: 'body',
                param: '_id',
                msg: '"_id" is required',
            }
            errors.push(error)

            logger.error('project.controller: updateProject - errors:\n\t' + JSON.stringify(errors))
            return res.status(409).json(errors);
        }

        const updateProject = await projectService.update(project);

        res.status(200).json(updateProject);
    } catch (error) {
        logger.error('Project.controller - Update project failed.\n' + error);
        res.status(500).json({ error: 'Update project failed.' });
    }
}

async function removeProject(req, res) {
    try {
        const { projectID } = req.params;

        await projectService.remove(projectID);

        res.status(200).json({ massage: 'Remove project successfully.' });
    } catch (error) {
        logger.error('Project.controller - Remove project failed.\n' + error);
        res.status(500).json({ error: 'Remove project failed.' });
    }
}

module.exports = {
    getProjects,
    getProject,
    createProject,
    updateProject,
    removeProject
}
