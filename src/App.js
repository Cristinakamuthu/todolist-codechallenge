import { useState } from 'react';
import DisplayList from './components/DisplayList'; // Adjust the path if your file is somewhere else

function App() {
  const [todos, setTodo] = useState([]);

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <DisplayList todos={todos} setTodo={setTodo} />
    </div>
  );
}

export default App;
