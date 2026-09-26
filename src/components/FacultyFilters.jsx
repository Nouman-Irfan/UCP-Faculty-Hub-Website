import React from 'react'
import { motion } from 'motion/react'

const FacultyFilters = ({ search, setSearch, faculty, setFaculty, department, setDepartment, faculties, departments }) => {

  const clearFilters = () => {
    setSearch('')
    setFaculty('All')
    setDepartment('All')
  }

  return (
    <section className="border-y border-slate-200 bg-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-8">

        <motion.div initial={{ opacity: 0, y: 20, scale: 0.99 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-blue-700">FIND FACULTY</p>
              <h2 className="mt-1 text-xl font-bold text-slate-900">Search & Filter</h2>
            </div>

            <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} onClick={clearFilters} className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
              Clear Filters
            </motion.button>
          </div>

          <div className="grid gap-4 md:grid-cols-4">

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-semibold text-slate-700">Search Faculty</label>
              <input type="text" placeholder="Search by name, designation or research interest..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Faculty</label>
              <select value={faculty} onChange={(e) => setFaculty(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100">
                {faculties.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">Department</label>
              <select value={department} onChange={(e) => setDepartment(e.target.value)} className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100">
                {departments.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default FacultyFilters