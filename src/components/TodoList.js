import React from 'react';
import TodoItem from './TodoItem';

// Component for displaying a list of tasks
const TodoList = ({ tasks, removeTask, completeTask, showCompleteButton }) => {
  return (
    <ul>
      {/* Render TodoItem for each task */}
      {tasks.map((task, index) => (
        <TodoItem
          key={index} // Unique key for each item
          task={task} // Passing task details
          removeTask={() => removeTask(index)} // Passing function to remove task
          completeTask={() => completeTask(index)} // Passing function to complete task
          showCompleteButton={showCompleteButton} // Passing whether to show complete button
        />
      ))}
    </ul>
  );
};

export default TodoList;
