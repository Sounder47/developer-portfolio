import Section from "./Section"
import Reveal from "./Reveal"
import { handleGlow } from "../lib/glow"

const prizes = [
  {
    place: "1st Prize",
    event: "Code Debugging",
    where: "PECT SYMP FEST-25",
    desc: "Diagnosed and resolved 5 buggy programs under timed conditions, outperforming 30+ teams.",
  },
  {
    place: "1st Prize",
    event: "Technical Quiz",
    where: "National Level Symposium",
    desc: "Demonstrated depth in core CS and ECE concepts across both hardware and software domains.",
  },
]

function Achievements() {
  return (
    <Section
      id="achievements"
      index="06"
      label="Achievements"
      title="Competitions and certification."
      description="Where I've tested my skills against the clock — and the training behind them."
    >
      {/* Competition wins */}
      <div className="grid md:grid-cols-2 gap-6">
        {prizes.map((prize, index) => (
          <Reveal key={prize.event} delay={index * 0.1}>
            <div
              onMouseMove={handleGlow}
              className="glass-card glow-card h-full rounded-2xl p-6"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <span className="ff-mono text-xs tracking-[0.12em] px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-200 text-sky-700">
                    {prize.place}
                  </span>
                  <span className="text-sky-300">✦</span>
                </div>

                <h3 className="ff-display text-lg font-semibold text-slate-900">
                  {prize.event}
                </h3>

                <p className="ff-mono text-xs text-slate-400 mt-1.5">
                  {prize.where}
                </p>

                <p className="text-sm text-slate-500 leading-relaxed mt-4">
                  {prize.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Certification */}
      <Reveal delay={0.2}>
        <div
          onMouseMove={handleGlow}
          className="glass-card glow-card rounded-2xl p-6 md:p-7 mt-6"
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <div className="grid place-items-center w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-200 text-cyan-600 ff-mono text-xs">
              CERT
            </div>

            <div className="md:flex-1">
              <p className="ff-mono text-xs tracking-[0.2em] uppercase text-sky-700 mb-2">
                6-month program
              </p>
              <h3 className="ff-display text-lg font-semibold text-slate-900">
                Full Stack Python Development
              </h3>
              <p className="text-sm text-slate-500 mt-1.5">
                QSpiders Training Institute — Chennai, Tamil Nadu
              </p>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed md:max-w-xs">
              Intensive coverage of Python, Django, SQL, HTML/CSS, REST APIs and
              web application deployment.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export default Achievements
