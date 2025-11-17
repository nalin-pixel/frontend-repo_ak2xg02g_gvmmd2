import React, { useState } from 'react'

const CTASections = () => {
  const [status, setStatus] = useState({ contact: null, volunteer: null, subscribe: null })

  const submit = async (endpoint, data, key) => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}${endpoint}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      if (!res.ok) throw new Error('Failed')
      setStatus((s) => ({ ...s, [key]: 'Thanks! We will be in touch.' }))
    } catch (e) {
      setStatus((s) => ({ ...s, [key]: 'Saved locally. Backend currently unavailable.' }))
    }
  }

  const handleContact = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    submit('/api/contact', { name: fd.get('name'), email: fd.get('email'), subject: fd.get('subject'), message: fd.get('message') }, 'contact')
    e.currentTarget.reset()
  }

  const handleVolunteer = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const interests = Array.from(e.currentTarget.querySelectorAll('input[name="interests"]:checked')).map(i => i.value)
    submit('/api/volunteer', { name: fd.get('name'), email: fd.get('email'), phone: fd.get('phone'), interests, notes: fd.get('notes') }, 'volunteer')
    e.currentTarget.reset()
  }

  const handleSubscribe = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    submit('/api/subscribe', { email: fd.get('email'), name: fd.get('name') }, 'subscribe')
    e.currentTarget.reset()
  }

  return (
    <>
      <section id="volunteer" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Volunteer with Us</h2>
              <p className="mt-3 text-slate-600">Mentor students, support events, or help build curriculum. No teaching experience required—just a passion for helping young people thrive.</p>
              <form onSubmit={handleVolunteer} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Full name" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
                  <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
                </div>
                <input name="phone" placeholder="Phone (optional)" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
                <div className="flex flex-wrap gap-3 text-sm">
                  <label className="inline-flex items-center gap-2"><input type="checkbox" name="interests" value="mentoring" /> Mentoring</label>
                  <label className="inline-flex items-center gap-2"><input type="checkbox" name="interests" value="events" /> Events</label>
                  <label className="inline-flex items-center gap-2"><input type="checkbox" name="interests" value="curriculum" /> Curriculum</label>
                </div>
                <textarea name="notes" placeholder="Tell us a bit about you" className="w-full rounded-lg border border-slate-300 px-3 py-2 h-24" />
                <button className="inline-flex bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-lg">Apply</button>
                {status.volunteer && <p className="text-sm text-green-700 mt-2">{status.volunteer}</p>}
              </form>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">Why Volunteer?</h3>
              <ul className="mt-3 space-y-2 text-slate-600 text-sm list-disc pl-6">
                <li>Inspire the next generation of creators</li>
                <li>Gain meaningful leadership experience</li>
                <li>Connect with a vibrant community</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
              <p className="mt-3 text-slate-600">We love partnering with schools, libraries, and local organizations. Reach out to bring a program to your community.</p>
              <form onSubmit={handleContact} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="name" required placeholder="Full name" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
                  <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
                </div>
                <input name="subject" placeholder="Subject (optional)" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
                <textarea name="message" required placeholder="Your message" className="w-full rounded-lg border border-slate-300 px-3 py-2 h-28" />
                <button className="inline-flex bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-lg">Send</button>
                {status.contact && <p className="text-sm text-green-700 mt-2">{status.contact}</p>}
              </form>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Newsletter</h3>
              <p className="mt-2 text-slate-600 text-sm">Get program announcements and volunteer opportunities.</p>
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-3">
                <input name="email" type="email" required placeholder="Your email" className="flex-1 rounded-lg border border-slate-300 px-3 py-2" />
                <input name="name" placeholder="Name (optional)" className="hidden md:block rounded-lg border border-slate-300 px-3 py-2 w-40" />
                <button className="inline-flex bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2 rounded-lg">Subscribe</button>
              </form>
              {status.subscribe && <p className="text-sm text-green-700 mt-3">{status.subscribe}</p>}
            </div>
          </div>
        </div>
      </section>

      <section id="donate" className="bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white">Fuel the Mission</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">Your support keeps programs free and accessible for families. Every gift makes an impact.</p>
          <div className="mt-6 inline-flex rounded-full bg-white/10 p-1">
            <a href="#" className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold">Donate Once</a>
            <a href="#" className="px-6 py-3 rounded-full text-white">Monthly</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTASections
