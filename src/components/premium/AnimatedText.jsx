import React from 'react';
import { motion } from 'framer-motion';

// Animated Heading with Letter-by-Letter Animation
export const AnimatedHeading = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
  gradient = 'gold', // gold, cosmic, purple, cyan
  as: Component = 'h1',
}) => {
  const gradients = {
    gold: 'from-yellow-300 via-yellow-500 to-orange-500',
    cosmic: 'from-yellow-400 via-purple-500 to-cyan-400',
    purple: 'from-purple-400 via-purple-600 to-purple-800',
    cyan: 'from-cyan-300 via-cyan-500 to-blue-500',
  };

  const letters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Component
      className={`inline-flex flex-wrap ${className}`}
    >
      <motion.span
        className={`bg-gradient-to-r ${gradients[gradient]} bg-clip-text text-transparent inline-flex flex-wrap`}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block"
            style={{ 
              transformStyle: 'preserve-3d',
              display: letter === ' ' ? 'inline' : 'inline-block',
              width: letter === ' ' ? '0.3em' : 'auto',
            }}
          >
            {letter}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  );
};

// Glowing Text Effect
export const GlowingText = ({
  children,
  className = '',
  color = 'gold', // gold, purple, cyan
  intensity = 'medium', // low, medium, high
}) => {
  const colors = {
    gold: {
      text: 'text-yellow-400',
      glow: 'rgba(255, 215, 0, 0.8)',
    },
    purple: {
      text: 'text-purple-400',
      glow: 'rgba(157, 78, 221, 0.8)',
    },
    cyan: {
      text: 'text-cyan-400',
      glow: 'rgba(0, 217, 255, 0.8)',
    },
  };

  const intensities = {
    low: 20,
    medium: 40,
    high: 60,
  };

  return (
    <motion.span
      className={`${colors[color].text} ${className}`}
      animate={{
        textShadow: [
          `0 0 ${intensities[intensity] * 0.5}px ${colors[color].glow}`,
          `0 0 ${intensities[intensity]}px ${colors[color].glow}`,
          `0 0 ${intensities[intensity] * 0.5}px ${colors[color].glow}`,
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.span>
  );
};

// Typewriter Effect
export const TypewriterText = ({
  texts,
  className = '',
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}) => {
  const [displayText, setDisplayText] = React.useState('');
  const [textIndex, setTextIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-[3px] h-[1em] bg-yellow-400 ml-1 align-middle"
      />
    </span>
  );
};

// Sanskrit-style Decorative Text
export const SanskritDecorativeText = ({
  children,
  className = '',
  showDecorations = true,
}) => {
  return (
    <div className={`relative inline-flex items-center gap-4 ${className}`}>
      {showDecorations && (
        <motion.span
          className="text-yellow-500/60 text-2xl"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ✦
        </motion.span>
      )}
      
      <span className="relative">
        {/* Decorative underline */}
        <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
        {children}
      </span>
      
      {showDecorations && (
        <motion.span
          className="text-yellow-500/60 text-2xl"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          ✦
        </motion.span>
      )}
    </div>
  );
};

// Counting Number Animation
export const AnimatedNumber = ({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = React.useState(0);
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(value);
          const incrementTime = (duration * 1000) / end;
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, Math.max(incrementTime, 10));

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Reveal on Scroll
export const RevealOnScroll = ({
  children,
  direction = 'up', // up, down, left, right
  delay = 0,
  className = '',
}) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedHeading;
