const express = require('express');
const router = express.Router();

// Controller
const { createProject, getProjects, getProject, updateProject, removeProject } = require('./project.controller');
// validators
const { projectValidator } = require('../../middlewares/validities/project.validator');
const { requireAuth, requireAdminProject } = require('../../middlewares/requireAuth.middleware');

router.get('/', requireAuth, getProjects);
router.get('/:id', requireAuth, getProject);
router.post('/', requireAuth, projectValidator, createProject);
router.put('/', requireAuth, requireAdminProject, projectValidator, updateProject);
router.delete('/:id', requireAuth, requireAdminProject, removeProject);

module.exports = router;
