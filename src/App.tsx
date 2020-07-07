import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [todoValue, setTodoValue] = useState("");

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <form>
          <p>
            <label htmlFor="input-todo">Todo</label>
            <input
              autoFocus
              value={todoValue}
              onChange={handleChange}
              type="text"
              id="input-todo"
            />
          </p>
        </form>
      </section>
    </div>
  );
}

export default App;
