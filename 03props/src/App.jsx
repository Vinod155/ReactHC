import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
   let myObj={
    name:"vinod",
    age:25
   }
  return (
    <>
      <Card username="chai and code"/>
  
    </>
  )
}

export default App
