import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <section className="relative min-h-155 overflow-hidden sm:h-125 sm:min-h-0">
      <motion.img
        src="/assets/hero/hero.jpeg"
        alt="University of Central Punjab Campus"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: 'easeOut' }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/65 to-slate-950/20 sm:from-slate-950/90 sm:via-slate-950/45 sm:to-transparent" />

      <div className="relative mx-auto flex h-full min-h-155 max-w-7xl items-center px-4 py-10 sm:min-h-0 sm:px-6 sm:py-0">
        <div className="w-full max-w-2xl text-white">

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
            <div className="h-px w-7 bg-amber-400 sm:w-10" />
            <p className="text-xs font-semibold tracking-[0.15em] text-slate-200 sm:text-sm sm:tracking-[0.25em]">
              UNIVERSITY OF CENTRAL PUNJAB
            </p>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="font-serif text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
            Explore Today.
            <span className="block text-blue-400">Build Tomorrow.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-5 max-w-xl text-base leading-7 text-slate-200 sm:mt-6 sm:text-lg sm:leading-8">
            Connect with faculty members, departments and academic leadership — all in one organized place.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }} className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-4">
            <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/faculty" className="block w-full rounded-xl bg-blue-600 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto">
                Explore Faculty →
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/departments" className="block w-full rounded-xl border border-white/70 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900 sm:w-auto">
                View Departments
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }} className="mt-8 grid grid-cols-3 gap-3 border-t border-white/15 pt-5 sm:mt-10 sm:gap-12 sm:pt-6">
            {[
              ['Knowledge', 'For a Better Tomorrow'],
              ['Community', 'People Who Inspire'],
              ['Opportunity', 'Beyond the Classroom']
            ].map(([title, text], index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.85 + index * 0.1 }}>
                <p className="text-sm font-semibold sm:text-lg">{title}</p>
                <p className="mt-1 text-[10px] leading-4 text-slate-300 sm:text-xs">{text}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero