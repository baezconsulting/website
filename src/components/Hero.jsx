import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

// Each line is a list of [text, className] tokens.
const code = [
  [['-- find the bottleneck', 'text-dim']],
  [['SELECT', 'text-sky'], [' o.id, c.name', '']],
  [['FROM', 'text-sky'], [' orders o', '']],
  [['JOIN', 'text-sky'], [' customers c ', ''], ['ON', 'text-sky'], [' c.id = o.customer_id', '']],
  [['WHERE', 'text-sky'], [' o.created_at >= @start;', '']],
  [['', '']],
  [['-- fix it with the right index', 'text-dim']],
  [['CREATE INDEX', 'text-sky'], [' IX_orders_created', '']],
  [['  ON', 'text-sky'], [' orders (created_at)', '']],
  [['  INCLUDE', 'text-sky'], [' (customer_id);', '']],
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-6 py-20 sm:py-24">
        <motion.div
          className="min-w-0 flex-[1_1_480px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="mb-5 font-mono text-sm text-sky">// software · AI · database performance</p>
          <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tighter sm:text-6xl lg:text-7xl">
            Full-stack engineering and database performance, <span className="text-sky">under one roof.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Senior-level software development, AI consulting, and database tuning — from application design through
            database architecture and production performance.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-brand px-6 py-3.5 font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Book a consultation
            </a>
            <a
              href="#services"
              className="rounded-lg border border-edge-strong px-6 py-3.5 font-semibold transition-colors hover:border-sky hover:text-sky"
            >
              View services
            </a>
          </div>
        </motion.div>

        <motion.div
          className="min-w-0 flex-[1_1_420px] overflow-hidden rounded-2xl border border-edge bg-panel shadow-2xl shadow-black/40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
        >
          <div className="flex items-center gap-2 border-b border-edge px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-edge-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-edge-strong" />
            <span className="h-2.5 w-2.5 rounded-full bg-edge-strong" />
            <span className="ml-2 font-mono text-xs text-dim">tune_orders.sql</span>
          </div>
          <pre className="overflow-x-auto px-5 py-6 font-mono text-sm leading-7 text-soft">
            {code.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: 0.5 + i * 0.09 }}
              >
                {line.map(([text, cls], j) => (
                  <span key={j} className={cls}>
                    {text || ' '}
                  </span>
                ))}
              </motion.div>
            ))}
          </pre>
        </motion.div>
      </div>
    </section>
  )
}
