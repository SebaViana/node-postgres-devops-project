import React from 'react';

const Task = ({ task, onDelete, onComplete }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={onComplete} disabled={task.completed}>
        {task.completed ? 'Completed' : 'Mark as Completed'}
      </button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default Task;

