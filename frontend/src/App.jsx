import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/footer"

import Home from "./pages/Home"
import ProjectsPage from "./pages/ProjectsPage"
import AIJobPlatform from "./pages/AIJobPlatform"
import ProjectDetail from "./pages/ProjectDetail"

function App() {
  return (
    <div className="relative min-h-screen">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

        <Route
          path="/projects/ai-job-platform"
          element={<AIJobPlatform />}
        />

        <Route
          path="/projects/:slug"
          element={<ProjectDetail />}
        />

      </Routes>

      <Footer />

    </div>
  )
}

export default App