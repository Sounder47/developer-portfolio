import { useState } from "react"
import Section from "./Section"
import Reveal from "./Reveal"
import { handleGlow } from "../lib/glow"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    setIsSubmitting(true)
    setStatus("")

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        setStatus("error")
        console.error("Server error:", data)
        return
      }

      setStatus("success")

      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error("Network error:", error)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputCls =
    "w-full px-4 py-3 rounded-xl bg-white/60 border border-sky-100 text-slate-900 placeholder-slate-400 outline-none focus:border-sky-400 transition"

  return (
    <Section
      id="contact"
      index="07"
      label="Contact"
      title="Let's build something useful."
      description="Have a project idea, an opportunity, or just want to connect? Send me a message."
    >
      <Reveal delay={0.05}>
        <div className="mb-8 flex flex-wrap gap-x-8 gap-y-3 ff-mono text-sm">
          <a
            href="mailto:sounderblue47@gmail.com"
            className="text-slate-600 hover:text-sky-700 transition-colors"
          >
            sounderblue47@gmail.com
          </a>
          <span className="text-slate-400">Tirupathur, Tamil Nadu</span>
          <a
            href="https://linkedin.com/in/sounderyarajan-k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-sky-700 transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Sounder47"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-sky-700 transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <form
          onSubmit={handleSubmit}
          onMouseMove={handleGlow}
          className="glass-card glow-card max-w-2xl rounded-2xl p-6 md:p-8"
        >
          <div className="relative z-10">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block ff-mono text-xs tracking-[0.15em] text-slate-500 mb-2"
              >
                NAME
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className={inputCls}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block ff-mono text-xs tracking-[0.15em] text-slate-500 mb-2"
              >
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className={inputCls}
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block ff-mono text-xs tracking-[0.15em] text-slate-500 mb-2"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity…"
                required
                className={`${inputCls} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>

            {status === "success" && (
              <p className="mt-4 ff-mono text-sm text-emerald-600">
                Message sent — I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="mt-4 ff-mono text-sm text-red-500">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </Reveal>
    </Section>
  )
}

export default Contact
