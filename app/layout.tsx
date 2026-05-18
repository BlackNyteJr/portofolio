import type { Metadata } from 'next'
import { Manrope, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Portfolio | Software Development',
  description: 'Welcome to my portfolio - Software Development Professional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} relative bg-secondary text-gray-100`}>
        <div aria-hidden="true" className="background-motion">
          <div className="future-core future-core-three">
            <span className="future-orbit-dot" />
          </div>
          <div className="future-core future-core-one" />
          <div className="future-core future-core-two" />
          <div className="future-scanlines" />
          <div className="future-particle-field">
            {Array.from({ length: 18 }).map((_, index) => (
              <span key={index} className={`future-particle future-particle-${index + 1}`} />
            ))}
          </div>
          <div className="motion-sweep motion-sweep-one" />
          <div className="motion-sweep motion-sweep-two" />
          <div className="motion-band motion-band-one" />
          <div className="motion-band motion-band-two" />
          <div className="motion-orb motion-orb-one" />
          <div className="motion-orb motion-orb-two" />
          <div className="motion-orb motion-orb-three" />
          <div className="motion-grid" />
        </div>
        <div className="relative z-10">
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
