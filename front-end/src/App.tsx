import { useState } from 'react'
import NavBar from "@components/NavBar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div  className="min-h-screen py-5 bg-custom-purple">
        <NavBar/>
      </div>
    </>
  )
}

export default App
