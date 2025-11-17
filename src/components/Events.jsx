import React, { useEffect, useState } from 'react'

const Events = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/events`)
        if (!res.ok) throw new Error('fail')
        const data = await res.json()
        setEvents(data)
      } catch (e) {
        setEvents([
          { title: 'STEM Family Night', description: 'Hands‑on stations in coding, circuits, and maker crafts.', date: 'Nov 30', location: 'Community Center' },
          { title: 'Hour of Code', description: 'Beginner‑friendly intro to coding for all ages.', date: 'Dec 7', location: 'Online' },
          { title: 'Robotics Demo Day', description: 'Showcase projects from our robotics track.', date: 'Jan 14', location: 'Library' },
        ])
      }
    }
    load()
  }, [])

  return (
    <section id="events" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Upcoming Events</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Free and low‑cost community events that welcome beginners and families.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {events.map((e, i) => (
            <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition-shadow">
              <div className="text-sm text-blue-600 font-semibold">{e.date}</div>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">{e.title}</h3>
              <p className="mt-1 text-slate-600 text-sm">{e.description}</p>
              <div className="mt-3 text-xs text-slate-500">{e.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
