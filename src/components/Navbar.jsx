import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else if (id === 'why-code-veda') {
      navigate('/why-code-veda')
    } else if (id === 'schedule') {
      navigate('/schedule')
    } else if (id === 'sponsors') {
      navigate('/sponsors')
    } else if (id === 'team') {
      navigate('/team')
    } else {
      // If we are on a different page and try to scroll to a home section, go home first
      navigate('/')
      // Note: This simple logic might need a timeout or context to scroll after nav, 
      // but for now let's just ensure navigation works.
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }

  return (
    <header className="navbar">
      {/* Left: Logo + text (click to go home) */}
      <div
        className="nav-left"
        onClick={() => handleScroll('home')}
        style={{ cursor: 'pointer' }}
      >
        <img
          src="/geekroom_logo.jpg"
          alt="Geek Room Logo"
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0 0 18px rgba(255,215,0,0.8)'
          }}
        />
        <span className="nav-logo-text">Code Veda 2.0</span>
      </div>

      {/* Center: nav links */}
      <nav className="nav-links">
        <button className="nav-link-btn" onClick={() => handleScroll('home')}>
          Home
        </button>
        <button className="nav-link-btn" onClick={() => handleScroll('why-code-veda')}>
          Why Code Veda
        </button>
        <button className="nav-link-btn" onClick={() => handleScroll('problem-statements')}>
          Problem Statements
        </button>
        <button className="nav-link-btn" onClick={() => handleScroll('schedule')}>
          Schedule
        </button>
        <button className="nav-link-btn" onClick={() => handleScroll('prizes')}>
          Prizes
        </button>
        <button className="nav-link-btn" onClick={() => handleScroll('sponsors')}>
          Sponsors
        </button>
        <button className="nav-link-btn" onClick={() => handleScroll('team')}>
          Team
        </button>
      </nav>

      {/* Right: Register button */}
      <a
        href="https://vision.hack2skill.com/event/codeveda2/?utm_source=google.com&utm_medium=Ayush"
        target="_blank"
        rel="noreferrer"
        className="nav-register-btn glowing-border"
      >
        Register
      </a>
    </header>
  )
}

export default Navbar
