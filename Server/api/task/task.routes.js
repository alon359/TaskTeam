const express = require('express');
const router = express.Router();

// Controller
const { createTask, getTasks, getTask, updateTask, removeTask, getCountTasks } = require('./task.controller');
// validators
const { taskValidator } = require('../../middlewares/validities/task.validator');
const { requireAuth } = require('../../middlewares/requireAuth.middleware');

router.get('/', requireAuth, getTasks);
router.get('/:id', requireAuth, getTask);
router.get('/countTasks/:projectID', requireAuth, getCountTasks)
router.post('/', requireAuth, taskValidator, createTask);
router.put('/', requireAuth, taskValidator, updateTask);
router.delete('/:id', requireAuth, removeTask);

module.exports = router;
