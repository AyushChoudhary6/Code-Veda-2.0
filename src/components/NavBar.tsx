import { motion } from 'framer-motion';

const NavBar = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            CodeVeda 2.0
          </motion.div>
          <div className="flex gap-8 text-sm">
            {['Home', 'Schedule', 'Tracks', 'Team', 'Contact'].map((item, i) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </nav>
      </header>
  )
}

export default NavBar