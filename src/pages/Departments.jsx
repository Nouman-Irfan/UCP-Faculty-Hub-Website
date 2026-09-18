import React, { useState } from 'react'
import facultyData from '../data/facultyData'
import DepartmentCard from '../components/DepartmentCard'

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

        </div>

      </section>


      <section className="border-y border-slate-200 bg-slate-100">

        <div className="mx-auto max-w-6xl px-6 py-8">

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-4 flex items-center justify-between">

              <div>

                <p className="text-sm font-semibold text-blue-700">
                  FIND DEPARTMENT
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Search Departments
                </h2>

              </div>


              <button onClick={() => setSearch('')} className="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700">
                Clear Search
              </button>

            </div>

            <input
              type="text"
              placeholder="Search department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none focus:border-blue-500"
            />

          </div>

        </div>

      </section>


      <section className="mx-auto max-w-6xl px-6 py-10">

        <div className="mb-7">

          <h2 className="text-2xl font-bold text-slate-900">
            Department Directory
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Showing {filteredDepartments.length} departments
          </p>

        </div>


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