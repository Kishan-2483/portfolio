import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const base = import.meta.env.BASE_URL.replace(/\/$/, "")

  const links = [
    { name: "Home",         href: `${base}/#home` },
    { name: "About",        href: `${base}/#about` },
    { name: "Skills",       href: `${base}/#skills` },
    { name: "Projects",     href: `${base}/#projects` },
    { name: "Certificates", href: `${base}/#certificates` },
    { name: "Achievements", href: `${base}/#achievements` },
    { name: "Education",    href: `${base}/#education` },
    { name: "Contact",      href: `${base}/#contact` },
  ]

  // Close menu on scroll & add shadow when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
      if (menuOpen) setMenuOpen(false)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [menuOpen])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 glass border-b border-gray-800 transition-all duration-300 ${
          scrolled ? "shadow-lg shadow-black/30" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 cursor-pointer">
            <a href={`${import.meta.env.BASE_URL}#home`}>Kishan Yadav</a>
          </h2>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/resume"
              className="text-gray-300 hover:text-primary transition-colors text-sm font-medium tracking-wide cursor-pointer"
            >
              Resume
            </Link>
          </div>

          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-300 rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 md:hidden glass border-l border-gray-800 flex flex-col pt-20 pb-8 px-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Brand in drawer */}
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-8 font-semibold">Navigation</p>

        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-200 hover:text-primary text-base font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/10"
            >
              {link.name}
            </a>
          ))}
          <Link
            to="/resume"
            onClick={handleLinkClick}
            className="text-gray-200 hover:text-primary text-base font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/10"
          >
            Resume
          </Link>
        </nav>

        {/* Footer in drawer */}
        <div className="mt-auto pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">© {new Date().getFullYear()} Kishan Yadav</p>
        </div>
      </div>
    </>
  )
}