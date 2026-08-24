import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Section from "./Section"
import Reveal from "./Reveal"
import { handleGlow } from "../lib/glow"

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/projects/")

        if (!response.ok) {
          throw new Error("Failed to fetch projects")
        }

        const data = await response.json()

        setProjects(data)
      } catch (error) {
        console.error(error)
        setError("Unable to load projects.")
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Things I've built."
      description="A selection of full-stack projects — each one a chance to learn something new."
    >
      {loading && (
        <p className="ff-mono text-sm text-slate-500">Loading projects…</p>
      )}

      {error && <p className="ff-mono text-sm text-red-500">{error}</p>}

      {!loading && !error && projects.length === 0 && (
        <p className="ff-mono text-sm text-slate-500">
          No projects yet — check back soon.
        </p>
      )}

      {!loading && !error && projects.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1}>
              <Link
                to={`/projects/${project.slug}`}
                onMouseMove={handleGlow}
                className="glass-card glow-card group block h-full rounded-2xl p-6"
              >
                <div className="relative z-10 flex h-full flex-col">
                  <h3 className="ff-display text-xl font-semibold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-500 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="tag">
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto ff-mono text-sm text-sky-600 group-hover:text-sky-700 transition-colors">
                    View project →
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  )
}

export default Projects
