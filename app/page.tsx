'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function Home() {
  const highlights = [
    'Beschikbaar voor stage vanaf [Maand Jaar]',
    'Locatie: [Jouw Stad]',
    'Specialisatie: Frontend & Full-stack'
  ]

  const quickInfo = [
    { label: 'Naam', value: '[Jouw Naam]' },
    { label: 'Functie', value: '[Software Developer Stagiair]' },
    { label: 'Studie', value: '[Opleiding + School]' },
    { label: 'Stagebedrijf', value: '[Naam Stagebedrijf]' },
    { label: 'Beschikbaar Vanaf', value: '[DD-MM-JJJJ]' },
    { label: 'E-mail', value: '[jouw.email@voorbeeld.nl]' },
    { label: 'Telefoon', value: '[+31 6 12345678]' },
    { label: 'CV Link', value: '[Link naar CV]' },
    { label: 'GitHub', value: '[github.com/jouwprofiel]' },
    { label: 'LinkedIn', value: '[linkedin.com/in/jouwprofiel]' },
  ]

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-70"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] bg-gray-400/6 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/8 opacity-100 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          className="relative z-10 text-center max-w-4xl"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.p
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-7 rounded-full glass-card text-white text-sm font-semibold"
            variants={fadeInUp}
          >
            Software Development Stage 2026
          </motion.p>
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-8xl font-extrabold mb-6 leading-[0.95]"
            variants={fadeInUp}
          >
            Welkom op mijn<br />
            <span className="text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.06)]">Portfolio</span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-2xl text-gray-200/90 mb-12 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            [Jouw Naam] | Software Development Professional | Communicatie & Samenwerking
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={fadeInUp}
          >
            {highlights.map((item) => (
              <motion.span
                key={item}
                className="px-4 py-2 rounded-full glass-card text-sm text-gray-100"
                whileHover={{ y: -4 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Mijn Projecten
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border border-gray-600/60 text-white font-bold rounded-xl hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center glass-card"
            >
              Neem Contact Op
            </Link>
          </motion.div>

          <motion.div
            className="mt-10 text-left"
            variants={fadeInUp}
          >
            <p className="text-white font-semibold mb-4 text-center">Snel Invullen (Placeholders)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickInfo.map((item) => (
                <motion.div
                  key={item.label}
                  className="glass-card rounded-xl p-3"
                  whileHover={{ y: -4 }}
                >
                  <p className="text-xs uppercase tracking-wide text-gray-400">{item.label}</p>
                  <p className="text-sm text-gray-100 font-semibold mt-1">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-tertiary/40 border-y border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '5+', label: 'Projecten' },
              { number: '3+', label: 'Jaar Ervaring' },
              { number: '10+', label: 'Technologieën' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl glass-card hover:border-gray-600/70 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-extrabold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
