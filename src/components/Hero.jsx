import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.25),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-4 pt-28 pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Empowering Kids & Teens with Digital Literacy and STEM
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl">
              We are a community nonprofit helping young learners explore coding, robotics, and creative technology through hands-on programs and mentorship.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#programs" className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-3 rounded-full transition-colors">Explore Programs</a>
              <a href="#volunteer" className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 rounded-full transition-colors">Volunteer</a>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg">
              <img src="/hero-stem.png" alt="STEM Kids" className="w-full rounded-2xl border border-white/10 shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white text-sm px-4 py-2 rounded-lg shadow-lg">After‑School Clubs</div>
              <div className="absolute -top-6 -right-6 bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg shadow-lg">Weekend Workshops</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
