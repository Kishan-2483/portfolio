import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "GameGuru – Game Recommendation Bot",
      description: "Developed an interactive web application recommending games using RAWG API with JavaScript & Python.",
    },
    {
      title: "TutorSpher – Tutor Booking Platform",
      description: "Secure tutor booking system with authentication, session scheduling and mail integration using PHP & SQL.",
    }
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">
                {proj.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {proj.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}