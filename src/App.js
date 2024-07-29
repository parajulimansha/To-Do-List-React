import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  // Stating to store tasks
  const [tasks, setTasks] = useState([]);

  // Adding a new task
  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  // Removing a task by index
  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1); // Removing the task
    setTasks(newTasks); // Update state
  };

  // Toggle task completion status
  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed; // Toggle completion
    setTasks(newTasks); // Update state
  };

  // Filtering tasks into active and completed
  const activeTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="app">
      <h1>To-Do List Application</h1>
      <TodoForm addTask={addTask} /> {/* Form to add new tasks */}
      <h2>Active Tasks</h2>
      <TodoList 
        tasks={activeTasks} 
        removeTask={removeTask} 
        completeTask={completeTask} 
        showCompleteButton={true} 
      />
      <h2>Completed Tasks</h2>
      <TodoList 
        tasks={completedTasks} 
        removeTask={removeTask} 
        completeTask={completeTask} 
        showCompleteButton={false} 
      />
    </div>
  );
};

export default App;
