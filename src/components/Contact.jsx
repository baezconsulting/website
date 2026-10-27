import { useState } from 'react'
import { business, services, formspreeId } from '../site.js'
import Reveal from './Reveal.jsx'

const inputClass =
  'rounded-lg border border-edge-strong bg-night px-3.5 py-3 font-normal text-text outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30'

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!formspreeId) {
      const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent('Consulting inquiry')}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="border-t border-edge py-24">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-14 px-6">
        <Reveal className="min-w-0 flex-[1_1_360px]">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Have a slow system or a new build?
          </h2>
          <p className="mt-5 text-lg text-muted">Tell us what you're working on.</p>
          <a href={`mailto:${business.email}`} className="mt-7 inline-block font-mono text-sky hover:underline">
            {business.email}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 flex-[1_1_480px]">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3.5 rounded-2xl border border-edge bg-panel p-7 sm:grid-cols-2"
          >
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              Name
              <input name="name" type="text" required autoComplete="name" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold">
              Company
              <input name="company" type="text" autoComplete="organization" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold sm:col-span-2">
              Email
              <input name="email" type="email" required autoComplete="email" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold sm:col-span-2">
              Service
              <select name="service" className={inputClass}>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Something else</option>
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-semibold sm:col-span-2">
              How can we help?
              <textarea name="message" rows={4} required className={`${inputClass} resize-y`} />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-lg bg-brand py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60 sm:col-span-2"
            >
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            {status === 'sent' && (
              <p role="status" className="text-sm font-semibold text-sky sm:col-span-2">
                Thanks — we'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-sm font-semibold text-red-300 sm:col-span-2">
                Something went wrong. Please email {business.email}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
