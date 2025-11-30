import React from 'react'

const RishiElement = () => {
  const circleImageUrl = '/code-veda-circle.jpg' // image inside public/

  return (
    <div
      style={{
        position: 'relative',
        width: 320,
        height: 320,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Outer rotating ring */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '2px solid transparent',
          borderTopColor: '#ffd700',
          borderRightColor: '#9d4edd',
          animation: 'rishi-ring-outer 12s linear infinite'
        }}
      />

      {/* Middle cyan ring */}
      <div
        style={{
          position: 'absolute',
          inset: 20,
          borderRadius: '50%',
          border: '2px solid #00d9ff',
          boxShadow: '0 0 25px rgba(0,217,255,0.6)',
          animation: 'rishi-ring-middle 6s ease-in-out infinite'
        }}
      />

      {/* Soft glow ring */}
      <div
        style={{
          position: 'absolute',
          inset: 42,
          borderRadius: '50%',
          border: '2px solid rgba(255,215,0,0.6)',
          boxShadow:
            '0 0 30px rgba(255,215,0,0.4), 0 0 50px rgba(157,78,221,0.6), 0 0 70px rgba(0,217,255,0.5)',
          opacity: 0.9
        }}
      />

      {/* IMAGE IN CENTER */}
      <div
        style={{
          position: 'absolute',
          inset: 64,
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow:
            '0 0 25px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.9)',
          transformOrigin: 'center',
          animation: 'rishi-image-pulse 5s ease-in-out infinite'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${circleImageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </div>

      {/* Outer aura */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          boxShadow:
            '0 0 40px rgba(255,215,0,0.2), 0 0 90px rgba(157,78,221,0.4), 0 0 120px rgba(0,217,255,0.35)',
          animation: 'rishi-aura 4.5s ease-in-out infinite'
        }}
      />
    </div>
  )
}

export default RishiElement
