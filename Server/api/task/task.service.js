const mongoose = require('mongoose');
// Services
const logger = require('../../services/logger.service');
const projectService = require('../project/project.service');
// Models
const Task = require('../../models/task.model');

module.exports = {
    query,
    getByID,
    create,
    update,
    remove,
    removeByProjectID,
    getCountTasks
}

async function query(filter = {}) {
    try {
        const tasks = await Task.find(filter)
            .populate('projectID')
            .populate('owner');

        return tasks;
    } catch (error) {
        logger.error('taskService - Get tasks failed.')
        throw error;
    }
}

async function getByID(taskID) {
    try {
        const task = await Task.findById(taskID)
            .populate('projectID')
            .populate('owner');

        return task;
    } catch (error) {
        logger.error('taskService - Get task failed.')
        throw error;
    }
}

async function create(task) {
    try {
        task._id = new mongoose.Types.ObjectId();

        const taskSchema = new Task(task);
        let newTask = await taskSchema.save();
        newTask = await getByID(newTask._id);

        logger.info('taskService - New task created taskID: ', task._id);
        return newTask;
    } catch (error) {
        logger.error('taskService - Create new task failed.')
        throw error;
    }
}

async function update(task) {
    try {
        let updateTask = await Task.findOneAndUpdate({ _id: task._id }, task, { new: true })
            .populate('projectID')
            .populate('owner');

        logger.info('taskService - Update Task successfully. taskID: ', task._id);
        return updateTask;
    } catch (error) {
        logger.error('taskService - Update task failed.')
        throw error;
    }
}

async function remove(taskID) {
    try {
        const res = await Task.deleteOne({ _id: taskID });

        logger.info('taskService - Remove task successfully. taskID: ' + taskID);
        return res;
    } catch (error) {
        logger.error('taskService - Remove task failed.')
        throw error;
    }
}

async function removeByProjectID(projectID) {
    try {
        const res = await Task.deleteMany({ projectID });

        logger.info('taskService - Remove tasks by projectID successfully. taskID: ' + projectID);
        return res;
    } catch (error) {
        logger.error('taskService - Remove tasks by projectID failed.')
        throw error;
    }
}

async function getCountTasks(projectID) {
    try {
        const countTasks = { projectID };
        countTasks.countTasks = await Task.count({ projectID });
        countTasks.doneTasks = await Task.count({ projectID, status: 'done' });

        logger.info('taskService - Get count tasks successfully. projectID: ' + projectID);
        return countTasks;
    } catch (error) {
        logger.error('taskService - Get count tasks failed.')
        throw error;
    }
}
