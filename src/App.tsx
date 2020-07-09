import React, { useState } from 'react'
import Button from 'src/components/Button'
import ErrorBoundary from './errorBoundary'

import logo from './logo.svg'
import './App.css'

const BuggyCounter: React.FC = () => {
  const [counter, setCounter] = useState(0)
  if (counter === 5) {
    throw new Error('Ops')
  }
  return (
    <Button onClick={(): void => setCounter(counter + 1)}>{counter}</Button>
  )
}

const App: React.FC = () => {
  const [todoValue, setTodoValue] = useState('')

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoValue(value)
  }

  return (
    <div className="App">
      <Button>Text</Button>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
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
            <label htmlFor="input-todo">
              Todo
              <input
                autoFocus
                value={todoValue}
                onChange={handleChange}
                type="text"
                id="input-todo"
              />
            </label>
          </p>
        </form>
      </section>
    </div>
  )
}

export default App
