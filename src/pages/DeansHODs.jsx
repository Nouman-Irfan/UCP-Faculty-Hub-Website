import React, { useState } from 'react'
import facultyData from '../data/facultyData'
import FacultyCard from '../components/FacultyCard'
import FacultyModal from '../components/FacultyModal'

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

          <div className="max-w-2xl">

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

          </div>

        </div>

      </section>


      <section className="border-y border-slate-200 bg-slate-100">

        <div className="mx-auto max-w-6xl px-6 py-8">

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

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
                className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700"
              >
                Clear Filters
              </button>

            </div>


            <input
              type="text"
              placeholder="Search by name, faculty or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500"
            />


            <div className="mt-5 flex flex-wrap gap-3">

              <button
                onClick={() => setSelectedRole('All')}
                className={
                  selectedRole === 'All'
                    ? 'rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50'
                }
              >
                All
              </button>


              <button
                onClick={() => setSelectedRole('Dean')}
                className={
                  selectedRole === 'Dean'
                    ? 'rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50'
                }
              >
                Deans
              </button>


              <button
                onClick={() => setSelectedRole('Associate Dean')}
                className={
                  selectedRole === 'Associate Dean'
                    ? 'rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50'
                }
              >
                Associate Deans
              </button>


              <button
                onClick={() => setSelectedRole('HOD')}
                className={
                  selectedRole === 'HOD'
                    ? 'rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white'
                    : 'rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50'
                }
              >
                HODs
              </button>

            </div>

          </div>

        </div>

      </section>


      <section className="mx-auto max-w-6xl px-6 py-10">

        <div className="mb-7">

          <p className="text-sm font-semibold text-blue-700">
            LEADERSHIP DIRECTORY
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-900">
            Academic Leaders
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Showing {filteredLeaders.length} results
          </p>

        </div>


        {filteredLeaders.length > 0 ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredLeaders.map((person) => (
              <FacultyCard
                key={person.id}
                person={person}
                onViewProfile={setSelectedPerson}
              />
            ))}

          </div>

        ) : (

          <div className="rounded-xl border border-slate-200 bg-white py-16 text-center">

            <h3 className="text-xl font-semibold text-slate-900">
              No leaders found
            </h3>

            <p className="mt-2 text-slate-500">
              Try changing your search or role filter.
            </p>

          </div>

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