import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';



const App = () => {
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900 '>
      <NavBar />
      <LandingPage />
      <Marquee />
      <About />
      <Eye />
      <Featured />
      <Cards />
      {/* <Footer /> */}

    </div>
  )
}

export default App