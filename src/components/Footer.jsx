import { business } from '../site.js'

export default function Footer() {
  return (
    <footer className="border-t border-edge text-sm text-dim">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
        <div className="flex items-center gap-3">
          <img src="/logo-white.png" alt="" className="h-6 w-auto opacity-70" />
          <span>
            © {new Date().getFullYear()} {business.legalName}
          </span>
        </div>
        <a href={`mailto:${business.email}`} className="font-mono hover:text-sky">
          {business.email}
        </a>
      </div>
    </footer>
  )
}
