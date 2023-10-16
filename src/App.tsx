import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import ResumePage from "./pages/Resume"
import ProjectsPage from "./pages/Projects"
import ExperiencePage from "./pages/Experience"
import ContactPage from "./pages/Contact"
import Layout from "./components/layout/Layout"
import wave from '../public/wave.svg'
const App = () => {
  return (
    <div style={{
      backgroundImage: `url(${wave})`,
      backgroundPosition: "center",
      backgroundSize: "cover"
    }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default App