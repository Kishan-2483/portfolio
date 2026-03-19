import { Routes, Route } from "react-router-dom"
import { useState, useEffect, useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSlim } from "tsparticles-slim"
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 w-full relative">
      <div
        className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300 mix-blend-screen"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="fixed inset-0 z-0 pointer-events-none"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10
                }
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#60a5fa",
            },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 60,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2.5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10 w-full flex flex-col">
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
    </div>
  )
}