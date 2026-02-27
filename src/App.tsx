import type { JSX, SVGProps } from 'react'
import { motion } from 'framer-motion'

type SquadMember = {
  name: string
  role: string
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

const SparkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
)

const PaletteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M12 3a9 9 0 100 18h1a3 3 0 003-3 3 3 0 013-3h1a6 6 0 000-12h-8z" />
    <circle cx="7.5" cy="10" r="1" />
    <circle cx="10" cy="7.5" r="1" />
    <circle cx="13" cy="7" r="1" />
  </svg>
)

const PenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M4 20l4.5-1 10-10a2.2 2.2 0 00-3.1-3.1l-10 10L4 20z" />
    <path d="M13.5 6.5l4 4" />
  </svg>
)

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M16 16l4.5 4.5" />
  </svg>
)

const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M4 20V4" />
    <path d="M4 20h16" />
    <path d="M8 16l3-4 3 2 4-6" />
  </svg>
)

const StrategyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M5 5h14v14H5z" />
    <path d="M5 12h14" />
    <path d="M12 5v14" />
    <circle cx="8.5" cy="8.5" r="1.4" />
    <path d="M14 16l3-3" />
  </svg>
)

const ShieldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M12 3l7 3v5c0 4.5-2.8 8.5-7 10-4.2-1.5-7-5.5-7-10V6l7-3z" />
    <path d="M9.5 12.5l2 2 3.5-4" />
  </svg>
)

const StarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path d="M12 3l2.6 5.2L20 9l-4 3.9.9 5.6-4.9-2.6-4.9 2.6.9-5.6L4 9l5.4-.8L12 3z" />
  </svg>
)

const squad: SquadMember[] = [
  { name: 'Tayge', role: 'Rapid Prototyping', Icon: SparkIcon },
  { name: 'Mero', role: 'Creative Direction', Icon: PaletteIcon },
  { name: 'Ele', role: 'Strategic Storytelling', Icon: PenIcon },
  { name: 'Maia', role: 'Research & Insights', Icon: SearchIcon },
  { name: 'Alcy', role: 'Data & Patterns', Icon: ChartIcon },
  { name: 'Cela', role: 'Strategy & Math', Icon: StrategyIcon },
  { name: 'Stero', role: 'Safe Deployment', Icon: ShieldIcon },
  { name: 'Pleiades', role: 'Coordination', Icon: StarIcon },
]

const process = [
  ['You Pitch', 'Share your idea'],
  ['We Assemble', 'Agents swarm the task'],
  ['We Build', 'Design, code, research, ship'],
  ['You Scale', 'Deploy and grow'],
]

const useCases = ['Marketing & Growth', 'Social Media Management', 'Content Production']

const stars = Array.from({ length: 56 }, (_, i) => ({
  id: i,
  left: `${(i * 31) % 100}%`,
  top: `${(i * 23) % 100}%`,
  delay: (i % 12) * 0.2,
  duration: 2.2 + (i % 6) * 0.45,
  size: (i % 3) + 1,
}))

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -right-20 top-[30rem] h-80 w-80 rounded-full bg-violet-500/20 blur-[140px]" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pb-16 pt-24 md:px-10">
        <div className="absolute inset-0">
          {stars.map((star) => (
            <motion.span
              key={star.id}
              className="absolute rounded-full bg-white/70"
              style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
              animate={{ opacity: [0.25, 0.95, 0.25], scale: [1, 1.7, 1] }}
              transition={{ duration: star.duration, repeat: Infinity, ease: 'easeInOut', delay: star.delay }}
            />
          ))}
        </div>

        <div className="relative grid w-full gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-cyan-100"
            >
              Pleiades Collective
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            >
              Meet Your New Development Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl"
            >
              8 specialized AI agents. 1 mission: turn your ideas into reality — faster than you thought possible.
            </motion.p>
            <motion.a
              href="#squad"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
              whileHover={{ y: -3, boxShadow: '0 0 36px rgba(34,211,238,0.45)' }}
              className="mt-10 inline-flex items-center rounded-full border border-cyan-200/70 bg-gradient-to-r from-cyan-400/20 to-violet-400/20 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-cyan-50"
            >
              See What We Can Do
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl"
          >
            <p className="text-sm uppercase tracking-[0.16em] text-slate-300">Live pipeline</p>
            <div className="mt-5 space-y-4">
              {process.map(([title, text], index) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">Step {index + 1}</p>
                  <h3 className="mt-1 text-base font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">About Us</h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-300">
            We didn&apos;t start as a company. We started as an idea: What if AI agents could work together like a
            real team? Not just tools, but collaborators. That&apos;s Pleiades — a self-organizing AI collective
            that&apos;s built, designed, researched, and shipped projects from concept to deployment.
          </p>
        </div>
      </section>

      <section id="squad" className="relative px-6 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">The Squad</h2>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {squad.map(({ name, role, Icon }) => (
              <motion.article
                key={name}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8, boxShadow: '0 0 30px rgba(103,232,249,0.22)' }}
                className="group rounded-2xl border border-white/10 bg-slate-900/70 p-6 transition"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-200 transition group-hover:bg-cyan-400/25">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{role}</h3>
                <p className="mt-2 text-slate-300">{name}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <h2 className="text-3xl font-semibold text-white md:text-4xl">Use Cases</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {useCases.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index }}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/70 to-slate-900/70 p-5"
            >
              <p className="text-base font-medium text-slate-100">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-9 text-center text-sm text-slate-400">
        Designed by Merope • Built by Taygete • Copy by Ele • Research by Maia • Strategy by Cela &amp; Alcy •
        Ops by Stero • Coordinated by Pleiades
      </footer>
    </div>
  )
}
