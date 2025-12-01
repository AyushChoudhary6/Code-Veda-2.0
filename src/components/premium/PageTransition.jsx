import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageVariants = {
  initial: {
    opacity: 0,
    clipPath: 'circle(0% at 50% 50%)',
  },
  animate: {
    opacity: 1,
    clipPath: 'circle(150% at 50% 50%)',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      clipPath: { duration: 1.2, ease: [0.76, 0, 0.24, 1] },
    },
  },
  exit: {
    opacity: 0,
    clipPath: 'circle(0% at 50% 50%)',
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

// Alternative: Cosmic Warp Effect
const warpVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    filter: 'blur(20px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    filter: 'blur(20px)',
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Slide variants for different directions
const slideVariants = {
  initial: (direction) => ({
    x: direction === 'left' ? '100%' : direction === 'right' ? '-100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    opacity: 0,
  }),
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
    },
  },
  exit: (direction) => ({
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '-100%' : direction === 'down' ? '100%' : 0,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

const PageTransition = ({ children, variant = 'warp' }) => {
  const location = useLocation();
  
  const variants = {
    circle: pageVariants,
    warp: warpVariants,
    slide: slideVariants,
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={variants[variant]}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen"
      >
        {children}
        
        {/* Transition Overlay */}
        <TransitionOverlay />
      </motion.div>
    </AnimatePresence>
  );
};

// Cosmic portal transition overlay
const TransitionOverlay = () => {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-[9998] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/50 via-cosmic-900/80 to-black" />
        
        {/* Warp Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="warpGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="70%" stopColor="rgba(157, 78, 221, 0.3)" />
              <stop offset="100%" stopColor="rgba(255, 215, 0, 0.5)" />
            </radialGradient>
          </defs>
          {[...Array(12)].map((_, i) => (
            <motion.line
              key={i}
              x1="50%"
              y1="50%"
              x2={`${50 + 50 * Math.cos((i * 30 * Math.PI) / 180)}%`}
              y2={`${50 + 50 * Math.sin((i * 30 * Math.PI) / 180)}%`}
              stroke="url(#warpGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 0.6, delay: i * 0.02 }}
            />
          ))}
        </svg>
      </motion.div>
    </>
  );
};

export default PageTransition;
