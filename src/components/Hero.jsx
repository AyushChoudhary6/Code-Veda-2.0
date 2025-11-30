import React, { useEffect, useState } from 'react'
import Stars from './Stars'
import RishiElement from './RishiElement'
// import CodeVedaRing from './CodeVedaRing'  // ye line hata de ya comment

const Hero = () => {
  const fullTitle = 'Code Veda 2.0'
  const [displayTitle, setDisplayTitle] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index += 1
      setDisplayTitle(fullTitle.slice(0, index))
      if (index === fullTitle.length) clearInterval(interval)
    }, 90)
    return () => clearInterval(interval)
  }, [])

  const handleScrollAbout = () => {
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="cosmic-bg" style={{ position: 'relative' }}>
      <Stars />
      <div className="hero">
        <div className="hero-left">
          <div className="hero-kicker">COSMIC HACKATHON EXPERIENCE</div>

          <h1 className="hero-title glowing-text">
            {displayTitle}
            <span
              style={{
                display: 'inline-block',
                width: '0.6ch',
                marginLeft: '2px',
                borderRight: '2px solid #ffd700',
                animation: 'cursor-blink 1s step-end infinite'
              }}
            />
          </h1>

          <p className="hero-subtitle">Where Code Meets Cosmic Wisdom</p>

          <p className="hero-body">
            Embark on a transformative journey where ancient Vedic wisdom meets modern technology. Code Veda 2.0
            is not just a hackathon—it&apos;s a cosmic convergence of innovation, creativity, and consciousness.
            Join developers, designers, and dreamers as we decode the universe through lines of code and timeless
            principles.
          </p>

          <div className="hero-actions">
            <a
              href="https://vision.hack2skill.com/event/codeveda2/?utm_source=google.com&utm_medium=Riya"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Register Now
            </a>
            <button className="btn-secondary" onClick={handleScrollAbout}>
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-right">
          <RishiElement />
        </div>
      </div>

      <div className="scroll-hint">SCROLL TO EXPLORE</div>
    </section>
  )
}

export default Hero
