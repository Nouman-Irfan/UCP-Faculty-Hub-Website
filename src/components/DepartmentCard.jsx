import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'

const DepartmentCard = ({ department }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} whileHover={{ y: -5 }} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-lg">

      <div className="flex items-center gap-5 border-b border-slate-100 bg-slate-50 p-5">
        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-2 shadow-sm">
          <img src={department.image} alt={department.name} className="h-full w-full object-contain transition duration-300 group-hover:scale-105" />
        </div>

        <div>
          <p className="text-xs font-bold tracking-widest text-blue-700">DEPARTMENT</p>
          <h3 className="mt-2 text-xl font-bold leading-6 text-slate-900">{department.name}</h3>
        </div>
      </div>

      <div className="p-5">
        <p className="min-h-12 text-sm leading-6 text-slate-500">{department.faculty}</p>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-xs font-medium text-slate-400">Academic Department</span>

          <Link to={`/departments/${department.id}`} className="flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:gap-3">
            Explore <span>→</span>
          </Link>
        </div>
      </div>

    </motion.div>
  )
}

export default DepartmentCard