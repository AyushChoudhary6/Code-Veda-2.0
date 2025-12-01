import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// Original Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BelowHeroInfo from './components/BelowHeroInfo'
import About from './components/About'
import Footer from './components/Footer'

// Pages
import WhyCodeVeda from './pages/whycodeveda'
import SchedulePage from './pages/SchedulePage'
import SponsorPage from './pages/sponsor'
import TeamPage from './pages/TeamPage'
import ProblemStatements from './pages/ProblemStatements'
import PrizesPage from './pages/Prizes'

// Premium Components
import Preloader from './components/premium/Preloader'
import CustomCursor from './components/premium/CustomCursor'
import SmoothScrollProvider from './components/premium/SmoothScrollProvider'
import PageTransition from './components/premium/PageTransition'
import GlassmorphismNavbar from './components/premium/GlassmorphismNavbar'
import EnhancedCosmicBackground from './components/premium/EnhancedCosmicBackground'

const HomePage = () => (
  <div className="app-container bg-cosmic-900 text-divine-silver relative">
    <GlassmorphismNavbar />
    <Hero />
    <BelowHeroInfo />
    <About />
    <Footer />
  </div>
)

// Animated Routes Component
const AnimatedRoutes = () => {
  const location = useLocation()
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/why-code-veda" element={
          <PageTransition>
            <div className="relative">
              <GlassmorphismNavbar />
              <WhyCodeVeda />
            </div>
          </PageTransition>
        } />
        <Route path="/schedule" element={
          <PageTransition>
            <div className="relative">
              <GlassmorphismNavbar />
              <SchedulePage />
            </div>
          </PageTransition>
        } />
        <Route path="/sponsors" element={
          <PageTransition>
            <div className="relative">
              <GlassmorphismNavbar />
              <SponsorPage />
            </div>
          </PageTransition>
        } />
        <Route path="/team" element={
          <PageTransition>
            <div className="relative">
              <GlassmorphismNavbar />
              <TeamPage />
            </div>
          </PageTransition>
        } />
        <Route path="/problem-statements" element={
          <PageTransition>
            <div className="relative">
              <GlassmorphismNavbar />
              <ProblemStatements />
            </div>
          </PageTransition>
        } />
        <Route path="/prizes" element={
          <PageTransition>
            <div className="relative">
              <GlassmorphismNavbar />
              <PrizesPage />
            </div>
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(false) // Disabled preloader for now
  const [showCursor, setShowCursor] = useState(false) // Disabled custom cursor

  useEffect(() => {
    // Check if device supports hover (not touch-only)
    // const hasHover = window.matchMedia('(hover: hover)').matches
    // setShowCursor(hasHover)

    // Simulate loading - disabled for faster dev
    // const timer = setTimeout(() => {
    //   setIsLoading(false)
    // }, 3500)

    // return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Premium Preloader */}
      <AnimatePresence>
        {isLoading && <Preloader />}
      </AnimatePresence>

      {/* Custom Cursor - Only on devices with hover */}
      {showCursor && !isLoading && <CustomCursor />}

      {/* Enhanced Cosmic Background */}
      {!isLoading && (
        <div className="fixed inset-0 z-0">
          <EnhancedCosmicBackground />
        </div>
      )}

      {/* Main App */}
      {!isLoading && (
        <Router>
          <SmoothScrollProvider>
            <div className="relative z-10">
              <AnimatedRoutes />
            </div>
          </SmoothScrollProvider>
        </Router>
      )}
    </>
  )
}

export default App
