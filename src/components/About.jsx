import { leader } from '../site.js'
import Reveal from './Reveal.jsx'
import SectionLabel from './SectionLabel.jsx'

export default function About() {
  return (
    <section id="about" className="border-t border-edge py-24">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6">
        <Reveal className="min-w-0 flex-[0_1_320px]">
          <div className="relative mx-auto aspect-square max-w-[320px]">
            <div className="absolute -inset-3 rounded-full border border-edge-strong" aria-hidden="true" />
            <div className="h-full w-full overflow-hidden rounded-full bg-panel ring-4 ring-brand">
              {leader.photo ? (
                <img src={leader.photo} alt={`${leader.name}, ${leader.title}`} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-dim">[Photo: {leader.name}]</div>
              )}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0 flex-[1_1_480px]">
          <SectionLabel>03 / about</SectionLabel>
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{leader.name}</h2>
          <p className="mb-6 mt-2 text-lg font-semibold text-sky">{leader.title}</p>
          {leader.bio.map((p, i) => (
            <p key={i} className={`mb-4 text-[17px] leading-relaxed ${i === 0 ? 'text-soft' : 'text-muted'}`}>
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
