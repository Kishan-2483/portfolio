import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-primary">About</span> Me
          </h2>
          <div className="glass p-8 md:p-12 rounded-2xl">
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              I am a Computer Science student with a strong interest in web development
              and scalable application design. Skilled in modern web technologies and
              passionate about solving real-world problems through efficient and innovative
              solutions. A quick learner who thrives in fast-paced environments and continuously
              seeks to improve technical expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}