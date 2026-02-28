import { motion } from 'framer-motion'

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
  label: string
  strength: number
}

const backgroundStars: SkyStar[] = Array.from({ length: 70 }, (_, i) => {
  const baseX = (i * 37 + 19) % 100
  const baseY = (i * 23 + 11) % 100
  const depth = i % 3 === 0 ? 'near' : i % 3 === 1 ? 'mid' : 'far'
  const size = depth === 'near' ? 2.4 : depth === 'mid' ? 1.8 : 1.2

  return { id: `bg-${i}`, x: baseX, y: baseY, size, depth }
})

const pleiadesCluster: ConstellationStar[] = [
  { id: 'atlas', x: 23, y: 55, label: 'Atlas', strength: 0.68 },
  { id: 'pleione', x: 23, y: 48, label: 'Pleione', strength: 0.56 },
  { id: 'alcyone', x: 40, y: 47, label: 'Alcyone', strength: 1 },
  { id: 'maia', x: 55, y: 37, label: 'Maia', strength: 0.8 },
  { id: 'asterope', x: 57, y: 23, label: 'Asterope', strength: 0.52 },
  { id: 'taygeta', x: 67, y: 31, label: 'Taygeta', strength: 0.82 },
  { id: 'celaeno', x: 72, y: 41, label: 'Celaeno', strength: 0.6 },
  { id: 'electra', x: 70, y: 50, label: 'Electra', strength: 0.75 },
  { id: 'merope', x: 52, y: 61, label: 'Merope', strength: 0.7 },
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
    <div className="relative min-h-screen overflow-hidden bg-[#020611] text-slate-100">
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

      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
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
          className="mt-6 max-w-2xl text-xl text-slate-100 sm:text-2xl"
        >
          Where ideas constellate for Marketing.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base"
        >
          A cosmic collective of specialized AI agents aligning design, research, strategy, and engineering into one
          shared orbit.
        </motion.p>
      </section>
    </div>
  )
}

export default App
