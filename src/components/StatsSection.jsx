import React from 'react'

const StatsSection = () => {
  return (
    <section className="bg-white py-16">

      <div className="mx-auto max-w-6xl px-6">

        <div className="grid items-center gap-10 lg:grid-cols-5">

          <div className="lg:col-span-2">

            <div className="flex items-center gap-3">

              <div className="h-px w-10 bg-amber-400"></div>

              <p className="text-sm font-semibold tracking-wide text-blue-700">
                UCP FACULTY HUB
              </p>

            </div>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
              By the Numbers
            </h2>

            <p className="mt-4 max-w-md leading-7 text-slate-600">
              A quick overview of the academic information organized
              through the UCP Faculty Hub.
            </p>

          </div>


          <div className="lg:col-span-3">

            <div className="grid grid-cols-1 border-y border-slate-200 sm:grid-cols-3 sm:border-y-0">

              <div className="py-7 sm:border-r sm:border-slate-200 sm:px-7">

                <p className="text-5xl font-bold text-blue-700">
                  569
                </p>

                <p className="mt-3 font-semibold text-slate-900">
                  Directory Records
                </p>

                <div className="mt-4 h-1 w-10 rounded-full bg-blue-200"></div>

              </div>


              <div className="border-t border-slate-200 py-7 sm:border-r sm:border-t-0 sm:border-slate-200 sm:px-7">

                <p className="text-5xl font-bold text-slate-900">
                  41
                </p>

                <p className="mt-3 font-semibold text-slate-900">
                  Departments
                </p>

                <div className="mt-4 h-1 w-10 rounded-full bg-amber-400"></div>

              </div>


              <div className="border-t border-slate-200 py-7 sm:border-t-0 sm:px-7">

                <p className="text-5xl font-bold text-slate-900">
                  9
                </p>

                <p className="mt-3 font-semibold text-slate-900">
                  Academic Faculties
                </p>

                <div className="mt-4 h-1 w-10 rounded-full bg-blue-200"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default StatsSection