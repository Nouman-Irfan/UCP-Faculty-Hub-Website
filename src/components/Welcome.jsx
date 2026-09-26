import React from 'react'
import { motion } from 'motion/react'

const Welcome = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="mx-auto max-w-3xl text-center">

        <p className="text-sm font-semibold text-blue-700">WELCOME TO UCP FACULTY HUB</p>

        <h2 className="mt-3 text-3xl font-bold">
          Explore UCP's Academic Community
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          Find faculty members, explore departments and discover academic
          leadership without searching through multiple university pages.
        </p>

        <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mx-auto mt-6 h-1 rounded-full bg-amber-400" />

      </motion.div>
    </section>
  )
}

export default Welcome