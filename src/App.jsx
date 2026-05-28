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
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

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
    <div className="min-h-screen bg-theme-bg text-theme-text w-full relative transition-colors duration-300">
      <div
        className="pointer-events-none fixed inset-0 z-[1] transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${theme === "light" ? "rgba(14, 165, 233, 0.08)" : "rgba(29, 78, 216, 0.15)"}, transparent 80%)`,
          mixBlendMode: theme === "light" ? "normal" : "screen",
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
              value: theme === "light" ? "#0ea5e9" : "#60a5fa",
            },
            links: {
              color: theme === "light" ? "#0284c7" : "#3b82f6",
              distance: 150,
              enable: true,
              opacity: theme === "light" ? 0.25 : 0.15,
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
        <Navbar theme={theme} setTheme={setTheme} />
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