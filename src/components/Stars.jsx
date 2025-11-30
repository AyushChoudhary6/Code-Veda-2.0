import React, { useEffect, useState } from 'react'

const Stars = () => {
  const [stars, setStars] = useState([])

  useEffect(() => {
   const arr = Array.from({ length: 60 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  // size: Math.random() * 2 + 0.6,  // old
  size: Math.random() * 2.5 + 1.2,   // 1.2px – 3.7px (thode bade)
  opacity: Math.random() * 0.6 + 0.2,
  // duration: Math.random() * 18 + 12, // old 12–30s
  duration: Math.random() * 10 + 8,   // 8–18s (thoda fast)
  delay: Math.random() * 8            // 0–8s
}))

    setStars(arr)
  }, [])

  return (
    <div className="hero-stars-wrapper">
      {stars.map((s) => (
        <div
          key={s.id}
          className="hero-star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`
          }}
        />
      ))}
    </div>
  )
}

export default Stars
