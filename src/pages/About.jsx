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
              I am a Computer Science student passionate about building scalable
              web applications and solving real-world problems using modern technologies.
              I thrive in dynamic environments and am constantly pushing myself to learn
              and master new tools and frameworks.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}