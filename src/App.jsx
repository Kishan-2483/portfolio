import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Certificates from "./pages/Certificates"
import Achievements from "./pages/Achievements"
import Education from "./pages/Education"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume"
import "./App.css"

export default function App() {
  return (
    <div className="min-h-screen bg-dark w-full relative">
      <Navbar />
      <main className="flex flex-col w-full overflow-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Skills />
              <Projects />
              <Certificates />
              <Achievements />
              <Education />
              <Contact />
            </>
          } />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </div>
  )
}