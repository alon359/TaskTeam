var { validationResult } = require("express-validator");

// Services
const logger = require("../../services/logger.service");
const taskService = require("./task.service");

// Get tasks
async function getTasks(req, res) {
  try {

    let { query } = req;
    if ('userID' in query) {
      query = { owner: query.userID };
    }
    const tasks = await taskService.query(query);

    res.status(200).json(tasks);
  } catch (error) {
    logger.error("Get tasks filed\n", error);
    res.status(500).json({ error: "Get tasks failed" });
  }
}

// Get task by id
async function getTask(req, res) {
  try {
    const { id } = req.params;
    // const task = await taskService.getByID(id);

    res.status(200).json(task);
  } catch (error) {
    logger.error("Task.controller - Get task filed\n", error);
    res.status(500).json({ error: "Get task failed" });
  }
}

// Create new task
async function createTask(req, res) {
  try {
    const errors = validationResult(req).errors;
    if (errors.length !== 0) {
      logger.debug(
        "task.controller: createTask - errors:\n\t" + JSON.stringify(errors)
      );
      return res.status(409).json(errors);
    }

    const task = req.body;
    const newTask = await taskService.create(task);

    res.status(200).json(newTask);
  } catch (error) {
    logger.error("Task.controller - Create new task failed.\n" + error);
    res.status(500).json({ error: "Create new task failed." });
  }
}

async function updateTask(req, res) {
  try {
    const errors = validationResult(req).errors;
    if (errors.length !== 0) {
      logger.debug(
        "task.controller: updateTask - errors:\n\t" + JSON.stringify(errors)
      );
      return res.status(409).json(errors);
    }

    const task = req.body;
    const updatedTask = await taskService.update(task);

    res.status(200).json(updatedTask);
  } catch (error) {
    logger.error("Task.controller - Update task failed.\n" + error);
    res.status(500).json({ error: "Update task failed." });
  }
}

async function removeTask(req, res) {
  try {
    const taskID = req.params.id;

    await taskService.remove(taskID);

    res.status(200).json({ massage: "Remove task successfully." });
  } catch (error) {
    logger.error("Task.controller - Remove task failed.\n" + error);
    res.status(500).json({ error: "Remove task failed." });
  }
}

async function getCountTasks(req, res) {
  try {
    const { projectID } = req.params;
    const countTasks = await taskService.getCountTasks(projectID);

    res.status(200).json(countTasks);
  } catch (error) {
    logger.error("Task.controller - Get count tasks failed.\n" + error);
    res.status(500).json({ error: "Get count tasks failed." });
  }
}

module.exports = {
  getTasks,
  getTask,
  createTask,
  updateTask,
  removeTask,
  getCountTasks,
};
