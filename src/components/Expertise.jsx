import { expertise } from '../site.js'
import Reveal from './Reveal.jsx'
import SectionLabel from './SectionLabel.jsx'

export default function Expertise() {
  return (
    <section id="expertise" className="border-t border-edge py-24">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-12 px-6">
        <Reveal className="min-w-0 flex-[1_1_320px]">
          <SectionLabel>02 / database expertise</SectionLabel>
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Deep DBA experience, not an afterthought.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="min-w-0 flex-[1_1_560px]">
          <ul className="flex flex-wrap content-start gap-2.5">
            {expertise.map((e) => (
              <li
                key={e}
                className="rounded-full border border-edge-strong px-3.5 py-2.5 font-mono text-sm transition-colors hover:border-sky hover:text-sky"
              >
                {e}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
