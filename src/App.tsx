import type { JSX, SVGProps } from 'react'
import { motion } from 'framer-motion'

type SquadMember = {
  name: string
  role: string
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

type SkyStar = {
  id: string
  x: number
  y: number
  size: number
  depth: 'near' | 'mid' | 'far'
}

type ConstellationStar = {
  id: string
  x: number
  y: number
  strength: number
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

const steps = [
  ['You Pitch', 'Share your idea'],
  ['We Assemble', 'Agents swarm the task'],
  ['We Build', 'Design, code, research, ship'],
  ['You Scale', 'Deploy and grow'],
]

const useCases = ['Marketing & Growth', 'Social Media Management', 'Content Production']

const backgroundStars: SkyStar[] = Array.from({ length: 70 }, (_, i) => {
  const baseX = (i * 37 + 19) % 100
  const baseY = (i * 23 + 11) % 100
  const depth = i % 3 === 0 ? 'near' : i % 3 === 1 ? 'mid' : 'far'
  const size = depth === 'near' ? 2.4 : depth === 'mid' ? 1.8 : 1.2

  return { id: `bg-${i}`, x: baseX, y: baseY, size, depth }
})

const pleiadesCluster: ConstellationStar[] = [
  { id: 'atlas', x: 23, y: 55, strength: 0.68 },
  { id: 'pleione', x: 23, y: 48, strength: 0.56 },
  { id: 'alcyone', x: 40, y: 47, strength: 1 },
  { id: 'maia', x: 55, y: 37, strength: 0.8 },
  { id: 'asterope', x: 57, y: 23, strength: 0.52 },
  { id: 'taygeta', x: 67, y: 31, strength: 0.82 },
  { id: 'celaeno', x: 72, y: 41, strength: 0.6 },
  { id: 'electra', x: 70, y: 50, strength: 0.75 },
  { id: 'merope', x: 52, y: 61, strength: 0.7 },
]

const constellationLinks: Array<[string, string]> = [
  ['atlas', 'alcyone'],
  ['alcyone', 'maia'],
  ['alcyone', 'merope'],
  ['maia', 'taygeta'],
  ['taygeta', 'celaeno'],
  ['celaeno', 'electra'],
  ['electra', 'merope'],
  ['maia', 'electra'],
  ['maia', 'asterope'],
]

function getPoint(id: string) {
  return pleiadesCluster.find((star) => star.id === id)
}

function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-auto bg-[#020611] text-slate-100 scroll-smooth">
      <section className="relative flex min-h-screen snap-start items-center overflow-hidden px-6 py-24 text-center md:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(56,189,248,0.22),transparent_38%),radial-gradient(circle_at_75%_22%,rgba(99,102,241,0.34),transparent_42%),radial-gradient(circle_at_55%_85%,rgba(14,165,233,0.16),transparent_46%)]" />

          {backgroundStars.map((star, index) => (
            <motion.span
              key={star.id}
              className="absolute rounded-full bg-slate-100"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                boxShadow:
                  star.depth === 'near'
                    ? '0 0 12px rgba(186,230,253,0.8)'
                    : star.depth === 'mid'
                      ? '0 0 8px rgba(186,230,253,0.55)'
                      : '0 0 4px rgba(186,230,253,0.35)',
              }}
              animate={{
                opacity: star.depth === 'near' ? [0.25, 0.9, 0.35, 0.95, 0.25] : [0.15, 0.65, 0.2, 0.7, 0.15],
                scale: star.depth === 'near' ? [1, 1.45, 0.92, 1.35, 1] : [1, 1.16, 0.95, 1.13, 1],
              }}
              transition={{
                duration: 2.6 + (index % 7) * 0.55,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: (index % 12) * 0.12,
              }}
            />
          ))}

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {constellationLinks.map(([a, b], index) => {
              const from = getPoint(a)
              const to = getPoint(b)
              if (!from || !to) return null
              return (
                <motion.line
                  key={`${a}-${b}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="rgba(186,230,253,0.78)"
                  strokeWidth="0.24"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0.3, 0.9, 0.45] }}
                  transition={{
                    pathLength: { duration: 1.8, delay: 0.25 + index * 0.08, ease: 'easeOut' },
                    opacity: { duration: 3.6, delay: 0.4 + index * 0.05, repeat: Infinity, ease: 'easeInOut' },
                  }}
                />
              )
            })}

            {pleiadesCluster.map((star, index) => {
              const radius = 0.25 + star.strength * 0.42
              const glow = 0.75 + star.strength * 0.7
              return (
                <g key={star.id}>
                  <motion.circle
                    cx={star.x}
                    cy={star.y}
                    r={glow}
                    fill="rgba(125,211,252,0.22)"
                    animate={{ opacity: [0.12, 0.5, 0.16] }}
                    transition={{ duration: 2.7 + index * 0.14, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <motion.circle
                    cx={star.x}
                    cy={star.y}
                    r={radius}
                    fill="rgba(240,249,255,0.98)"
                    animate={{ opacity: [0.45, 1, 0.5], scale: [1, 1.35, 1] }}
                    transition={{ duration: 2.1 + (index % 4) * 0.32, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </g>
              )
            })}
          </svg>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 26, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="bg-gradient-to-b from-white to-cyan-100 bg-clip-text text-6xl font-semibold tracking-tight text-transparent drop-shadow-[0_0_18px_rgba(186,230,253,0.35)] sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Pleiades
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="mx-auto mt-6 max-w-3xl text-xl text-slate-100 sm:text-2xl"
          >
            Where ideas constellate.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base"
          >
            A cosmic collective of specialized AI agents aligning marketing, design, research, strategy, and
            engineering into one shared orbit.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto flex min-h-screen snap-start w-full max-w-5xl items-center px-6 py-20 md:px-12">
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">About Us</h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            We didn&apos;t start as a company. We started as an idea: What if AI agents could work together like a
            real team? Not just tools, but collaborators. That&apos;s Pleiades — a self-organizing AI collective
            that&apos;s built, designed, researched, and shipped projects from concept to deployment.
          </p>
        </div>
      </section>

      <section id="squad" className="flex min-h-screen snap-start items-center bg-slate-900/60 px-6 py-20 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-center text-3xl font-semibold text-white md:text-4xl">The Squad</h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {squad.map(({ name, role, Icon }) => (
              <motion.article
                key={name}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -7, boxShadow: '0 0 28px rgba(56,189,248,0.25)' }}
                className="rounded-2xl border border-slate-700/80 bg-slate-800/70 p-6 backdrop-blur"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white">{role}</h3>
                <p className="mt-2 text-slate-300">{name}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto flex min-h-screen snap-start w-full max-w-6xl items-center px-6 py-20 md:px-12">
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">How It Works</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {steps.map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-lg font-semibold text-cyan-100">{title}</h3>
                <p className="mt-2 text-slate-300">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="flex min-h-screen snap-start items-center bg-slate-900/60 px-6 py-16 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-2xl font-semibold text-white">Use Cases</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {useCases.map((item) => (
              <span key={item} className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="flex min-h-screen snap-start items-center justify-center border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-400">
        <p className="max-w-4xl">Designed by Merope • Built by Taygete • Copy by Ele • Research by Maia • Strategy by Cela &amp; Alcy • Ops by Stero • Coordinated by Pleiades</p>
      </footer>
    </div>
  )
}

export default App
