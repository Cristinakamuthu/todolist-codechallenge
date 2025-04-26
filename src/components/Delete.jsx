import React from 'react';

const Delete = ({ id, onDelete }) => {
  return (
    <button
      onClick={() => onDelete(id)}
      className="delete-button"
    >
      🗑️
    </button>
  );
};

export default Delete;
