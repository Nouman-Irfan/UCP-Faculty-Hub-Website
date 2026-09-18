import React from 'react'

const PopularDepartments = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">

      <div className="mb-8 flex items-end justify-between">

        <div>
          <p className="text-sm font-semibold text-blue-700">
            DISCOVER
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Popular Departments
          </h2>

          <p className="mt-2 text-slate-600">
            Start exploring some of UCP's academic departments.
          </p>
        </div>


        <a
          href="/departments"
          className="hidden text-sm font-semibold text-blue-700 hover:text-blue-900 md:block"
        >
          View All Departments →
        </a>

      </div>


      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-blue-100 text-lg font-bold text-blue-700">
            CS
          </div>

          <h3 className="mt-5 text-lg font-semibold">
            Computer Science
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Explore Computer Science faculty members and available academic
            information.
          </p>

          <a
            href="/departments"
            className="mt-4 inline-block text-sm font-semibold text-blue-700"
          >
            Explore Department →
          </a>

        </div>


        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-indigo-100 text-lg font-bold text-indigo-700">
            SE
          </div>

          <h3 className="mt-5 text-lg font-semibold">
            Software Engineering
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Discover Software Engineering faculty and department
            information.
          </p>

          <a
            href="/departments"
            className="mt-4 inline-block text-sm font-semibold text-blue-700"
          >
            Explore Department →
          </a>

        </div>


        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-amber-100 text-lg font-bold text-amber-700">
            A&F
          </div>

          <h3 className="mt-5 text-lg font-semibold">
            Accounting & Finance
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Explore Accounting and Finance faculty and department
            information.
          </p>

          <a
            href="/departments"
            className="mt-4 inline-block text-sm font-semibold text-blue-700"
          >
            Explore Department →
          </a>

        </div>

      </div>


      <div className="mt-8 text-center md:hidden">

        <a
          href="/departments"
          className="text-sm font-semibold text-blue-700"
        >
          View All Departments →
        </a>

      </div>

    </section>
  )
}

export default PopularDepartments