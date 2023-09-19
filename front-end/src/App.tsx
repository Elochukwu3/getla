import { useState } from 'react'
import NavBar from "@components/NavBar";
import HomeBinder from "@components/HomeBinder";
import PageIntro from '@components/PageIntro';

function App() {

  return (
    <>
      <div  className="min-h-screen py-5 bg-custom-purple">
        <NavBar/>
        <HomeBinder/>
        <PageIntro/>
      </div>
    </>
  )
}

export default App
