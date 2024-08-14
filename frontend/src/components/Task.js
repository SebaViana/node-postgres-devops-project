import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Task;

