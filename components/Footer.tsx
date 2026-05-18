'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="border-t border-gray-800/30 bg-black/60 backdrop-blur-xl mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 glass-card rounded-2xl p-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">Dev Portfolio</h3>
            <p className="text-gray-300 text-sm">
              Software Development Professional met passie voor innovatie en teamwork.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'Over Mij', href: '/about' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Volg Mij</h4>
            <div className="flex gap-4">
              {[
                { name: 'LinkedIn', icon: '💼' },
                { name: 'GitHub', icon: '🐙' },
                { name: 'Twitter', icon: '𝕏' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-2xl"
                  title={social.name}
                  whileHover={{ scale: 1.2 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-300 text-sm">
          <p>© {currentYear} Dev Portfolio. Alle rechten voorbehouden.</p>
          <p className="mt-2">Gemaakt met <span className="text-white">❤️</span> voor mijn stage</p>
        </div>
      </div>
    </motion.footer>
  )
}
