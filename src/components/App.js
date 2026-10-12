
import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (event) => {
    event.preventDefault();
    const todo = newTodo.trim();

    if (!todo) {
      return;
    }

    setTodos((currentTodos) => [...currentTodos, todo]);
    setNewTodo("");
  };

  const deleteTodo = (indexToDelete) => {
    setTodos((currentTodos) =>
      currentTodos.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>To-Do List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          placeholder="Enter a todo"
          aria-label="Todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={`${todo}-${index}`}>
            {todo} <button type="button" onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
