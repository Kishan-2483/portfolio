import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const base = import.meta.env.BASE_URL.replace(/\/$/, "")

  const links = [
    { name: "Home",         id: "home",         href: `${base}/#home` },
    { name: "About",        id: "about",        href: `${base}/#about` },
    { name: "Skills",       id: "skills",       href: `${base}/#skills` },
    { name: "Projects",     id: "projects",     href: `${base}/#projects` },
    { name: "Certificates", id: "certificates", href: `${base}/#certificates` },
    { name: "Achievements", id: "achievements", href: `${base}/#achievements` },
    { name: "Education",    id: "education",    href: `${base}/#education` },
    { name: "Contact",      id: "contact",      href: `${base}/#contact` },
  ]

  // Intersection Observer to track active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    }

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)
    
    links.forEach((link) => {
      const element = document.getElementById(link.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Handle scroll for navbar shadow/styles
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on navigation
  const handleLinkClick = (id) => {
    setMenuOpen(false)
    setActiveSection(id)
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 pt-4 transition-all duration-300 pointer-events-none">
        <nav
          className={`relative flex items-center justify-between gap-8 h-12 md:h-14 px-4 md:px-6 rounded-full glass border border-white/10 transition-all duration-500 pointer-events-auto ${
            scrolled ? "w-full max-w-6xl shadow-2xl backdrop-blur-xl" : "w-full max-w-7xl shadow-none backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <motion.h1 
            whileHover={{ scale: 1.05 }}
            className="text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 truncate"
          >
            <a href={`${base}/#home`} onClick={() => handleLinkClick("home")}>KISHAN</a>
          </motion.h1>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs xl:text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id ? "text-white" : "text-gray-400 hover:text-white"
                }`}
                onClick={() => handleLinkClick(link.id)}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary/20 rounded-full -z-10 border border-primary/30"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            ))}
            <div className="w-[1px] h-4 bg-white/10 mx-2" />
            <Link
              to="/resume"
              className="px-4 py-1.5 text-xs xl:text-sm font-medium text-gray-400 hover:text-primary transition-colors"
            >
              Resume
            </Link>
          </div>

          {/* Mobile View - Contact Link Placeholder or Hamburger */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1 w-6 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <motion.span 
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-full bg-white rounded-full" 
              />
              <motion.span 
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block h-[2px] w-full bg-white rounded-full" 
              />
              <motion.span 
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block h-[2px] w-full bg-white rounded-full" 
              />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-full glass z-[70] lg:hidden flex flex-col p-8 pt-24"
            >
              <div className="flex flex-col gap-2">
                <p className="text-[10px] uppercase font-bold text-gray-500 tracking-[0.2em] mb-4">Navigations</p>
                {links.map((link, index) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-2xl font-bold py-3 hover:text-primary transition-colors ${
                      activeSection === link.id ? "text-primary" : "text-white"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 pt-8 border-t border-white/10"
                >
                  <Link
                    to="/resume"
                    onClick={() => setMenuOpen(false)}
                    className="block w-full py-4 rounded-2xl bg-primary text-dark text-center font-bold shadow-lg shadow-primary/20"
                  >
                    Download Resume
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
