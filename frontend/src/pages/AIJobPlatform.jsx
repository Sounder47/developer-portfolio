import Reveal from "../components/Reveal"

const eyebrow =
  "ff-mono text-xs tracking-[0.22em] uppercase text-sky-700 mb-4"

const technologies = [
  "Python",
  "Django",
  "Django REST Framework",
  "React",
  "PostgreSQL",
  "AI / LLM APIs",
]

const plannedFeatures = [
  "Resume analysis",
  "Job description analysis",
  "Skill-gap identification",
  "AI-powered resume suggestions",
  "Job application tracking",
  "Personalized career insights",
]

const architecture = [
  "React frontend",
  "Django REST API",
  "PostgreSQL database",
  "AI / LLM services",
]

function AIJobPlatform() {
  return (
    <main className="pt-28">

      {/* Hero */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className={eyebrow}>Featured project · In development</p>
            <h1 className="ff-display max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.08]">
              AI-powered job application platform
            </h1>
            <p className="max-w-2xl mt-7 text-lg text-slate-500 leading-relaxed">
              A full-stack platform designed to help job seekers understand job
              requirements, identify skill gaps, improve their application
              materials, and organize their search.
            </p>
            <div className="flex flex-wrap gap-2 mt-8">
              {technologies.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Preview placeholder */}
      <section className="px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="aspect-video rounded-2xl glass-card grid place-items-center">
              <div className="text-center px-6">
                <p className="ff-mono text-xs tracking-[0.22em] uppercase text-slate-400">
                  Application preview
                </p>
                <p className="mt-3 text-slate-500">
                  Screenshots will be added as development progresses.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <section className="px-6 py-16 divider-t">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className={eyebrow}>Overview</p>
            <h2 className="ff-display text-3xl font-semibold text-slate-900 mb-5">
              Why I'm building this
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Existing job platforms mostly focus on listing vacancies and
              connecting candidates with employers. This project explores a
              different approach: helping candidates make better decisions
              before and during the application process by combining job
              analysis, resume analysis, skill-gap detection and application
              tracking in one system.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className={eyebrow}>The problem</p>
            <h2 className="ff-display text-3xl font-semibold text-slate-900 mb-5">
              Job searching is more than finding vacancies
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Candidates often need to compare job requirements with their
              current skills, work out what's missing, tailor their resume and
              track multiple applications — tasks that are usually spread across
              different tools.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Planned features */}
      <section className="px-6 py-16 divider-t">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className={eyebrow}>Planned features</p>
            <h2 className="ff-display text-3xl font-semibold text-slate-900 mb-10">
              What the platform will provide
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {plannedFeatures.map((feature, index) => (
              <Reveal key={feature} delay={index * 0.06}>
                <div className="glass-card rounded-xl p-6 h-full">
                  <span className="ff-mono text-sm text-sky-700">
                    0{index + 1}
                  </span>
                  <h3 className="ff-display mt-4 text-lg font-semibold text-slate-900">
                    {feature}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Feature under development.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className={eyebrow}>Architecture</p>
            <h2 className="ff-display text-3xl font-semibold text-slate-900 mb-8">
              How the application will work
            </h2>
            <div className="glass-card rounded-2xl p-8">
              <div className="space-y-4">
                {architecture.map((layer, index) => (
                  <div key={layer}>
                    <div className="rounded-xl border border-sky-100 bg-white/60 px-4 py-3 text-center ff-mono text-sm text-slate-700">
                      {layer}
                    </div>
                    {index < architecture.length - 1 && (
                      <div className="text-center text-sky-300 py-1">↓</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Status */}
      <section className="px-6 py-16 divider-t">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className={eyebrow}>Development status</p>
            <h2 className="ff-display text-3xl font-semibold text-slate-900 mb-5">
              Currently building
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              This project is being developed incrementally while I explore
              full-stack architecture, REST APIs, database design, AI
              integration, authentication and deployment.
            </p>
          </Reveal>
        </div>
      </section>

    </main>
  )
}

export default AIJobPlatform
