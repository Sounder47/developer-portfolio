import { Link } from "react-router-dom"
import { useState } from "react"

const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Resume", href: "/#resume" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass divider-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Monogram + wordmark */}
        <Link to="/" className="flex items-center gap-3">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-sky-500 text-white ff-display font-bold shadow-[0_6px_16px_rgba(14,165,233,0.35)]">
            S
          </span>
          <span className="ff-mono text-sm text-slate-700">
            sounderyarajan<span className="text-sky-500">.k</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6 ff-mono text-sm text-slate-500">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-sky-700 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/#contact"
          className="hidden md:inline-flex btn btn-primary btn-sm"
        >
          Let's talk
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-slate-700"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass divider-t">
          <div className="px-6 py-5 flex flex-col gap-4 ff-mono text-sm text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-sky-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary mt-1"
            >
              Let's talk
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
