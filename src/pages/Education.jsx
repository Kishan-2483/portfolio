import { motion } from "framer-motion"

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Education</span>
        </motion.h2>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-6 rounded-2xl border-l-4 border-l-primary"
          >
            <h3 className="text-xl font-bold text-white mb-2">Lovely Professional University</h3>
            <p className="text-gray-400">B.Tech CSE | CGPA: 6.86</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="glass p-6 rounded-2xl border-l-4 border-l-blue-500"
          >
            <h3 className="text-xl font-bold text-white mb-2">Ryan International School</h3>
            <p className="text-gray-400">Intermediate – 84%</p>
            <p className="text-gray-400">Matriculation – 83.8%</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}