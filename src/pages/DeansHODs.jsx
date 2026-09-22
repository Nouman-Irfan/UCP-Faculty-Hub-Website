import React, { useState } from 'react'
import facultyData from '../data/facultyData'
import FacultyCard from '../components/FacultyCard'
import FacultyModal from '../components/FacultyModal'
import { motion } from 'motion/react'

const DeansHODs = () => {
  const [search, setSearch] = useState('')
  const [selectedRole, setSelectedRole] = useState('All')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const leaders = facultyData.filter((person) => {
    return (
      person.roleLabel === 'Dean' ||
      person.roleLabel === 'Associate Dean' ||
      person.roleLabel === 'HOD'
    )
  })

  const filteredLeaders = leaders.filter((person) => {
    const searchText = search.toLowerCase()

    const matchesSearch =
      person.name.toLowerCase().includes(searchText) ||
      person.designation.toLowerCase().includes(searchText) ||
      person.department.toLowerCase().includes(searchText) ||
      person.faculty.toLowerCase().includes(searchText)

    const matchesRole =
      selectedRole === 'All' ||
      person.roleLabel === selectedRole

    return matchesSearch && matchesRole
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
            className="max-w-2xl"
          >

            <p className="text-sm font-semibold text-blue-700">
              ACADEMIC LEADERSHIP
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Deans & Heads of Departments
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              Explore academic leadership across UCP, including Deans,
              Associate Deans and Heads of Departments.
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

            <div className="mb-5 flex items-center justify-between">

              <div>

                <p className="text-sm font-semibold text-blue-700">
                  FIND LEADERSHIP
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Search & Filter
                </h2>

              </div>


              <button
                onClick={() => {
                  setSearch('')
                  setSelectedRole('All')
                }}
                className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Clear Filters
              </button>

            </div>


            <input
              type="text"
              placeholder="Search by name, faculty or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />


            <div className="mt-5 flex flex-wrap gap-3">

              <button
                onClick={() => setSelectedRole('All')}
                className={
                  selectedRole === 'All'
                    ? 'rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50'
                }
              >
                All
              </button>


              <button
                onClick={() => setSelectedRole('Dean')}
                className={
                  selectedRole === 'Dean'
                    ? 'rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50'
                }
              >
                Deans
              </button>


              <button
                onClick={() => setSelectedRole('Associate Dean')}
                className={
                  selectedRole === 'Associate Dean'
                    ? 'rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50'
                }
              >
                Associate Deans
              </button>


              <button
                onClick={() => setSelectedRole('HOD')}
                className={
                  selectedRole === 'HOD'
                    ? 'rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50'
                }
              >
                HODs
              </button>

            </div>

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

          <p className="text-sm font-semibold text-blue-700">
            LEADERSHIP DIRECTORY
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Academic Leaders
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Showing {filteredLeaders.length} results
          </p>

        </motion.div>


        {filteredLeaders.length > 0 ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredLeaders.map((person, index) => (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.08,
                  ease: 'easeOut'
                }}
              >
                <FacultyCard
                  person={person}
                  onViewProfile={setSelectedPerson}
                />
              </motion.div>
            ))}

          </div>

        ) : (

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-slate-200 bg-white py-16 text-center"
          >

            <h3 className="text-xl font-semibold text-slate-900">
              No leaders found
            </h3>

            <p className="mt-2 text-slate-500">
              Try changing your search or role filter.
            </p>

          </motion.div>

        )}

      </section>


      <FacultyModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />

    </main>
  )
}

export default DeansHODs