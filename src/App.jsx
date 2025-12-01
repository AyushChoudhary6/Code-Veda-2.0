import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BelowHeroInfo from './components/BelowHeroInfo'
import About from './components/About'
import Footer from './components/Footer'
import WhyCodeVeda from './pages/WhyCodeVeda'
import SchedulePage from './pages/SchedulePage'

const HomePage = () => (
  <div className="app-container bg-cosmic-900 text-divine-silver">
    <Navbar />
    <Hero />
    <BelowHeroInfo />
    <About />
    <Footer />
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/why-code-veda" element={<WhyCodeVeda />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </Router>
  )
}

export default App
