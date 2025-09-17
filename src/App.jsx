import React from 'react'
import Nav from './Components/Nav'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Coding from './Components/Coding'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'



const App = () => {
  return (
    <>
    <Nav />
     <div className='max-w-7xl mx-auto pt-20 px-6'>
      <Hero />
      <Features />
      <Coding />
      <Pricing />
      <Testimonials />
      <Footer />
    

     </div>
    </>
  )
}

export default App

//navbar me btns ke bich gap jyada hai or 
// pricibg sec me hovre effect km krna h cards ko thoda chhota rkhna hai 