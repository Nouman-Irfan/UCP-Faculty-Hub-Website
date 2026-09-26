import React, { useState } from 'react'
import facultyData from '../data/facultyData'
import FacultyCard from '../components/FacultyCard'
import FacultyModal from '../components/FacultyModal'
import FacultyFilters from '../components/FacultyFilters'
import { motion } from 'motion/react'

const Faculty = () => {
  const [search, setSearch] = useState('')
  const [faculty, setFaculty] = useState('All')
  const [department, setDepartment] = useState('All')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const faculties = ['All', ...new Set(facultyData.map((person) => person.faculty))]
  const departments = ['All', ...new Set(facultyData.map((person) => person.department))]

  const filteredFaculty = facultyData.filter((person) => {
    const searchText = search.toLowerCase()

    const matchesSearch =
      person.name.toLowerCase().includes(searchText) ||
      person.designation.toLowerCase().includes(searchText) ||
      person.department.toLowerCase().includes(searchText) ||
      (person.researchInterests || []).some((interest) => interest.toLowerCase().includes(searchText))

    const matchesFaculty = faculty === 'All' || person.faculty === faculty
    const matchesDepartment = department === 'All' || person.department === department

    return matchesSearch && matchesFaculty && matchesDepartment
  })

  return (
    <main className="bg-slate-50">

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-700">UCP FACULTY DIRECTORY</p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">Meet Our Faculty</h1>
            <p className="mt-4 leading-7 text-slate-600">Browse faculty members across UCP and explore their departments, academic roles and available profile information.</p>
          </motion.div>
        </div>
      </section>

      <FacultyFilters
        search={search}
        setSearch={setSearch}
        faculty={faculty}
        setFaculty={setFaculty}
        department={department}
        setDepartment={setDepartment}
        faculties={faculties}
        departments={departments}
      />

      <section className="mx-auto max-w-6xl px-6 py-10">

        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-7">
          <h2 className="text-2xl font-bold text-slate-900">Faculty Directory</h2>
          <p className="mt-1 text-sm text-slate-500">Showing {filteredFaculty.length} results</p>
        </motion.div>

        {filteredFaculty.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredFaculty.map((person) => (
              <motion.div key={person.id} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, ease: 'easeOut' }} whileHover={{ y: -4 }}>
                <FacultyCard person={person} onViewProfile={setSelectedPerson} />
              </motion.div>
            ))}

          </div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-xl border border-slate-200 bg-white py-16 text-center">
            <h3 className="text-xl font-semibold text-slate-900">No faculty found</h3>
            <p className="mt-2 text-slate-500">Try changing your search or filters.</p>
          </motion.div>
        )}

      </section>

      <FacultyModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />

    </main>
  )
}

export default Faculty