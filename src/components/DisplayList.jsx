import { useEffect, useState } from 'react';

function DisplayList({ todos, setTodo }) {
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  function handleChange(id) {
    setTodo(
      previousTodos =>
        previousTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    );
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((resp) => resp.json())
      .then((data) => {
        setTodo(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading.......</p>;

  console.log(todos);

  const list = todos.map((todo) => (
    <div key={todo.id}>
      <ul>
        <li>
          <input
            type="checkbox"
            className="checkbox"
            onChange={() => handleChange(todo.id)}
          />
          <span className={todo.completed ? 'strike' : ''}>
            {todo.title}
          </span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      </ul>
    </div>
  ));

  return (
    <ol>
      {list}
  </ol>
  );
}

export default DisplayList;
