import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const GlassCard = ({
  children,
  className = '',
  tiltEnabled = true,
  glowColor = 'gold', // gold, purple, cyan, rainbow
  hoverScale = 1.02,
  onClick,
  ...props
}) => {
  const glowColors = {
    gold: 'rgba(255, 215, 0, 0.3)',
    purple: 'rgba(157, 78, 221, 0.3)',
    cyan: 'rgba(0, 217, 255, 0.3)',
    rainbow: 'linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(157, 78, 221, 0.3), rgba(0, 217, 255, 0.3))',
  };

  const borderColors = {
    gold: 'border-yellow-500/30',
    purple: 'border-purple-500/30',
    cyan: 'border-cyan-500/30',
    rainbow: 'border-white/20',
  };

  const CardContent = (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/5 backdrop-blur-xl
        border ${borderColors[glowColor]}
        ${className}
      `}
      whileHover={{ scale: hoverScale }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      onClick={onClick}
      {...props}
    >
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${glowColors[glowColor]}, transparent, ${glowColors[glowColor]})`,
            animation: 'borderRotate 4s linear infinite',
          }}
        />
      </div>

      {/* Inner Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColors[glowColor]} 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Shine Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.1) 45%, transparent 50%)',
        }}
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
    </motion.div>
  );

  if (tiltEnabled) {
    return (
      <Tilt
        className="group"
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        scale={1}
        transitionSpeed={1000}
        gyroscope={true}
      >
        {CardContent}
      </Tilt>
    );
  }

  return <div className="group">{CardContent}</div>;
};

// Preset card styles
export const FeatureCard = ({ icon: Icon, title, description, ...props }) => (
  <GlassCard className="p-6 cursor-pointer" {...props}>
    <div className="flex flex-col items-center text-center">
      {Icon && (
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500/20 to-purple-500/20 flex items-center justify-center mb-4 border border-yellow-500/30">
          <Icon className="w-7 h-7 text-yellow-400" />
        </div>
      )}
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  </GlassCard>
);

export const StatCard = ({ value, label, icon: Icon, ...props }) => (
  <GlassCard className="p-5" glowColor="purple" {...props}>
    <div className="flex items-center gap-4">
      {Icon && (
        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
      )}
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
      </div>
    </div>
  </GlassCard>
);

export default GlassCard;
