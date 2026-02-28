import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    "C++", "JavaScript", "C", "PHP", "Java", "Python",
    "React", "NodeJS", "MongoDB", "MySQL", "Git"
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  }

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.1, backgroundColor: "var(--color-primary)", color: "var(--color-dark)" }}
              className="glass px-6 py-3 rounded-full text-lg font-medium cursor-default transition-colors duration-300"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}