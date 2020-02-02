import React from "react";
import "./App.css";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <h1>To do list</h1>
      <TodoList />
    </div>
  );
}

export default App;
