import { motion } from "framer-motion"

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <img
            src="/portfolio/images/profile.png"
            alt="Kishan Yadav"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-lg shadow-primary/20 ring-2 ring-white/10"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Kishan Yadav</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-gray-400 mb-10 font-light">
            Full Stack Developer <span className="text-primary mx-2">•</span> React <span className="text-primary mx-2">•</span> Node <span className="text-primary mx-2">•</span> PHP
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects" className="px-8 py-3 rounded-full bg-primary text-dark font-semibold hover:bg-blue-400 transition-colors">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full border border-gray-600 text-white hover:border-primary hover:text-primary transition-colors">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}