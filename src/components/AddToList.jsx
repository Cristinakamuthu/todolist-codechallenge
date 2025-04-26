import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(newTodo);
    setNewTodo('');
  };

  return (
    <div className="add-todo-container">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo..."
        className="add-todo-input"
      />
      <button
        onClick={handleSubmit}
        className="add-todo-button"
      >
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;