import Section from "./Section"
import Reveal from "./Reveal"
import { handleGlow } from "../lib/glow"

function Resume() {
  return (
    <Section
      id="resume"
      index="04"
      label="Resume"
      title="Want the full picture?"
      description="View or download my resume for a complete look at my skills, projects and education."
    >
      <Reveal delay={0.05}>
        <div
          onMouseMove={handleGlow}
          className="glass-card glow-card max-w-2xl rounded-2xl p-7"
        >
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-200 text-sky-600 ff-mono text-sm">
                PDF
              </div>
              <div>
                <p className="ff-mono text-sm text-slate-900">resume.pdf</p>
                <p className="ff-mono text-xs text-slate-400 mt-1">
                  K. Sounderyarajan — Full Stack Python Developer
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View ↗
              </a>
              <a href="/resume.pdf" download className="btn btn-glass">
                Download
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export default Resume
