import React, { useState } from 'react'
import facultyData from '../data/facultyData'
import DepartmentCard from '../components/DepartmentCard'
import { motion } from 'motion/react'

const Departments = () => {
  const [search, setSearch] = useState('')

  const departments = []

  facultyData.forEach((person) => {

    const departmentExists = departments.some(
      (department) => department.id === person.departmentId
    )

    if (!departmentExists && person.departmentId) {

      departments.push({
        id: person.departmentId,
        name: person.department,
        faculty: person.faculty,
        image: `/assets/department-badges/${person.departmentId}.png`
      })

    }

  })

  const filteredDepartments = departments.filter((department) => {

    const searchText = search.toLowerCase()

    return (
      department.name.toLowerCase().includes(searchText) ||
      department.faculty.toLowerCase().includes(searchText)
    )

  })

  return (
    <main className="bg-slate-50">

      <section className="bg-white">

        <div className="mx-auto max-w-6xl px-6 py-12">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut'
            }}
          >

            <p className="text-sm font-semibold text-blue-700">
              UCP DEPARTMENTS
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Explore Departments
            </h1>

            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Browse academic departments across UCP and explore the faculty
              connected with each department.
            </p>

          </motion.div>

        </div>

      </section>


      <section className="border-y border-slate-200 bg-slate-100">

        <div className="mx-auto max-w-6xl px-6 py-8">

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.55,
              delay: 0.12,
              ease: 'easeOut'
            }}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >

            <div className="mb-4 flex items-center justify-between">

              <div>

                <p className="text-sm font-semibold text-blue-700">
                  FIND DEPARTMENT
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Search Departments
                </h2>

              </div>


              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSearch('')}
                className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
              >
                Clear Search
              </motion.button>

            </div>


            <input
              type="text"
              placeholder="Search department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />

          </motion.div>

        </div>

      </section>


      <section className="mx-auto max-w-6xl px-6 py-10">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: 'easeOut'
          }}
          className="mb-7"
        >

          <h2 className="text-2xl font-bold text-slate-900">
            Department Directory
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Showing {filteredDepartments.length} departments
          </p>

        </motion.div>


        {filteredDepartments.length > 0 ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredDepartments.map((department) => (
              <DepartmentCard
                key={department.id}
                department={department}
              />
            ))}

          </div>

        ) : (

          <div className="rounded-xl border border-slate-200 bg-white py-16 text-center">

            <h3 className="text-xl font-semibold text-slate-900">
              No departments found
            </h3>

            <p className="mt-2 text-slate-500">
              Try another department name.
            </p>

          </div>

        )}

      </section>

    </main>
  )
}

export default Departments