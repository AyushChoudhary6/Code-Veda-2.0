import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const GlassmorphismNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', path: '/', section: 'hero' },
    { name: 'Why Code Veda', path: '/why-code-veda', section: null },
    { name: 'Schedule', path: '/schedule', section: null },
    { name: 'Prizes', path: '/prizes', section: null },
    { name: 'Sponsors', path: '/sponsors', section: null },
    { name: 'Problems', path: '/problem-statements', section: null },
    { name: 'Team', path: '/team', section: null },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setIsMenuOpen(false);
    if (item.section && location.pathname === '/') {
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(item.path);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-2'
            : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className={`
              relative rounded-2xl overflow-hidden
              ${isScrolled 
                ? 'bg-black/60 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-purple-500/10' 
                : 'bg-transparent'
              }
            `}
            layout
          >
            {/* Animated Border Glow */}
            {isScrolled && (
              <div className="absolute inset-0 rounded-2xl">
                <div 
                  className="absolute inset-[-2px] rounded-2xl opacity-50"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.5), rgba(157, 78, 221, 0.5), rgba(0, 217, 255, 0.5), transparent)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 3s linear infinite',
                  }}
                />
              </div>
            )}

            <div className="relative flex items-center justify-between h-16 px-6">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 group">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {/* Om Symbol with Glow */}
                  <span className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                    ॐ
                  </span>
                  <div className="absolute -inset-2 bg-yellow-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white tracking-wider">CODE VEDA</span>
                  <span className="text-[10px] text-yellow-400/80 tracking-[0.2em] uppercase">Ancient Wisdom • Modern Code</span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`
                      relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300
                      ${location.pathname === item.path 
                        ? 'text-yellow-400' 
                        : 'text-gray-300 hover:text-white'
                      }
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Shooting Star Effect on Hover */}
                    <AnimatePresence>
                      {activeIndex === index && (
                        <motion.div
                          className="absolute inset-0 rounded-xl overflow-hidden"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {/* Background Glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-purple-500/10 to-cyan-500/10" />
                          
                          {/* Shooting Stars */}
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                              style={{
                                top: `${20 + i * 30}%`,
                                boxShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.5)',
                              }}
                              initial={{ left: '-10%', opacity: 0 }}
                              animate={{ 
                                left: '110%', 
                                opacity: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 0.8,
                                delay: i * 0.15,
                                ease: 'easeOut',
                              }}
                            >
                              {/* Trail */}
                              <div 
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-px"
                                style={{
                                  background: 'linear-gradient(to left, rgba(255, 215, 0, 0.8), transparent)',
                                }}
                              />
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Active Indicator */}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-xl bg-yellow-500/10 border border-yellow-500/30"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    <span className="relative z-10">{item.name}</span>
                  </motion.button>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <motion.a
                  href="https://devfolio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600" />
                  
                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.4) 45%, transparent 50%)',
                    }}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Pulsing Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />

                  <span className="relative z-10 text-black">Register Now</span>
                  <svg className="relative z-10 w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden relative w-10 h-10 flex items-center justify-center"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative w-6 h-5 flex flex-col justify-between">
                  <motion.span
                    className="w-full h-0.5 bg-white rounded-full origin-left"
                    animate={{
                      rotate: isMenuOpen ? 45 : 0,
                      y: isMenuOpen ? 0 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-white rounded-full"
                    animate={{
                      opacity: isMenuOpen ? 0 : 1,
                      x: isMenuOpen ? 20 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-white rounded-full origin-left"
                    animate={{
                      rotate: isMenuOpen ? -45 : 0,
                      y: isMenuOpen ? 0 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-24 left-4 right-4 bg-gradient-to-br from-purple-900/90 to-black/90 rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              {/* Cosmic Background */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      opacity: Math.random() * 0.5 + 0.2,
                    }}
                  />
                ))}
              </div>

              <div className="relative p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`
                      w-full text-left px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300
                      ${location.pathname === item.path
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }
                    `}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Mobile CTA */}
                <motion.a
                  href="https://devfolio.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-3 rounded-xl text-lg font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-black mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                >
                  Register Now
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  );
};

export default GlassmorphismNavbar;
