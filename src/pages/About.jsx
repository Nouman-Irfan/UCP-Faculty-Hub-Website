import React from 'react'
import { motion } from 'motion/react'
import AboutDetails from '../components/AboutDetails'

const About = () => {
  return (
    <main className="bg-white text-slate-900">

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">

          <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold tracking-wide text-blue-700 sm:text-sm">
              ABOUT THE PROJECT
            </p>

            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              UCP Faculty Hub
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.25 }} className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              UCP Faculty Hub is a student-developed platform created to make faculty information easier to explore and understand.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.35 }} className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Instead of searching through different university pages, students can browse faculty members, departments and academic leadership from one organized place.
            </motion.p>

            <motion.div initial={{ width: 0 }} whileInView={{ width: 64 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.45 }} className="mt-7 h-1 bg-amber-400" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 35, scale: 0.96 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} whileHover={{ scale: 1.015 }}>
            <img
              src="/assets/hero/about.png"
              alt="UCP Academic Community"
              className="h-56 w-full rounded-2xl object-cover sm:h-64 md:h-75"
            />
          </motion.div>

        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-2 md:gap-10">

          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold text-blue-700 sm:text-sm">OUR PURPOSE</p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Why We Built It</h2>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Faculty information can sometimes be spread across multiple university pages. This project brings useful academic information together in a simple and organized format.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              The main goal is to help students quickly find the people, departments and leadership connected with their academic life.
            </p>
          </motion.div>

        </div>
      </section>

      <AboutDetails />

    </main>
  )
}

export default About