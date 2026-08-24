function ProjectCard({ project }) {
  return (
    <article className="group border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] hover:bg-white/[0.04] transition">

      {/* Project image placeholder */}
      <div className="h-56 bg-white/5 flex items-center justify-center">
        <span className="text-gray-600 text-sm">
          Project Screenshot
        </span>
      </div>

      <div className="p-6">

        <div className="flex items-center justify-between gap-4 mb-3">

          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <span className="text-xs text-gray-500">
            {project.year}
          </span>

        </div>

        <p className="text-gray-400 leading-relaxed mb-5">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">

          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300"
            >
              {technology}
            </span>
          ))}

        </div>

        <div className="flex gap-5 text-sm">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-white hover:text-gray-300 transition"
          >
            GitHub ↗
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              Live Demo ↗
            </a>
          )}

        </div>

      </div>

    </article>
  )
}

export default ProjectCard