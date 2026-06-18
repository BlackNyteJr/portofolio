'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simuleer formulier verzenden
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitting(false)
      alert('Bedankt voor je bericht! Ik zal je snel terugbellen.')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-transparent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-center">Contact</h1>
          <p className="text-xl text-gray-300 mb-12 text-center">
            Heb je een vraag of wil je samenwerken?
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
              { icon: '✉️', label: 'Email', value: 'dmaxwell@student.scalda.nl' },
              { icon: '📱', label: 'Telefoon', value: '[+31 6 23951203]' },
              { icon: '📍', label: 'Locatie', value: '[Aardenburg, Nederland]' }
            ].map((method, index) => (
              <motion.div
                key={index}
                className="p-6 text-center rounded-2xl glass-card hover:border-gray-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{method.label}</h3>
                <p className="text-gray-300">{method.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl glass-card border-gray-700/50 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div>
              <label className="block text-lg font-semibold text-white mb-2">Naam</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-gray-600/30 rounded-lg focus:border-gray-400 focus:outline-none text-white transition-colors"
                placeholder="Jouw naam"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary border border-gray-600/30 rounded-lg focus:border-gray-400 focus:outline-none text-white transition-colors"
                placeholder="email@voorbeeld.nl"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-white mb-2">Bericht</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-secondary border border-gray-600/30 rounded-lg focus:border-gray-400 focus:outline-none text-white transition-colors resize-none"
                placeholder="Schrijf hier je bericht..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 disabled:opacity-50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? 'Verzenden...' : 'Verzend Bericht'}
            </motion.button>
          </motion.form>

          <motion.div
            className="mt-8 p-6 rounded-2xl glass-card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <p className="text-gray-300 text-sm">Reactietijd: Binnen 24 uur</p>
            <p className="text-gray-300 text-sm">Beschikbaarheid: Ma-Vr, 09:00 - 14:45</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="mt-12 text-center space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-gray-300">Volg mij op sociale media:</p>
            <div className="flex justify-center gap-6">
              {['LinkTree'].map((social, index) => (
                <motion.a
                  key={index}
                  href="https://linktr.ee/damyanmaxwell"
                  className="text-white hover:text-gray-300 font-semibold transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
