import { useState } from 'react'
import NavBar from "@components/NavBar";
import HomeBinder from "@components/HomeBinder";
import PageIntro from '@components/PageIntro';
import PageRules from '@components/PageRules';
import PageCriteria from '@components/PageCriteria';
import Faq from '@components/Faq/Index';
import PriceAward from '@components/PriceAward';
import Patner from '@components/Patner';
import Policy from '@components/Policy';
import Footer from '@components/Footer';
import Register from '@components/Register';

function App() {

  return (
    <>
      <div  className="min-h-screen pt-5 bg-custom-purple">
        <NavBar/>
        <HomeBinder/>
       
        <PageIntro/>
        <PageRules/>
        <PageCriteria/>
        <Faq/>
        <PriceAward/>
        <Patner/>
        <Policy/>
        <Footer/>
        <Register/>
      </div>
    </>
  )
}

export default App
