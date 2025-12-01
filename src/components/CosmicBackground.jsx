import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimations = ({ mousePos }) => {
  return (
    <>
      {/* Simplified Orbital Particles */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '100px',
              height: '100px',
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? 'rgba(255,215,0,0.1)' : 
                i % 3 === 1 ? 'rgba(168,85,247,0.1)' : 
                'rgba(34,211,238,0.1)'
              } 0%, transparent 70%)`,
              left: '50%',
              top: '50%',
            }}
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                transform: `translateX(${150 + i * 50}px)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Simple Glow following mouse */}
      <motion.div
        className="absolute w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, rgba(168,85,247,0.05) 50%, transparent 70%)',
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          opacity: 0.2
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

const CosmicBackground = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = clientX / window.innerWidth;
    const y = clientY / window.innerHeight;
    setMousePos({ x, y });
  };

  return (
    <div 
      className="min-h-screen text-white relative overflow-x-hidden bg-[linear-gradient(135deg,#140724_0%,#0f0622_50%,#1a0b2e_100%)]"
      onMouseMove={handleMouseMove}
    >
      {/* Starfield Background */}
      <div className="fixed inset-0 pointer-events-none opacity-40 animate-[pulse-glow_4s_ease-in-out_infinite]"
           style={{
             backgroundImage: `
               radial-gradient(2px 2px at 20% 30%, white, transparent),
               radial-gradient(2px 2px at 60% 70%, white, transparent),
               radial-gradient(1px 1px at 50% 50%, white, transparent),
               radial-gradient(1px 1px at 80% 10%, white, transparent),
               radial-gradient(2px 2px at 90% 60%, white, transparent),
               radial-gradient(1px 1px at 33% 80%, white, transparent),
               radial-gradient(1px 1px at 15% 90%, white, transparent),
               radial-gradient(2px 2px at 70% 20%, white, transparent)
             `,
             backgroundSize: '200% 200%'
           }}
      />

      {/* Golden Mandala Overlay */}
      <div className="fixed left-1/2 top-1/2 w-[650px] h-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 pointer-events-none z-0 animate-[float_6s_infinite_ease-in-out]"
           style={{
             background: 'radial-gradient(circle, transparent 30%, rgba(255,193,7,.05) 55%, transparent 75%)'
           }}
      />

      {/* Background Animations */}
      <BackgroundAnimations mousePos={mousePos} />

      {/* Main Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CosmicBackground;
