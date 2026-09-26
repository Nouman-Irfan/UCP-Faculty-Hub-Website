import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'

const Hero = () => {
  return (
    <section className="relative h-125 overflow-hidden">
      <motion.img src="/assets/hero/hero.jpeg" alt="University of Central Punjab Campus" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: 'easeOut' }} className="absolute inset-0 h-full w-full object-cover" />

      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/45 to-transparent"></div>

      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="w-full max-w-2xl text-white">

          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-5 flex items-center gap-4">
            <div className="h-px w-10 bg-amber-400"></div>
            <p className="text-sm font-semibold tracking-[0.25em] text-slate-200">UNIVERSITY OF CENTRAL PUNJAB</p>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="font-serif text-5xl font-bold leading-[1.05] md:text-6xl">
            Explore Today.
            <span className="block text-blue-400">Build Tomorrow.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            Connect with faculty members, departments and academic leadership — all in one organized place.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }} className="mt-8 flex gap-4">
            <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/faculty" className="block rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                Explore Faculty →
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link to="/departments" className="block rounded-xl border border-white/70 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900">
                View Departments
              </Link>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.75 }} className="mt-10 flex gap-12 border-t border-white/15 pt-6">

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.85 }}>
              <p className="text-lg font-semibold">Knowledge</p>
              <p className="mt-1 text-xs text-slate-300">For a Better Tomorrow</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.95 }}>
              <p className="text-lg font-semibold">Community</p>
              <p className="mt-1 text-xs text-slate-300">People Who Inspire</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 1.05 }}>
              <p className="text-lg font-semibold">Opportunity</p>
              <p className="mt-1 text-xs text-slate-300">Beyond the Classroom</p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero