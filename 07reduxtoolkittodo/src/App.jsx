import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import './App.css' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Learn about redux toolkit</h1>
    <AddTodo />
    <Todo />
    </>
  )
}

export default App
