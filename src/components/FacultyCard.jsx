import React from 'react'
import { motion } from 'motion/react'

const FacultyCard = ({ person, onViewProfile }) => {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:border-blue-200 hover:shadow-md">

      <div className="flex h-64 items-center justify-center overflow-hidden bg-slate-100 p-3">
        <motion.img
          src={person.image || "/assets/placeholders/faculty-placeholder.png"}
          alt={person.name}
          className="h-full w-full object-contain"
          whileHover={{ scale: 1.035 }}
          transition={{ duration: 0.3 }}
          onError={(e) => {
            e.currentTarget.src = "/assets/placeholders/faculty-placeholder.png"
          }}
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900">{person.name}</h3>
        <p className="mt-1 text-sm font-medium text-blue-700">{person.designation}</p>
        <p className="mt-3 text-sm text-slate-600">{person.department}</p>
        <p className="mt-1 text-xs leading-5 text-slate-500">{person.faculty}</p>

        <motion.button whileHover={{ scale: 1.015 }} whileTap={{ scale: 0.97 }} onClick={() => onViewProfile(person)} className="mt-5 w-full rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800">
          View Profile
        </motion.button>
      </div>

    </motion.div>
  )
}

export default FacultyCard