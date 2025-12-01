import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BelowHeroInfo from './components/BelowHeroInfo'
import About from './components/About'
import Footer from './components/Footer'
import WhyCodeVeda from './pages/whycodeveda'
import SchedulePage from './pages/SchedulePage'
import SponsorPage from './pages/sponsor'
import TeamPage from './pages/TeamPage'
import ProblemStatements from './pages/ProblemStatements'
import PrizePage from './pages/PrizePage'
import GalleryPage from './pages/GalleryPage'

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
        <Route path="/sponsors" element={<SponsorPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/problem-statements" element={<ProblemStatements />} />
        <Route path="/prizes" element={<PrizePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </Router>
  )
}

export default App
