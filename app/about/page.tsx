'use client'

import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function About() {
  const profilePlaceholders = [
    { label: 'Naam', value: '[Jouw Naam]' },
    { label: 'Leeftijd', value: '[Jouw Leeftijd]' },
    { label: 'Stagebedrijf', value: '[Naam Bedrijf]' },
    { label: 'Studie', value: '[Opleiding + Jaar]' }
  ]

  return (
    <div className="min-h-screen bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-12">Over Mij</h1>

          <section className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {profilePlaceholders.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-card rounded-2xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <p className="text-xs uppercase tracking-wide text-gray-400 mb-1">{item.label}</p>
                  <p className="text-white font-bold">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Introduction */}
          <section className="mb-12">
            <motion.div
              className="text-lg text-gray-300 space-y-4"
              variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
              initial="initial"
              animate="animate"
            >
              <motion.p variants={fadeInUp}>
                Hallo! Ik ben een gepassioneerde software developer met een sterke focus op het creëren van 
                slimme en gebruiksvriendelijke oplossingen. Met mijn achtergrond in software development 
                breng ik creatieve ideeën in praktijk en werk ik graag samen in teams.
              </motion.p>
              <motion.p variants={fadeInUp}>
                Mijn sterke punten liggen in communicatie, het genereren van innovatieve ideeën en 
                teamwork. Ik geloof in het belang van helder communiceren en het samenwerken aan 
                gezamenlijke doelen.
              </motion.p>
            </motion.div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Vaardigheden</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
                { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
                { category: 'Tools', skills: ['Git', 'Docker', 'REST APIs', 'GraphQL'] },
                { category: 'Soft Skills', skills: ['Communicatie', 'Teamwork', 'Problem Solving', 'Creativiteit'] }
              ].map((skillGroup, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl glass-card hover:border-gray-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                    <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
                  <ul className="space-y-2">
                    {skillGroup.skills.map((skill, i) => (
                      <li key={i} className="text-gray-300 flex items-center">
                          <span className="text-gray-300 mr-2">▸</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Stage/Internship */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Mijn Stage</h2>
            <motion.div
              className="p-8 rounded-2xl glass-card border-gray-700/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Software Development Stagiair</h3>
              <p className="text-gray-300 mb-4">
                Tijdens mijn stage focus ik op het ontwikkelen van praktische vaardigheden en het 
                bijdragen aan reële projecten. Ik werk aan het verbeteren van mijn technische kennis 
                en het toepassen van mijn sterke punten in een professionele omgeving.
              </p>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-white font-semibold">Focus gebieden:</span> Web Development, Team Collaboration, Code Quality</p>
                <p><span className="text-white font-semibold">Doelen:</span> Professioneel groeien, waardevolle bijdragen leveren, praktische ervaring opdoen</p>
                <p><span className="text-white font-semibold">Periode:</span> [Startdatum] - [Einddatum]</p>
              </div>
            </motion.div>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
