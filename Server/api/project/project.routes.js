const express = require('express');
const router = express.Router();

// Controller
const { createProject, getProjects, getProject, updateProject, removeProject } = require('./project.controller');
// validators
const { projectValidator } = require('../../middlewares/validities/project.validator');
const { requireAuth, requireProjectMembership, requireAdminProject } = require('../../middlewares/requireAuth.middleware');

router.get('/', requireAuth, getProjects);
router.get('/:projectID', requireAuth, requireProjectMembership, getProject);
router.post('/', requireAuth, projectValidator, createProject);
router.put('/', requireAuth, requireProjectMembership, requireAdminProject, projectValidator, updateProject);
router.delete('/:projectID', requireAuth, requireProjectMembership, requireAdminProject, removeProject);

module.exports = router;
