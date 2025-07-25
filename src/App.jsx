import { useState } from 'react'
import './App.css'
import Header from './Header'
import Login from './Login'
import Register from './Register'
import Album from './Album'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div>
      {/* <Header name="My first Website developed in React" p1="Home2" p2="Contact Me"></Header>
      <Login></Login>
      <Register></Register> */}
      <Album></Album>
    </div>
  )
}

export default App
