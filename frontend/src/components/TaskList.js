import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './Task';

const backendApi = process.env.REACT_APP_BACKEND_API_URL;

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('not_completed'); // Default filter is "not_completed"

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`${backendApi}/tasks`);
      setTasks(response.data);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${backendApi}/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  const handleCreateTask = async () => {
    try {
      const newTask = { title, description, completed: false };
      await axios.post(`${backendApi}/tasks`, newTask);
      fetchTasks();
      setTitle(''); // Clear the input fields
      setDescription('');
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  const handleCompleteTask = async (id) => {
    try {
      await axios.put(`${backendApi}/tasks/${id}`, { completed: true });
      fetchTasks();
    } catch (err) {
      console.error('Error completing task:', err);
    }
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    }
    if (filter === 'not_completed') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div>
      <h2>Task List</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateTask();
        }}
      >
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Create Task</button>
      </form>

      <div>
        <label htmlFor="filter">Filter tasks: </label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="not_completed">Not Completed</option>
          <option value="completed">Completed</option>
          <option value="all">All Tasks</option>
        </select>
      </div>

      <ul>
        {filteredTasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => handleDelete(task.id)}
            onComplete={() => handleCompleteTask(task.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

