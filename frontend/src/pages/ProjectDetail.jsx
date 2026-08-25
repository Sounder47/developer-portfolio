import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Reveal from "../components/Reveal"

const eyebrow =
  "ff-mono text-xs tracking-[0.22em] uppercase text-sky-700 mb-4"

function ProjectDetail() {
  const { slug } = useParams()

  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/projects/${slug}/`
        )

        if (!response.ok) {
          throw new Error("Project not found")
        }

        const data = await response.json()

        setProject(data)
      } catch (error) {
        console.error(error)
        setError("Unable to load project.")
      } finally {
        setLoading(false)
      }
    }

    fetchProject()
  }, [slug])

  if (loading) {
    return (
      <main className="min-h-screen pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="ff-mono text-sm text-slate-500">Loading project…</p>
        </div>
      </main>
    )
  }

  if (error || !project) {
    return (
      <main className="min-h-screen pt-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="ff-mono text-sm text-red-500 mb-6">
            {error || "Project not found."}
          </p>
          <Link
            to="/projects"
            className="ff-mono text-sm text-slate-500 hover:text-sky-700 transition-colors"
          >
            ← Back to projects
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-28 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        <Reveal>
          <Link
            to="/projects"
            className="inline-block mb-10 ff-mono text-sm text-slate-500 hover:text-sky-700 transition-colors"
          >
            ← Back to projects
          </Link>
        </Reveal>

        <Reveal>
          <div className="mb-14">
            <p className={eyebrow}>Project</p>
            <h1 className="ff-display text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6">
              {project.title}
            </h1>
            <p className="max-w-3xl text-lg text-slate-500 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </div>
        </Reveal>

        {project.problem && (
          <Reveal>
            <section className="mb-12">
              <p className={eyebrow}>Problem</p>
              <p className="max-w-3xl text-slate-600 leading-relaxed whitespace-pre-line">
                {project.problem}
              </p>
            </section>
          </Reveal>
        )}

        {project.solution && (
          <Reveal delay={0.05}>
            <section className="mb-12">
              <p className={eyebrow}>Solution</p>
              <p className="max-w-3xl text-slate-600 leading-relaxed whitespace-pre-line">
                {project.solution}
              </p>
            </section>
          </Reveal>
        )}

        {project.features && project.features.length > 0 && (
          <Reveal delay={0.1}>
            <section className="mb-12">
              <p className={eyebrow}>Key features</p>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="glass-card rounded-xl p-5">
                    <p className="text-slate-600 leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <Reveal delay={0.15}>
            <section className="mb-12">
              <p className={eyebrow}>Technologies</p>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span key={technology} className="tag">
                    {technology}
                  </span>
                ))}
              </div>
            </section>
          </Reveal>
        )}

        {project.challenges && (
          <Reveal delay={0.2}>
            <section className="mb-12">
              <p className={eyebrow}>Challenges</p>
              <p className="max-w-3xl text-slate-600 leading-relaxed whitespace-pre-line">
                {project.challenges}
              </p>
            </section>
          </Reveal>
        )}

        {project.learning && (
          <Reveal delay={0.25}>
            <section className="mb-12">
              <p className={eyebrow}>What I learned</p>
              <p className="max-w-3xl text-slate-600 leading-relaxed whitespace-pre-line">
                {project.learning}
              </p>
            </section>
          </Reveal>
        )}

        <Reveal delay={0.3}>
          <div className="pt-8 divider-t flex flex-wrap gap-4">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on GitHub ↗
              </a>
            )}

            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass"
              >
                Live demo ↗
              </a>
            )}
          </div>
        </Reveal>

      </div>
    </main>
  )
}

export default ProjectDetail
