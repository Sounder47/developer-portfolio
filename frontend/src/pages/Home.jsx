import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/skills"
import Projects from "../components/Projects"
import Education from "../components/Education"
import Achievements from "../components/Achievements"
import Contact from "../components/Contact"
import Resume from "../components/Resume"

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Education />
      <Achievements />
      <Contact />
    </>
  )
}

export default Home