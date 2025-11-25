'use client'

import { motion } from 'framer-motion'
import { CirclePlay, Currency, Sparkle } from 'lucide-react'
import {
  GET_STARTED_ITEMS,
  GET_STARTED_SECTION_CONFIG,
} from './get-started.constant'
import Link from 'next/link'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  sparkle: Sparkle,
  currency: Currency,
  'circle play': CirclePlay,
}

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export const GetStartedSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="mb-10 md:mb-16" variants={itemVariants}>
          <p className="text-cyan-400 text-xl font-semibold mb-4">
            {GET_STARTED_SECTION_CONFIG.heading}
          </p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            {GET_STARTED_SECTION_CONFIG.description}
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center"
          variants={containerVariants}
        >
          {GET_STARTED_ITEMS.map((feature) => {
            const IconComponent = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.id}
                className="border border-gray-800 rounded-2xl p-6 flex flex-col items-start w-full h-auto min-h-[150px] bg-black text-left"
                variants={itemVariants}
                whileHover={{
                  borderColor: 'rgba(6, 182, 212, 0.5)',
                  transition: { duration: 0.2 },
                }}
              >
                <Link href={feature.link}>
                  <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white text-xl font-bold mb-1">
                      {feature.title}
                    </p>
                    <p className="text-gray-50 text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
