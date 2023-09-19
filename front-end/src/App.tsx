import { useState } from 'react'
import NavBar from "@components/NavBar";
import HomeBinder from "@components/HomeBinder";

function App() {

  return (
    <>
      <div  className="min-h-screen py-5 bg-custom-purple">
        <NavBar/>
        <HomeBinder/>
        <div className="radial-gradient"></div>
      </div>
    </>
  )
}

export default App
