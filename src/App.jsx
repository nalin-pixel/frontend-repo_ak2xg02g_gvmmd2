import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Events from './components/Events'
import Impact from './components/Impact'
import CTASections from './components/CTASections'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Navbar />
      <Hero />
      <Programs />
      <Events />
      <Impact />
      <CTASections />
      <footer className="bg-slate-950 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/flame-icon.svg" alt="Logo" className="w-6 h-6" />
            <span className="text-slate-300 text-sm">© {new Date().getFullYear()} Future Sparks Foundation</span>
          </div>
          <div className="text-slate-400 text-sm">Digital literacy and STEM education for youth and kids</div>
        </div>
      </footer>
    </div>
  )
}

export default App
