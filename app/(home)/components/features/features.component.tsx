'use client'

import { motion } from 'framer-motion'
import {
  Bot,
  Map,
  SlidersHorizontal,
  TextSearch,
} from 'lucide-react'
import {
  FEATURES_ITEMS,
  FEATURES_SECTION_CONFIG,
} from './features.constant'
import Link from 'next/link'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  bot: Bot,
  'sliders-horizontal': SlidersHorizontal,
  'text-search': TextSearch,
  map: Map,
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
export const FeaturesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="mb-10 md:mb-16 text-center" variants={itemVariants}>
          <p className="text-cyan-400 text-xl font-medium mb-4">
            {FEATURES_SECTION_CONFIG.heading}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold dark:text-white mb-4 md:mb-6">
            {FEATURES_SECTION_CONFIG.description}
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
        >
          {FEATURES_ITEMS.map((feature) => {
            const IconComponent = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{
                  borderColor: 'rgba(6, 182, 212, 0.5)',
                  transition: { duration: 0.2 },
                }}
                className="rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-6 md:p-8 flex flex-col items-center text-center"
              >
                <Link
                  href={feature.link}
                  className="w-full h-full flex flex-col items-center"
                >
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3 bg-gray-200 dark:bg-gray-800">
                    <IconComponent className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                  </div>
                  <h3 className="dark:text-white text-lg md:text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </section>
  )
}
