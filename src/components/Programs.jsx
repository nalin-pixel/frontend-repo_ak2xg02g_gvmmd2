import React, { useEffect, useState } from 'react'

const Programs = () => {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/programs`)
        if (!res.ok) throw new Error('Failed to load programs')
        const data = await res.json()
        setPrograms(data)
      } catch (e) {
        // Fallback static examples if backend empty/unavailable
        setPrograms([
          { title: 'After‑School Coding Club', summary: 'Weekly hands‑on coding sessions using Scratch and Python.', age_group: 'Ages 8–12', topics: ['Scratch', 'Python', 'Logic'], image: '/prog-coding.png' },
          { title: 'Robotics & Engineering', summary: 'Build, wire, and program simple robots and sensors.', age_group: 'Ages 10–14', topics: ['Robotics', 'Arduino', 'Design'], image: '/prog-robotics.png' },
          { title: 'Girls in Tech Saturdays', summary: 'Confidence‑building workshops led by women in STEM.', age_group: 'Ages 11–15', topics: ['Web', 'AI', 'Careers'], image: '/prog-girls.png' },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchPrograms()
  }, [])

  return (
    <section id="programs" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Programs</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Inclusive, project‑based learning pathways that spark curiosity and build future‑ready skills.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            [...Array(3)].map((_, i) => (
              <div key={i} className="h-64 rounded-xl bg-slate-100 animate-pulse" />
            ))
          ) : (
            programs.map((p, idx) => (
              <div key={idx} className="group rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow">
                {p.image && <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                  <p className="text-sm text-slate-600 mt-1">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">{p.age_group}</span>
                    {p.topics?.slice(0,3).map((t) => (
                      <span key={t} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Programs
