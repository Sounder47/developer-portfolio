import { motion } from "framer-motion"
import { handleGlow } from "../lib/glow"

// key/value spec rows — reads like a config file, not a stat-card template
const profile = [
  ["role", "Full-stack Python developer"],
  ["based", "Tirupathur, Tamil Nadu"],
  ["stack", "Python · Django · Flask · React"],
  ["apis", "Django REST Framework"],
  ["data", "PostgreSQL · SQLite · SQL"],
  ["degree", "B.E. ECE — CGPA 8.25"],
]

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-28 pb-20">

      {/* ambient sky glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-[12%] left-[6%] w-80 h-80 rounded-full bg-sky-300/30 blur-[110px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[8%] right-[6%] w-96 h-96 rounded-full bg-blue-300/25 blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">

          {/* ============== LEFT: identity ============== */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="ff-mono inline-flex items-center gap-2.5 text-sm text-sky-700"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500" />
              </span>
              AVAILABLE FOR WORK
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="hero-title mt-6 text-slate-900"
            >
              Full-stack developer building software{" "}
              <span className="relative whitespace-nowrap text-sky-600">
                end to end
                <span className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-400" />
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-7 max-w-xl text-lg text-slate-500 leading-relaxed"
            >
              Python, Django, Flask and React. I build complete web
              applications — REST APIs, databases and clean interfaces — with a
              solid grounding in data structures, OOP and REST architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <a href="#projects" className="btn btn-primary">
                View projects ↓
              </a>
              <a href="#contact" className="btn btn-glass">
                Get in touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              className="mt-8 flex flex-wrap items-center gap-5 ff-mono text-sm text-slate-500"
            >
              <a
                href="https://github.com/Sounder47"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-700 transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/sounderyarajan-k"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-700 transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="mailto:sounderblue47@gmail.com"
                className="hover:text-sky-700 transition-colors"
              >
                Email ↗
              </a>
            </motion.div>
          </div>

          {/* ============== RIGHT: glass spec panel ============== */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={handleGlow}
            className="glass-card glow-card rounded-2xl p-1.5"
          >
            {/* window header */}
            <div className="relative z-10 flex items-center gap-2 px-4 py-3 divider-b">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-amber-400/70" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
              <span className="ff-mono text-xs text-slate-400 ml-2">
                profile — sounderyarajan.k
              </span>
            </div>

            {/* rows */}
            <div className="relative z-10 p-5 space-y-3">
              {profile.map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-baseline gap-4 ff-mono text-sm"
                >
                  <span className="w-20 shrink-0 text-sky-700">{key}</span>
                  <span className="text-slate-600">{value}</span>
                </div>
              ))}

              <div className="flex items-baseline gap-4 ff-mono text-sm pt-3 divider-t">
                <span className="w-20 shrink-0 text-sky-700">status</span>
                <span className="inline-flex items-center gap-2 text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open to opportunities
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 ff-mono text-xs tracking-widest text-slate-400"
      >
        SCROLL
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  )
}

export default Hero
