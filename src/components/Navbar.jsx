import { Link } from "react-router-dom"

export default function Navbar() {
  const links = [
    { name: "Home", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/#home` },
    { name: "About", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/#about` },
    { name: "Skills", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/#skills` },
    { name: "Projects", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/#projects` },
    { name: "Certificates", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/#certificates` },
    { name: "Achievements", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/#achievements` },
    { name: "Education", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/#education` },
    { name: "Contact", href: `${import.meta.env.BASE_URL.replace(/\/$/, '')}/#contact` },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-gray-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 cursor-pointer">
            <a href={`${import.meta.env.BASE_URL}#home`}>Kishan Yadav</a>
          </h2>
          <div className="hidden md:flex space-x-8 items-center">
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
        </div>
      </nav>
    </>
  );
}