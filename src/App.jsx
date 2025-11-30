import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import WhyCodeVeda from './pages/whycodeveda'
import Footer from './components/Footer'

const Home = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
    <div className="p-6 bg-black/30 border border-slate-700 rounded-2xl shadow-lg">
      <h1 className="text-4xl font-bold">CodeVeda — Demo</h1>
      <p className="mt-2 text-slate-300">Explore the CodeVeda concept and experience the Why page.</p>
      <div className="mt-4">
        <Link to="/why-code-veda" className="px-4 py-2 rounded-full bg-yellow-400 text-slate-900 font-semibold">Open Why CodeVeda</Link>
      </div>
    </div>
  </div>
)

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="p-3 bg-black/30 border-b border-slate-700/60">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <Link to="/" className="text-yellow-200 font-bold">CodeVeda</Link>
            <div className="flex items-center gap-3">
              <Link to="/" className="text-slate-300 hover:text-white">Home</Link>
              <Link to="/why-code-veda" className="text-slate-300 hover:text-white">Why CodeVeda</Link>
            </div>
          </div>
        </nav>

        <main className="flex-1">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-code-veda" element={<WhyCodeVeda />} />
          </Routes>
        </main>
        {/* Persistent footer across routes */}
        <Footer />
      </div>
    </Router>
  )
}

export default App