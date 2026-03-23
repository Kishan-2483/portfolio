import { motion } from "framer-motion"

export default function Achievements() {
  const achievements = [
    "Won Quiz – Google Developer Group Roadshow (2025)",
    "HackerRank: 5★ C++, 4★ Python",
    "Novice Badge – HackerEarth",
  ]

  return (
    <section id="achievements" className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Achievements</span>
        </motion.h2>

        <div className="grid gap-6">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 border-b-4 border-b-blue-500"
            >
              <span className="text-2xl">🏆</span>
              <p className="text-lg text-white font-medium">{ach}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}