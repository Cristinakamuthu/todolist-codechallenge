import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(title);
    setTitle('');
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo🙌"
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-button"> + </button>
    </form>
  );
};

export default AddTodo;
