import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BelowHeroInfo from './components/BelowHeroInfo'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container bg-cosmic-900 text-divine-silver">
      <Navbar />
      <Hero />
      <BelowHeroInfo />
      <About />
      <Footer />
    </div>
  )
}

export default App
