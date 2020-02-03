import React from "react";
import "./App.css";
import TodoList from "./components/todoList/TodoList";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
