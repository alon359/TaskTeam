const express = require('express');
const router = express.Router();

// Controller
const { createTask, getTasks, getTask, updateTask, removeTask, getCountTasks } = require('./task.controller');
// validators
const { taskValidator } = require('../../middlewares/validities/task.validator');
const { requireAuth, requireProjectMembership } = require('../../middlewares/requireAuth.middleware');

router.get('/', requireAuth, requireProjectMembership, getTasks);
router.get('/:taskID', requireAuth, requireProjectMembership, getTask);
router.get('/countTasks/:projectID', requireAuth, getCountTasks)
router.post('/', requireAuth, requireProjectMembership, taskValidator, createTask);
router.put('/', requireAuth, requireProjectMembership, taskValidator, updateTask);
router.delete('/:taskID', requireAuth, requireProjectMembership, removeTask);

module.exports = router;
