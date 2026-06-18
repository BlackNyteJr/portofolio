'use client'

import { motion } from 'framer-motion'

export default function Portfolio() {
  const projects = [
    {
      title: 'Gear2Go Web App',
      description: 'Een Mobile First applicatie voor het huren van outdoor gear, gebouwd met React en Node.js. Uitdagingen waren onder andere het ontwerpen van een schaalbare backend en een intuïtieve gebruikersinterface.',
      technologies: ['React', 'Node.js', 'JS', 'CSS'],
      link: 'https://39490.hosts2.ma-cloud.nl/Scalda/Gear2Go/tnz-stonebit-g2g/web/index.php',
      githubLink: 'https://bitbucket.org/delphinitysd/tnz-stonebit-b2g/src/development/',
      year: '2026',
      status: 'Live'
    },
    {
      title: 'Beer2Go Web App',
      description: 'Een mobile applicatie voor het bestellen van bier, gebouwd met Next.js en Stripe. Uitdagingen waren onder andere het integreren van een veilige betalingsgateway en het optimaliseren van de gebruikerservaring.',
      technologies: ['Next.js', 'PHP', 'Stripe', 'CSS'],
      link: 'https://39490.hosts2.ma-cloud.nl/Scalda/Beer2Go/tnz-stonebit-b2g/public/index.php?page=login',
      githubLink: 'https://bitbucket.org/delphinitysd/tnz-stonebit-b2g/src/development/',
      year: '2026',
      status: 'In Ontwikkeling'
    },
    {
      title: 'Project 3: Real-time Chat App',
      description: 'Korte beschrijving van realtime features, schaalbaarheid en rol in het team.',
      technologies: ['Socket.io', 'React', 'Express', 'PostgreSQL'],
      link: '#',
      year: '2025',
      status: 'Case Study'
    },
    {
      title: 'Project 4: Analytics Dashboard',
      description: 'Korte beschrijving van dashboards, KPI\'s en data visualisatie.',
      technologies: ['React', 'Chart.js', 'API', 'TypeScript'],
      link: '#',
      year: '2025',
      status: 'Live'
    },
    {
      title: 'Project 5: Mobile App',
      description: 'Korte beschrijving van UX keuzes en mobile performance optimalisaties.',
      technologies: ['React Native', 'Firebase', 'Redux'],
      link: '#',
      year: '2024',
      status: 'Prototype'
    }
  ]

  return (
    <div className="min-h-screen bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4">Mijn Projecten</h1>
          <p className="text-xl text-gray-300 mb-12">
            Een selectie van projecten. Vervang titels, beschrijvingen en links met je echte cases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl glass-card hover:border-gray-600 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-gray-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-300">{project.year}</span>
                    <span className="text-xs px-3 py-1 rounded-full border border-gray-600/40 text-gray-100">{project.status}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                          key={i}
                          className="px-3 py-1 bg-gray-700/20 text-gray-100 text-sm rounded-full"
                        >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="inline-block text-white hover:text-gray-300 font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      Live Demo →
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
