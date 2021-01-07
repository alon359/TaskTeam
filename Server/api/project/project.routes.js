const express = require('express');
const router = express.Router();

// Controller
const { createProject, getProjects, getProject, updateProject, removeProject } = require('./project.controller');
// validators
const { projectValidator } = require('../../middlewares/validities/project.validator');

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', projectValidator, createProject);
router.put('/', projectValidator, updateProject);
router.delete('/:id', removeProject);

module.exports = router;
