import { services } from '../site.js'
import Reveal from './Reveal.jsx'
import SectionLabel from './SectionLabel.jsx'

export default function Services() {
  return (
    <section id="services" className="border-t border-edge py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel>01 / services</SectionLabel>
          <h2 className="mb-11 text-4xl font-extrabold tracking-tight sm:text-5xl">What we do</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07} className="h-full">
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-edge bg-panel p-7 transition-colors hover:border-brand">
                <span className="font-mono text-xl text-sky">{s.tag}</span>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
