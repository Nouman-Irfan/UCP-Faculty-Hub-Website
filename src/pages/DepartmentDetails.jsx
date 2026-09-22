import React, { useState } from 'react'
import { Link, useParams } from 'react-router'
import facultyData from '../data/facultyData'
import FacultyCard from '../components/FacultyCard'
import FacultyModal from '../components/FacultyModal'
import { motion } from 'motion/react'

const DepartmentDetails = () => {
  const { departmentId } = useParams()

  const [selectedPerson, setSelectedPerson] = useState(null)

  const departmentPeople = facultyData.filter(
    (person) => person.departmentId === departmentId
  )

  if (departmentPeople.length === 0) {
    return (
      <main className="bg-slate-50">

        <section className="mx-auto max-w-6xl px-6 py-20 text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut'
            }}
          >

            <h1 className="text-3xl font-bold text-slate-900">
              Department Not Found
            </h1>

            <p className="mt-3 text-slate-500">
              The department you are looking for could not be found.
            </p>

            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6 inline-block"
            >
              <Link
                to="/departments"
                className="inline-block rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Back to Departments
              </Link>
            </motion.div>

          </motion.div>

        </section>

      </main>
    )
  }

  const department = departmentPeople[0]

  const researchCount = departmentPeople.filter(
    (person) =>
      person.researchInterests &&
      person.researchInterests.length > 0
  ).length

  const departmentImage =
    `/assets/department-badges/${departmentId}.png`

  return (
    <main className="bg-slate-50">

      <section className="mx-auto max-w-6xl px-6 py-10">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut'
          }}
        >

          <Link
            to="/departments"
            className="text-sm font-semibold text-blue-700 transition hover:text-blue-900"
          >
            ← Back to Departments
          </Link>

        </motion.div>


        <div className="mt-6 grid gap-5 md:grid-cols-3">

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.08,
              ease: 'easeOut'
            }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:col-span-2"
          >

            <p className="text-sm font-semibold text-blue-700">
              UCP DEPARTMENT
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-900">
              {department.department}
            </h1>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Explore the people, academic information and research interests
              connected with this department.
            </p>

            <div className="mt-7 border-t border-slate-200 pt-5">

              <p className="text-sm font-semibold text-slate-500">
                FACULTY
              </p>

              <p className="mt-1 font-medium text-slate-800">
                {department.faculty}
              </p>

            </div>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: 'easeOut'
            }}
            className="flex min-h-64 items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
          >

            <img
              src={departmentImage}
              alt={department.department}
              className="max-h-52 w-full object-contain"
            />

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="rounded-2xl border border-slate-200 bg-blue-50 p-6"
          >

            <p className="text-sm font-semibold text-blue-700">
              DIRECTORY
            </p>

            <p className="mt-3 text-4xl font-bold text-slate-900">
              {departmentPeople.length}
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Directory Records
            </p>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.27
            }}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >

            <p className="text-sm font-semibold text-slate-500">
              RESEARCH
            </p>

            <p className="mt-3 text-4xl font-bold text-blue-700">
              {researchCount}
            </p>

            <p className="mt-2 text-sm text-slate-600">
              Profiles with Research Interests
            </p>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.34
            }}
            className="rounded-2xl border border-amber-200 bg-amber-50 p-6"
          >

            <p className="text-sm font-semibold text-amber-700">
              EXPLORE
            </p>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
              Meet the Department
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Browse the profiles below to learn more about the people
              connected with this department.
            </p>

          </motion.div>

        </div>

      </section>


      <section className="bg-white">

        <div className="mx-auto max-w-6xl px-6 py-12">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              ease: 'easeOut'
            }}
            className="mb-8"
          >

            <p className="text-sm font-semibold text-blue-700">
              DEPARTMENT DIRECTORY
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              People in {department.department}
            </h2>

            <p className="mt-2 text-slate-500">
              Showing {departmentPeople.length} records
            </p>

          </motion.div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {departmentPeople.map((person) => (
              <FacultyCard
                key={person.id}
                person={person}
                onViewProfile={setSelectedPerson}
              />
            ))}

          </div>

        </div>

      </section>


      <FacultyModal
        person={selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />

    </main>
  )
}

export default DepartmentDetails