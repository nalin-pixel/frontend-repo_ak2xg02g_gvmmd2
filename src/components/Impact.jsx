import React from 'react'

const Impact = () => {
  const stats = [
    { label: 'Students Reached', value: '1,200+' },
    { label: 'Volunteer Hours', value: '3,500+' },
    { label: 'Schools Partnered', value: '18' },
    { label: 'Workshops Delivered', value: '220+' },
  ]

  return (
    <section id="impact" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Impact</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Together with educators, families, and partners, we make STEM learning accessible and joyful.</p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-200 p-6 text-center bg-gradient-to-b from-white to-slate-50">
              <div className="text-3xl font-bold text-slate-900">{s.value}</div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
