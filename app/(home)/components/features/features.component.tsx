'use client'

import { easeOut } from "framer-motion";
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
      ease: easeOut,
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
      ease: easeOut,
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
          <p className="text-cyan-400 text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {FEATURES_SECTION_CONFIG.heading}
          </p>
          <h2 className="text-xl font-medium dark:text-white mb-4 md:mb-6">
            {FEATURES_SECTION_CONFIG.description}
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 justify-center"
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
                className="rounded-2xl bg-white dark:bg-black border border-gray-200 dark:border-gray-800"
              >
                <Link href={feature.link}>
                  <div
                    className="rounded-2xl p-6 flex flex-col items-start w-full h-auto min-h-[150px] bg-white dark:bg-black text-left"
                  >
                    <div
                      className="w-12 h-12 rounded-xl bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-6"
                    >
                      <IconComponent className="w-6 h-6 text-cyan-500 dark:text-cyan-400" />
                    </div>
                    <div className="flex flex-col">
                      <p className="dark:text-white text-xl font-bold mb-1">
                        {feature.title}
                      </p>
                      <p className="dark:text-gray-50 text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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
