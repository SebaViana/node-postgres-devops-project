const { Task } = require('../models');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      res.status(200).json(task);
    } else {
      res.status(404).send('Task not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      await task.update(req.body);
      res.status(200).json(task);
    } else {
      res.status(404).send('Task not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      await task.destroy();
      res.status(200).send('Task deleted');
    } else {
      res.status(404).send('Task not found');
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

