import { motion } from "framer-motion"
import iotImg from "../../public/images/Introduction to IoT.jpg"
import genAiImg from "../../public/images/Master Generative AI.jpg"
import cppImg from "../../public/images/Mastering C++.jpg"
import dsaImg from "../../public/images/Data Structures & Algorithms.jpg"
import compCommImg from "../../public/images/Computer Communications.jpg"

export default function Certificates() {
  const certs = [
    { title: "Introduction to IoT", subtitle: "NPTEL", image: iotImg },
    { title: "Master Generative AI", subtitle: "Infosys Springboard", image: genAiImg },
    { title: "Mastering C++", subtitle: "LPU", image: cppImg },
    { title: "Data Structures & Algorithms", subtitle: "Neocolab", image: dsaImg },
    { title: "Computer Communications", subtitle: "University of Colorado", image: compCommImg },
  ]

  return (
    <section id="certificates" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          My <span className="text-primary">Certificates</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="glass p-6 md:p-8 rounded-2xl group relative overflow-hidden flex flex-col h-full border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex-grow">
                {cert.image && (
                  <div className="w-full h-48 sm:h-56 mb-6 overflow-hidden rounded-xl border border-white/10 group-hover:border-primary/50 transition-colors duration-300">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="flex flex-col mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-sm md:text-base text-primary/80 font-medium mt-2 tracking-wide">
                    {cert.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}