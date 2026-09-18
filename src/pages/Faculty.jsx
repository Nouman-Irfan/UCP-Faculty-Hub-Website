import React, { useState } from 'react'
import facultyData from '../data/facultyData'
import FacultyCard from '../components/FacultyCard'
import FacultyModal from '../components/FacultyModal'

const Faculty = () => {
  const [search, setSearch] = useState('')
  const [faculty, setFaculty] = useState('All')
  const [department, setDepartment] = useState('All')
  const [selectedPerson, setSelectedPerson] = useState(null)

  const faculties = [
    'All',
    ...new Set(facultyData.map((person) => person.faculty))
  ]

  const departments = [
    'All',
    ...new Set(facultyData.map((person) => person.department))
  ]

  const filteredFaculty = facultyData.filter((person) => {
    const searchText = search.toLowerCase()

    const matchesSearch =
      person.name.toLowerCase().includes(searchText) ||
      person.designation.toLowerCase().includes(searchText) ||
      person.department.toLowerCase().includes(searchText) ||
      (person.researchInterests || []).some((interest) =>
        interest.toLowerCase().includes(searchText)
      )

    const matchesFaculty =
      faculty === 'All' || person.faculty === faculty

    const matchesDepartment =
      department === 'All' || person.department === department

    return (
      matchesSearch &&
      matchesFaculty &&
      matchesDepartment
    )
  })

  return (
    <main className="bg-slate-50">

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold text-blue-700">
              UCP FACULTY DIRECTORY
            </p>

            <h1 className="mt-2 text-4xl font-bold text-slate-900">
              Meet Our Faculty
            </h1>

            <p className="mt-4 leading-7 text-slate-600">
              Browse faculty members across UCP and explore their departments,
              academic roles and available profile information.
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
                  FIND FACULTY
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Search & Filter
                </h2>

              </div>


              <button
                onClick={() => {
                  setSearch('')
                  setFaculty('All')
                  setDepartment('All')
                }}
                className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                Clear Filters
              </button>

            </div>


            <div className="grid gap-4 md:grid-cols-4">

              <div className="md:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Search Faculty
                </label>

                <input
                  type="text"
                  placeholder="Search by name, designation or research interest..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Faculty
                </label>

                <select
                  value={faculty}
                  onChange={(e) => setFaculty(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                >

                  {faculties.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}

                </select>

              </div>


              <div>

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Department
                </label>

                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                >

                  {departments.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}

                </select>

              </div>

            </div>

          </div>

        </div>

      </section>


      <section className="mx-auto max-w-6xl px-6 py-10">

        <div className="mb-7">

          <h2 className="text-2xl font-bold text-slate-900">
            Faculty Directory
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Showing {filteredFaculty.length} results
          </p>

        </div>


        {filteredFaculty.length > 0 ? (

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredFaculty.map((person) => (
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
              No faculty found
            </h3>

            <p className="mt-2 text-slate-500">
              Try changing your search or filters.
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

export default Faculty