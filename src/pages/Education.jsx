import { motion } from "framer-motion"

const timeline = [
  {
    year: "2021",
    degree: "Matriculation",
    institution: "Ryan International School",
    mark: "83.8%",
    icon: "🏫",
  },
  {
    year: "2023",
    degree: "Intermediate (12th)",
    institution: "Ryan International School",
    mark: "84%",
    icon: "📘",
  },
  {
    year: "2023 – Present",
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Lovely Professional University",
    mark: "CGPA: 6.86",
    icon: "🎓",
    current: true,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          My <span className="text-primary">Education</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/10" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Dot */}
                <div className={`absolute left-3.5 md:left-5 top-4 w-5 h-5 rounded-full border-2 flex items-center justify-center
                  ${item.current
                    ? "bg-primary border-primary shadow-lg shadow-primary/50 animate-pulse"
                    : "bg-dark border-primary"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${item.current ? "bg-white" : "bg-primary"}`} />
                </div>

                {/* Card */}
                <div className="glass p-5 md:p-6 rounded-2xl border border-white/10 hover:border-primary/40 transition-all duration-300 group">
                  {/* Year badge */}
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 tracking-wider
                    ${item.current
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "bg-white/5 text-gray-400 border border-white/10"
                    }`}
                  >
                    {item.year}
                  </span>

                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 flex items-center gap-2">
                        <span>{item.icon}</span> {item.degree}
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">{item.institution}</p>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-primary whitespace-nowrap bg-primary/10 px-2 sm:px-3 py-1 rounded-full border border-primary/20 flex-shrink-0">
                      {item.mark}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}