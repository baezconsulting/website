import { useState } from 'react'
import { business } from '../site.js'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#expertise', label: 'Expertise' },
  { href: '#about', label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-night/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo-white.png" alt="" className="h-9 w-auto" />
          <span className="text-lg font-bold tracking-tight">{business.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-sky">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-brand px-4 py-2.5 font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Book a consult
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-edge px-6 pb-6 md:hidden">
          {[...links, { href: '#contact', label: 'Contact' }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-edge py-4 text-lg font-semibold"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
