import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "GameGuru",
      subtitle: "Game Recommendation Engine",
      description: "An interactive web application recommending games based on user preferences. Integrated the RAWG API for real-time game data fetching and intelligent filtering.",
      techStack: ["React", "JavaScript", "Python", "RAWG API"],
    },
    {
      title: "TutorSpher",
      subtitle: "Tutor Booking Platform",
      description: "Secure tutor booking system with dual-role authentication, dynamic session scheduling, and automated mail integration. Features intuitive dashboards for both tutors and students.",
      techStack: ["PHP", "SQL", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "ResumeGenius",
      subtitle: "Dynamic Resume Builder",
      description: "A comprehensive ATS-friendly resume builder allowing users to create, customize, and download professional resumes. Features real-time preview and multiple export formats.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "BikeTrail",
      subtitle: "Bicycle-Booking Platform",
      description: "A seamless platform for renting bicycles with location-based availability tracking, secure payment integration, and user dashboards for booking history and ride analytics.",
      techStack: ["React", "CSS", "Spring-Boot ", "Stripe API","Java"],
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
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <p className="text-sm md:text-base text-primary/80 font-medium mt-2 tracking-wide">
                      {proj.subtitle}
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                  {proj.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {proj.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 text-gray-300 border border-white/5 group-hover:border-primary/40 group-hover:text-white transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}