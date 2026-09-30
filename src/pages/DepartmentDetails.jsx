import React, { useState } from 'react'
import { Link, useParams } from 'react-router'
import { motion } from 'motion/react'
import facultyData from '../data/facultyData'
import FacultyCard from '../components/FacultyCard'
import FacultyModal from '../components/FacultyModal'
import DepartmentFacultySearch from '../components/DepartmentFacultySearch'
import DepartmentOverview from '../components/DepartmentOverview'

const DepartmentDetails = () => {
  const { departmentId } = useParams()
  const [selectedPerson, setSelectedPerson] = useState(null)
  const [search, setSearch] = useState('')

  const departmentPeople = facultyData.filter((person) => person.departmentId === departmentId)
  const filteredPeople = departmentPeople.filter((person) => {
    const text = search.toLowerCase()
    return person.name.toLowerCase().includes(text) ||
      person.designation.toLowerCase().includes(text) ||
      (person.email || '').toLowerCase().includes(text) ||
      (person.researchInterests || []).some((interest) => interest.toLowerCase().includes(text))
  })

  if (!departmentPeople.length) {
    return (
      <main className="bg-slate-50">
        <section className="mx-auto max-w-6xl px-6 py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl font-bold text-slate-900">Department Not Found</h1>
            <p className="mt-3 text-slate-500">The department you are looking for could not be found.</p>
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="mt-6 inline-block">
              <Link to="/departments" className="inline-block rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800">Back to Departments</Link>
            </motion.div>
          </motion.div>
        </section>
      </main>
    )
  }

  const department = departmentPeople[0]
  const researchCount = departmentPeople.filter((person) => person.researchInterests?.length > 0).length

  return (
    <main className="bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link to="/departments" className="text-sm font-semibold text-blue-700 hover:text-blue-900">← Back to Departments</Link>
        </motion.div>

        <DepartmentOverview department={department} departmentId={departmentId} totalPeople={departmentPeople.length} researchCount={researchCount} />
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8">
            <p className="text-sm font-semibold text-blue-700">DEPARTMENT DIRECTORY</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">People in {department.department}</h2>
            <p className="mt-2 text-slate-500">Showing {filteredPeople.length} of {departmentPeople.length} records</p>
          </motion.div>

          <DepartmentFacultySearch search={search} setSearch={setSearch} />

          {filteredPeople.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPeople.map((person) => <FacultyCard key={person.id} person={person} onViewProfile={setSelectedPerson} />)}
            </div>
          ) : (
            <div className="rounded-xl border border-slate-200 bg-slate-50 py-14 text-center">
              <h3 className="text-lg font-semibold text-slate-900">No people found</h3>
              <p className="mt-2 text-sm text-slate-500">Try another search.</p>
            </div>
          )}
        </div>
      </section>

      <FacultyModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </main>
  )
}

export default DepartmentDetails