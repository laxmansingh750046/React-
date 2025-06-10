import {useState} from 'react'
import UserContextProvider from './context/UserContextProvider'
import {Login, Profile} from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <UserContextProvider>
    <h1>Api context in react</h1>
    <Login />
    <Profile />
   </UserContextProvider>
  )
}

export default App
