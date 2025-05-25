import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux Mini Project</h1>
      <ThemeToggle />
      <Counter />
      <Todo />
    </div>
  );
};

export default App;
