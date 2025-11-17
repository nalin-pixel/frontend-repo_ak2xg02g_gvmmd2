import React from 'react'

const Navbar = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-white font-semibold text-lg">Future Sparks</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <button className="hover:text-white" onClick={() => scrollTo('programs')}>Programs</button>
          <button className="hover:text-white" onClick={() => scrollTo('events')}>Events</button>
          <button className="hover:text-white" onClick={() => scrollTo('impact')}>Impact</button>
          <button className="hover:text-white" onClick={() => scrollTo('volunteer')}>Volunteer</button>
          <button className="hover:text-white" onClick={() => scrollTo('contact')}>Contact</button>
          <a href="/test" className="text-slate-400 hover:text-white">Status</a>
        </nav>
        <button onClick={() => scrollTo('donate')} className="hidden md:inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
          Donate
        </button>
      </div>
    </header>
  )
}

export default Navbar
