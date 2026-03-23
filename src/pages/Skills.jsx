import { motion } from "framer-motion"
import {
  SiCplusplus, SiJavascript, SiPhp, SiPython,
  SiHtml5, SiCss3, SiNodedotjs, SiReact, SiTailwindcss,
  SiMysql, SiMongodb, SiGithub, SiGit, SiC
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

export default function Skills() {
  const skillCategories = [
    {
      label: "Languages",
      icon: "💻",
      skills: [
        { name: "C++",        logo: <SiCplusplus />,   color: "#00599C" },
        { name: "JavaScript", logo: <SiJavascript />,  color: "#F7DF1E" },
        { name: "C",          logo: <SiC />,            color: "#A8B9CC" },
        { name: "PHP",        logo: <SiPhp />,          color: "#777BB4" },
        { name: "Java",       logo: <FaJava />,         color: "#f89820" },
        { name: "Python",     logo: <SiPython />,       color: "#3776AB" },
      ],
    },
    {
      label: "Frameworks",
      icon: "⚙️",
      skills: [
        { name: "HTML",     logo: <SiHtml5 />,       color: "#E34F26" },
        { name: "CSS",      logo: <SiCss3 />,        color: "#1572B6" },
        { name: "NodeJS",   logo: <SiNodedotjs />,   color: "#339933" },
        { name: "React",    logo: <SiReact />,       color: "#61DAFB" },
        { name: "Tailwind", logo: <SiTailwindcss />, color: "#06B6D4" },
      ],
    },
    {
      label: "Tools / Platforms",
      icon: "🛠️",
      skills: [
        { name: "MySQL",   logo: <SiMysql />,   color: "#4479A1" },
        { name: "MongoDB", logo: <SiMongodb />, color: "#47A248" },
        { name: "GitHub",  logo: <SiGithub />,  color: "#ffffff" },
        { name: "Git",     logo: <SiGit />,     color: "#F05032" },
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } }
  }

  return (
    <section id="skills" className="py-20 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-14 text-center"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="flex flex-col gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: catIndex * 0.15, duration: 0.5 }}
              className="glass p-6 md:p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-lg font-semibold text-primary mb-5 flex items-center gap-2">
                <span>{category.icon}</span> {category.label}
              </h3>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-default border border-white/10 bg-white/5 text-gray-200 transition-all duration-300 hover:border-primary/50 hover:bg-white/10"
                  >
                    <span
                      className="text-base transition-colors duration-300"
                      style={{ color: skill.color }}
                    >
                      {skill.logo}
                    </span>
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
