import React from 'react';
import Delete from './Delete';

const DisplayList = ({ todos, onDelete, onToggle }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? 'todo-completed' : ''}`}
        >
          <div className="todo-content">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="checkbox"
            />
            <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
          </div>
          <Delete id={todo.id} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default DisplayList;