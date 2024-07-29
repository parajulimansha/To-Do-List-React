import React from 'react';

// Component for displaying a single task
const TodoItem = ({ task, removeTask, completeTask, showCompleteButton }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="task-container">
        <span className="task-text">{task.text}</span>
        <div className="button-container">
          {/* Showing complete button only if the task is not completed */}
          {showCompleteButton && !task.completed && (
            <button onClick={completeTask} className="complete-button">Complete</button>
          )}
          {/* Button to delete the task */}
          <button onClick={removeTask} className="delete-button">Delete</button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
