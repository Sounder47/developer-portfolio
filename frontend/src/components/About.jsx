import { motion } from "framer-motion"
import Section from "./Section"
import Reveal from "./Reveal"
import { handleGlow } from "../lib/glow"

const focus = [
  {
    sym: "</>",
    title: "Full-stack development",
    desc: "Building complete web applications, front to back.",
    cls: "bg-sky-500/10 border-sky-200 text-sky-600",
  },
  {
    sym: "{ }",
    title: "Python · Django · Flask",
    desc: "Backend services, REST APIs and MVC architecture.",
    cls: "bg-blue-500/10 border-blue-200 text-blue-600",
  },
  {
    sym: "⚡",
    title: "DSA & problem solving",
    desc: "1st place in competitive code debugging.",
    cls: "bg-cyan-500/10 border-cyan-200 text-cyan-600",
  },
]

function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title="Building software with a problem-solving mindset."
      description="ECE graduate with hands-on experience in Python, Flask, Django, SQL and REST APIs — now focused on full-stack web development."
    >
      <div className="grid lg:grid-cols-[1.25fr_0.9fr] gap-10 lg:gap-14 items-start">

        {/* narrative */}
        <Reveal delay={0.05}>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              I have a strong grounding in Data Structures &amp; Algorithms,
              Object-Oriented Programming, and AI/ML fundamentals — and I enjoy
              turning that into software people actually use.
            </p>
            <p>
              I'm looking to start my career as a Software Engineer or Python
              Developer, contributing to scalable, efficient and user-focused
              applications.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {["Python", "Django", "Flask", "React", "SQL"].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* focus card */}
        <Reveal delay={0.15}>
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onMouseMove={handleGlow}
            className="glass-card glow-card rounded-2xl p-7"
          >
            <div className="relative z-10">
              <p className="ff-mono text-xs uppercase tracking-[0.2em] text-slate-400 mb-6">
                Current focus
              </p>

              <div className="space-y-5">
                {focus.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ff-mono text-sm border ${item.cls}`}
                    >
                      {item.sym}
                    </div>
                    <div>
                      <h3 className="font-medium text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-5 divider-t flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="ff-mono text-xs text-slate-500">
                  Currently learning &amp; building
                </span>
              </div>
            </div>
          </motion.div>
        </Reveal>

      </div>
    </Section>
  )
}

export default About
