import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import FacultyBadges from './FacultyBadges'

const AcademicFaculties = () => {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-14">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="mb-9 text-center">

          <p className="text-sm font-semibold text-blue-700">
            ACADEMIC FACULTIES
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            Explore UCP Faculties
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Discover the major academic faculties and the departments
            connected with them.
          </p>

        </motion.div>

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}>
          <FacultyBadges />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="mt-8 text-center">

          <motion.div whileHover={{ x: 4 }} className="inline-block">
            <Link to="/departments" className="text-sm font-semibold text-blue-700 hover:text-blue-900">
              Explore All Departments →
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default AcademicFaculties