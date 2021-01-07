const express = require('express');
const router = express.Router();

// Controller
const { createTask, getTasks, getTask, updateTask, removeTask, getCountTasks } = require('./task.controller');
// validators
// const { } = require('../../middlewares/validities/task.validator');

router.get('/', getTasks);
router.get('/:id', getTask);
router.get('/countTasks/:projectID', getCountTasks)
router.post('/', createTask);
router.put('/', updateTask);
router.delete('/:id', removeTask);

module.exports = router;
