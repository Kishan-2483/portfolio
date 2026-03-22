import { motion } from "framer-motion"
import gameGuruImg from "../../public/images/Gameguru.jpg"
import tutorSphereImg from "../../public/images/TutorSphere.jpg"
import resumeBuilderImg from "../../public/images/Resumebuilder.jpg"
import rideOnWheelsImg from "../../public/images/RideOnwheels.jpg"
import {
  SiReact, SiJavascript, SiPython, SiPhp, SiTailwindcss,
  SiMongodb, SiNodedotjs, SiStripe, SiSpring, SiCss3, SiMysql, SiGithub
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

const techIconMap = {
  "React":       { icon: <SiReact />,        color: "#61DAFB" },
  "JavaScript":  { icon: <SiJavascript />,   color: "#F7DF1E" },
  "Python":      { icon: <SiPython />,        color: "#3776AB" },
  "PHP":         { icon: <SiPhp />,           color: "#777BB4" },
  "SQL":         { icon: <SiMysql />,         color: "#4479A1" },
  "Tailwind CSS":{ icon: <SiTailwindcss />,  color: "#06B6D4" },
  "Node.js":     { icon: <SiNodedotjs />,    color: "#339933" },
  "Express":     { icon: <SiNodedotjs />,    color: "#339933" },
  "MongoDB":     { icon: <SiMongodb />,      color: "#47A248" },
  "CSS":         { icon: <SiCss3 />,          color: "#1572B6" },
  "Spring-Boot": { icon: <SiSpring />,        color: "#6DB33F" },
  "Stripe API":  { icon: <SiStripe />,        color: "#635BFF" },
  "Core Java":   { icon: <FaJava />,          color: "#f89820" },
}

export default function Projects() {
  const projects = [
    {
      title: "GameGuru",
      subtitle: "Game Recommendation Engine",
      description: "An interactive web application recommending games based on user preferences. Integrated the RAWG API for real-time game data fetching and intelligent filtering.",
      techStack: ["React", "JavaScript", "Python", "RAWG API"],
      image: gameGuruImg,
      github: "https://github.com/Kishan-2483/Game-Recommendation-Bot",
    },
    {
      title: "TutorSpher",
      subtitle: "Tutor Booking Platform",
      description: "Secure tutor booking system with dual-role authentication, dynamic session scheduling, and automated mail integration. Features intuitive dashboards for both tutors and students.",
      techStack: ["PHP", "SQL", "Tailwind CSS", "JavaScript"],
      image: tutorSphereImg,
      github: "https://github.com/Kishan-2483/Tutor-Booking",
    },
    {
      title: "ResumeBuilder",
      subtitle: "Dynamic Resume Builder",
      description: "A comprehensive ATS-friendly resume builder allowing users to create, customize, and download professional resumes. Features real-time preview and multiple export formats.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      image: resumeBuilderImg,
      github: "https://github.com/Kishan-2483/Resumebuilder",
    },
    {
      title: "RideOnWheels",
      subtitle: "Bicycle-Booking Platform",
      description: "A seamless platform for renting bicycles with location-based availability tracking, secure payment integration, and user dashboards for booking history and ride analytics.",
      techStack: ["React", "CSS", "Spring-Boot", "Stripe API", "Core Java"],
      image: rideOnWheelsImg,
      github: "https://github.com/Kishan-2483/bycycle-booking-platform-",
    }
  ]


  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl group relative overflow-hidden flex flex-col h-full border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex-grow">
                {proj.image && (
                  <div className="w-full h-48 sm:h-56 mb-6 overflow-hidden rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors duration-300">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-sm md:text-base text-primary/80 font-medium mt-2 tracking-wide">
                      {proj.subtitle}
                    </p>
                  </div>
                  {proj.github ? (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0 hover:scale-110"
                      onClick={e => e.stopPropagation()}
                      title="View on GitHub"
                    >
                      <SiGithub className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" />
                    </a>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  )}
                </div>

                <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                  {proj.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {proj.techStack.map((tech, i) => {
                    const mapped = techIconMap[tech]
                    return (
                      <span
                        key={i}
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-primary/40 group-hover:text-white transition-all duration-300"
                      >
                        {mapped && (
                          <span style={{ color: mapped.color }} className="text-sm">
                            {mapped.icon}
                          </span>
                        )}
                        {tech}
                      </span>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}