import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Task from './Task';

const backendApi = process.env.REACT_APP_BACKEND_API_URL;

const TaskList = ({ onEdit }) => {
  const [tasks, setTasks] = useState([]);

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
      const newTask = { title: 'New Task', description: 'Describe the task', completed: false };
      await axios.post(`${backendApi}/tasks`, newTask);
      fetchTasks();
    } catch (err) {
      console.error('Error creating task:', err);
    }
  };

  return (
    <div>
      <h2>Task List</h2>
      <button onClick={handleCreateTask}>Create Task</button>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} onDelete={() => handleDelete(task.id)} onEdit={onEdit} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

