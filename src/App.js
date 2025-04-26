import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/Searchbar';
import DisplayList from './components/DisplayList';
import AddTodo from './components/AddToList';
import './index.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleAddTodo = (title) => {
    if (title.trim()) {
      const newTodo = {
        id: Date.now(),
        title,
        completed: false
      };
      setTodos([newTodo, ...todos]);
    }
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <AddTodo onAddTodo={handleAddTodo} />
      <DisplayList todos={filteredTodos} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
};

export default App;
