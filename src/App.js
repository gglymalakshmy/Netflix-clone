import React from 'react';
import Navbar from '../src/Components/Navbar';
import Hero from '../src/Components/Hero';
import Footer from '../src/Components/Footer';
import Faq from './Components/Faq';

function App() {
  return (
    
    <div className="bg-[url('./netflix.png')]  bg-black bg-opacity-75 bg-blend-darken">
      <Navbar/>
      <Hero/>
      <Faq/>
      <Footer/>
    </div>
   
    
  )
}

export default App