import React from 'react'
import { motion } from 'motion/react'

const DepartmentSearch = ({ search, setSearch }) => {
  return (
    <section className="border-y border-slate-200 bg-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8">

        <motion.div initial={{ opacity: 0, y: 20, scale: 0.99 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-700">FIND DEPARTMENT</p>
              <h2 className="mt-1 text-xl font-bold text-slate-900">Search Departments</h2>
            </div>

            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => setSearch('')} className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
              Clear Search
            </motion.button>
          </div>

          <input type="text" placeholder="Search department..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100" />

        </motion.div>
      </div>
    </section>
  )
}

export default DepartmentSearch