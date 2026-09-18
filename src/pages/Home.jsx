import React from 'react'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import FacultyBadges from '../components/FacultyBadges'
import PopularDepartments from '../components/PopularDepartments'

const Home = () => {
  return (
    <main className="bg-white text-slate-900">

      <Hero />
      <StatsSection />

      <section className="mx-auto max-w-6xl px-6 py-14">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold text-blue-700">
            WELCOME TO UCP FACULTY HUB
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Explore UCP's Academic Community
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Find faculty members, explore departments and discover academic
            leadership without searching through multiple university pages.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-amber-400"></div>

        </div>

      </section>


      <section className="bg-slate-50">

        <div className="mx-auto max-w-6xl px-6 py-12">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                F
              </div>

              <h3 className="text-lg font-semibold">
                Faculty Directory
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Browse faculty profiles and view available academic
                information.
              </p>

              <a
                href="/faculty"
                className="mt-4 inline-block text-sm font-semibold text-blue-700"
              >
                Explore Faculty →
              </a>

            </div>


            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                D
              </div>

              <h3 className="text-lg font-semibold">
                Departments
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore different academic departments across UCP.
              </p>

              <a
                href="/departments"
                className="mt-4 inline-block text-sm font-semibold text-blue-700"
              >
                View Departments →
              </a>

            </div>


            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700">
                H
              </div>

              <h3 className="text-lg font-semibold">
                Deans & HODs
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Discover the people leading UCP faculties and departments.
              </p>

              <a
                href="/deans-hods"
                className="mt-4 inline-block text-sm font-semibold text-blue-700"
              >
                View Leadership →
              </a>

            </div>


            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-md">

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">
                Q
              </div>

              <h3 className="text-lg font-semibold">
                QuickFind
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Quickly find faculty members and academic information.
              </p>

              <p className="mt-4 text-sm font-semibold text-blue-700">
                Search Quickly →
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-slate-50">

        <div className="mx-auto max-w-6xl px-6 py-14">

          <div className="mb-9 text-center">

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

          </div>

          <FacultyBadges />

          <div className="mt-8 text-center">

            <a href="/departments" className="inline-block text-sm font-semibold text-blue-700 hover:text-blue-900">
              Explore All Departments →
            </a>

          </div>

        </div>

      </section>

      <PopularDepartments />

    </main>
  )
}

export default Home