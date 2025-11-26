"use client"

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const ROTATING_WORDS = [
  'Data Research',
  'E-Commerce',
  'Competitor',
  'Lead Gens',
]

export const HeroSection = ({
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ROTATING_WORDS.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])
  return (
    <section className={`py-12 md:py-16 lg:py-20 px-6 text-left ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[500px] h-auto overflow-hidden bg-black border border-gray-800 rounded-3xl">
          <img
            src="/images/bg-new-hero.webp"
            alt="Hero background"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 80% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
            }}
          />
          <div className="relative z-1 w-full h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 h-full items-center px-6 lg:px-12 py-12">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl font-semibold text-white leading-tight">
                    Scrape web data for
                    <br />
                    <span className="inline-block relative">
                      <AnimatePresence mode="popLayout">
                        <motion.span
                          key={currentIndex}
                          className="inline-block text-cyan-400 whitespace-nowrap overflow-hidden will-change-transform"
                          initial={{ width: 0 }}
                          animate={{ width: 'auto' }}
                          exit={{ width: 0 }}
                          transition={{ duration: 0.6, ease: 'easeInOut' }}
                        >
                          {ROTATING_WORDS[currentIndex]}
                        </motion.span>
                      </AnimatePresence>
                      <motion.span
                        className="inline-block w-[3px] h-[0.8em] bg-cyan-400 ml-0.5 relative -top-[0.2em]"
                        animate={{ opacity: [1, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          repeatType: 'reverse',
                        }}
                      />
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-white">
                    Get clean, structured data from any website at any scale.
                  </p>
                </div>
                <div className="w-full max-w-xl">
                  <Link href="/docs/getting-started/overview" className="text-[#032A30] bg-[hsl(189,85%,52%)] px-4 py-2 rounded-lg font-medium transition-all duration-200 no-underline hover:bg-[hsl(189,85%,45%)] hover:-translate-y-px hover:shadow-[0_4px_12px_hsla(189,85%,52%,0.3)]">
                    Read Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
