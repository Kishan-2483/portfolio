import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import profilePic from "../../public/images/profile.png"

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 overflow-hidden">
      {/* Background Decorative Glow Bubbles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 relative z-10 text-center md:text-left">

        {/* Left: Text Content */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for new opportunities
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tighter leading-tight md:leading-none">
              Hi, I'm{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-blue-600">
                Kishan Yadav
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 font-light max-w-lg leading-relaxed mx-auto md:mx-0">
              Transforming complex problems into <span className="text-white font-medium">modern, high-performing</span> web applications using <span className="text-primary italic">React & Node.js</span>.
            </p>
          </motion.div>

          {/* Social Links & Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-8 justify-center md:justify-start"
          >
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-primary text-dark font-bold hover:bg-blue-400 hover:scale-[1.03] transition-all shadow-lg shadow-primary/25"
              >
                Explore Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-gray-700 text-white font-medium hover:bg-white/5 hover:border-primary transition-all"
              >
                Let's Talk
              </a>
            </div>

            <div className="flex items-center gap-6 text-2xl text-gray-400">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: Circular Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            y: [0, -15, 0]
          }}
          transition={{
            duration: 0.8,
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative group shrink-0"
        >
          {/* Animated decorative ring */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-blue-600 rounded-full opacity-30 blur-2xl group-hover:opacity-50 transition-all duration-500" />

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-gradient-to-tr from-primary/50 via-gray-700/50 to-blue-500/50 backdrop-blur-sm border border-white/10">
            <img
              src={profilePic}
              alt="Kishan Yadav"
              className="w-full h-full rounded-full object-cover border-4 border-[#0f172a] shadow-inner"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}