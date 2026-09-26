import React, { useState } from 'react'
import facultyData from '../data/facultyData'
import FacultyCard from '../components/FacultyCard'
import FacultyModal from '../components/FacultyModal'
import { motion } from 'motion/react'

const DeansHODs = () => {
  const [search, setSearch] = useState('')
  const [selectedRole, setSelectedRole] = useState('All')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const roles = ['All', 'Dean', 'Associate Dean', 'HOD']

  const filteredLeaders = facultyData
    .filter((person) => ['Dean', 'Associate Dean', 'HOD'].includes(person.roleLabel))
    .filter((person) => {
      const text = search.toLowerCase()
      const matchesSearch = [person.name, person.designation, person.department, person.faculty]
        .some((item) => item.toLowerCase().includes(text))

      return matchesSearch && (selectedRole === 'All' || person.roleLabel === selectedRole)
    })

  return (
    <main className="bg-slate-50">

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-700">ACADEMIC LEADERSHIP</p>
            <h1 className="mt-2 text-4xl font-bold text-slate-900">Deans & Heads of Departments</h1>
            <p className="mt-4 leading-7 text-slate-600">Explore academic leadership across UCP, including Deans, Associate Deans and Heads of Departments.</p>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.12 }} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-blue-700">FIND LEADERSHIP</p>
                <h2 className="mt-1 text-xl font-bold text-slate-900">Search & Filter</h2>
              </div>
              <button onClick={() => { setSearch(''); setSelectedRole('All') }} className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700">
                Clear Filters
              </button>
            </div>

            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name, faculty or department..." className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100" />

            <div className="mt-5 flex flex-wrap gap-3">
              {roles.map((role) => (
                <button key={role} onClick={() => setSelectedRole(role)} className={selectedRole === role ? 'rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white' : 'rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50'}>
                  {role === 'Dean' ? 'Deans' : role === 'Associate Dean' ? 'Associate Deans' : role === 'HOD' ? 'HODs' : 'All'}
                </button>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="mb-7">
          <p className="text-sm font-semibold text-blue-700">LEADERSHIP DIRECTORY</p>
          <h2 className="mt-1 text-2xl font-bold text-slate-900">Academic Leaders</h2>
          <p className="mt-2 text-sm text-slate-500">Showing {filteredLeaders.length} results</p>
        </motion.div>

        {filteredLeaders.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredLeaders.map((person, index) => (
              <motion.div key={person.id} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}>
                <FacultyCard person={person} onViewProfile={setSelectedPerson} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-slate-200 bg-white py-16 text-center">
            <h3 className="text-xl font-semibold text-slate-900">No leaders found</h3>
            <p className="mt-2 text-slate-500">Try changing your search or role filter.</p>
          </div>
        )}
      </section>

      <FacultyModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </main>
  )
}

export default DeansHODs