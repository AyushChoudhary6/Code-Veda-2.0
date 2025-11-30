import React from 'react'

const CodeVedaRing = () => {
  return (
    <div className="ring-hero-wrapper">
      <div className="ring-hero-outer" />
      <div className="ring-hero-middle" />
      <div className="ring-hero-inner">
        {/* yaha pe tumhara round image use karo */}
        <img
          src="/code-veda-circle.png"
          alt="Code Veda 2.0"
          className="ring-hero-logo"
        />
      </div>
    </div>
  )
}

export default CodeVedaRing
