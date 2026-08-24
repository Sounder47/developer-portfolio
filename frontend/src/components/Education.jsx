import Section from "./Section"
import Reveal from "./Reveal"
import { handleGlow } from "../lib/glow"

function Education() {
  return (
    <Section
      id="education"
      index="05"
      label="Education"
      title="Academic background."
    >
      <Reveal delay={0.05}>
        <div
          onMouseMove={handleGlow}
          className="glass-card glow-card max-w-3xl rounded-2xl p-7 md:p-8"
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <p className="ff-mono text-xs tracking-[0.2em] text-sky-700 mb-3">
                2022 — 2026
              </p>
              <h3 className="ff-display text-xl font-semibold text-slate-900">
                B.E. — Electronics &amp; Communication Engineering
              </h3>
              <p className="text-slate-600 mt-2">
                Bharathidasan Engineering College
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Anna University · Nattrampalli, Tamil Nadu
              </p>
            </div>

            <div className="md:text-right">
              <p className="ff-mono text-xs tracking-[0.2em] text-slate-400">
                CGPA
              </p>
              <p className="ff-display text-3xl font-semibold text-slate-900 mt-1">
                8.25
                <span className="text-base font-normal text-slate-400">
                  /10
                </span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export default Education
