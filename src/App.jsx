import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BelowHeroInfo from './components/BelowHeroInfo'
import About from './components/About'
import ScheduleSection from './components/ScheduleSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container bg-cosmic-900 text-divine-silver">
      <Navbar />
      <Hero />
      <BelowHeroInfo />
      <About />
      <ScheduleSection />
      <Footer />
    </div>
  )
}

export default App
