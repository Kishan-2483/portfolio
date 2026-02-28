import { motion } from "framer-motion"

export default function Certificates() {
  const certs = [
    "Introduction to IoT – NPTEL",
    "Master Generative AI – Infosys Springboard",
    "Mastering C++ – LPU",
    "Data Structures & Algorithms – Neocolab",
    "Computer Communications – University of Colorado",
  ]

  return (
    <section id="certificates" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-primary">Certificates</span>
        </motion.h2>
        
        <div className="flex flex-col gap-4">
          {certs.map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass p-5 rounded-xl flex items-center gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-gray-300 font-medium">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}