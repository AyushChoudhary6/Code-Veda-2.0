import React, { useEffect, useState } from 'react'

const About = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('about')
      if (!el) return

      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight

      if (rect.top < vh * 0.75) {
        setVisible(true)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="about" className="about-section">
      <div className={visible ? 'about-inner about-animate-in' : 'about-inner about-animate-hidden'}>
        <h2 className="about-title glowing-text">About Code Veda 2.0</h2>
        <div className="about-card">
          <p style={{ marginBottom: 18 }}>
            Code Veda 2.0 is a cosmic hackathon where timeless Vedic ideas meet the creativity of modern
            developers. Instead of treating code as just logic and syntax, this edition invites you to write
            software like a mantra—focused, precise, and aligned with intention.
          </p>
          <p style={{ marginBottom: 18 }}>
            Across every track and problem statement, you are nudged to think beyond “does it work?” and
            explore “does it elevate?”. From mindful productivity tools and wellbeing apps to sustainable
            systems and spiritual explorations, Code Veda 2.0 gives you a canvas to experiment fearlessly
            while staying rooted in ethics.
          </p>
          <p>
            Whether you are shipping your first React component or architecting complex systems, this space
            is designed to feel like a satsang for builders—a gathering where curiosity, compassion, and
            cutting‑edge technology move together in one divine flow.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
