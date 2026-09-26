import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const Counter = ({ target, start }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let current = 0
    const steps = 50
    const increment = target / steps

    const timer = setInterval(() => {
      current += increment

      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.round(current))
      }
    }, 25)

    return () => clearInterval(timer)
  }, [start, target])

  return count
}

const StatsSection = () => {
  const [startCount, setStartCount] = useState(false)

  return (
    <motion.section onViewportEnter={() => setStartCount(true)} viewport={{ once: true }} className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-5">

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-amber-400"></div>
              <p className="text-sm font-semibold tracking-wide text-blue-700">UCP FACULTY HUB</p>
            </div>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">By the Numbers</h2>

            <p className="mt-4 max-w-md leading-7 text-slate-600">
              A quick overview of the academic information organized through the UCP Faculty Hub.
            </p>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 border-y border-slate-200 sm:grid-cols-3 sm:border-y-0">

              <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="py-7 sm:border-r sm:border-slate-200 sm:px-7">
                <p className="text-5xl font-bold text-blue-700">
                  <Counter target={569} start={startCount} />
                </p>
                <p className="mt-3 font-semibold text-slate-900">Directory Records</p>
                <div className="mt-4 h-1 w-10 rounded-full bg-blue-200"></div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="border-t border-slate-200 py-7 sm:border-r sm:border-t-0 sm:border-slate-200 sm:px-7">
                <p className="text-5xl font-bold text-slate-900">
                  <Counter target={41} start={startCount} />
                </p>
                <p className="mt-3 font-semibold text-slate-900">Departments</p>
                <div className="mt-4 h-1 w-10 rounded-full bg-amber-400"></div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="border-t border-slate-200 py-7 sm:border-t-0 sm:px-7">
                <p className="text-5xl font-bold text-slate-900">
                  <Counter target={9} start={startCount} />
                </p>
                <p className="mt-3 font-semibold text-slate-900">Academic Faculties</p>
                <div className="mt-4 h-1 w-10 rounded-full bg-blue-200"></div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default StatsSection