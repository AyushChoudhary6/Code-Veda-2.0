import React, { useEffect, useState } from 'react'

const BelowHeroInfo = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById('below-hero-info')
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      if (rect.top < vh * 0.8) setVisible(true)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="below-hero-info" className="below-hero-section">
      <div className={visible ? 'below-hero-shell info-in' : 'below-hero-shell info-hidden'}>
        {/* left column */}
        <div className="info-left">
          <h3 className="info-kicker">WHY THIS EDITION</h3>
          <h2 className="info-heading">Code Veda 2.0 is a journey, not just a hackathon.</h2>

          <ul className="info-points">
            <li>
              <span className="info-dot" />
              <span>Blend ancient Vedic intuitions with modern problem‑solving.</span>
            </li>
            <li>
              <span className="info-dot" />
              <span>Explore tracks that touch wellbeing, sustainability, and mindful tech.</span>
            </li>
            <li>
              <span className="info-dot" />
              <span>Build in a space that feels more like a satsang than a sprint.</span>
            </li>
          </ul>
        </div>

        {/* right column */}
        <div className="info-right-card">
          <div className="info-orbit-ring" />
          <div className="info-orbit-glow" />

          <p>
            In Code Veda 2.0, every line of code is treated as a mantra—repeated with focus,
            refined with intention, and released into the world with responsibility. Teams
            don&apos;t just compete; they co‑create experiences that feel cosmic yet practical.
          </p>
          <p>
            From first‑time hackers to seasoned builders, everyone is invited to slow down,
            think deeper, and let curiosity, compassion, and cutting‑edge technology move
            together in one divine flow.
          </p>
        </div>
      </div>
    </section>
  )
}

export default BelowHeroInfo
