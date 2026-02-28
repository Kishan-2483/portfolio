import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"

export default function Contact() {
  const contacts = [
    { icon: <FaEnvelope className="text-3xl text-red-400" />, label: "Email", value: "kishanyadav2483@gmail.com", href: "mailto:kishanyadav2483@gmail.com" },
    { icon: <FaPhone className="text-3xl text-green-400" />, label: "Phone", value: "+91-8299425612", href: "tel:+918299425612" },
    { icon: <FaGithub className="text-3xl text-gray-200" />, label: "GitHub", value: "Kishan-2483", href: "https://github.com/Kishan-2483" },
    { icon: <FaLinkedin className="text-3xl text-blue-500" />, label: "LinkedIn", value: "kishan-yadav", href: "https://linkedin.com/in/kishan-yadav" },
  ]

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-8"
        >
          Get in <span className="text-primary">Touch</span>
        </motion.h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-lg">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl flex items-center gap-6 group hover:border-primary transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-dark/50 group-hover:scale-110 transition-transform duration-300">
                {contact.icon}
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-400 uppercase tracking-widest">{contact.label}</p>
                <p className="text-lg text-white font-semibold group-hover:text-primary transition-colors">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}