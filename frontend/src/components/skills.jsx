import Section from "./Section"
import Reveal from "./Reveal"
import { handleGlow } from "../lib/glow"

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Django", "Django REST Framework", "Flask", "REST APIs"],
  },
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Jinja2", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQLite", "Oracle SQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman"],
  },
  {
    title: "Core Concepts",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "MVC Architecture",
      "CRUD Operations",
      "Authentication",
      "AI/ML Fundamentals",
    ],
  },
]

function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      label="Skills"
      title="Technologies I work with."
      description="The tools and concepts I reach for when building full-stack applications."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08}>
            <div
              onMouseMove={handleGlow}
              className="glass-card glow-card h-full rounded-2xl p-6"
            >
              <div className="relative z-10">
                <h3 className="ff-display text-lg font-semibold text-slate-900 mb-5">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export default Skills
