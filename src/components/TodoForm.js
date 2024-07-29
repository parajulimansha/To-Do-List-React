import React, { useState } from 'react';

// Component for adding new tasks
const TodoForm = ({ addTask }) => {
  // Stating to store the input value
  const [value, setValue] = useState('');

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission
    if (!value) return; // returns nothing if input is empty
    addTask(value); // Calling addTask with the input value
    setValue(''); // Clearing the input field
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit" className="add-button">Add</button>
    </form>
  );
};

export default TodoForm;
