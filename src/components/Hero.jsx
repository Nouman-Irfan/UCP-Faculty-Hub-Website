import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <section className="relative h-125 overflow-hidden">

      <img
        src="/assets/hero/hero.jpeg"
        alt="University of Central Punjab Campus"
        className="absolute inset-0 h-full w-full object-cover"
      />


      <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 via-slate-950/45 to-transparent"></div>


      <div className="relative mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="w-full max-w-2xl text-white">


          <div className="mb-5 flex items-center gap-4">

            <div className="h-px w-10 bg-amber-400"></div>

            <p className="text-sm font-semibold tracking-[0.25em] text-slate-200">
              UNIVERSITY OF CENTRAL PUNJAB
            </p>

          </div>


          <h1 className="font-serif text-5xl font-bold leading-[1.05] md:text-6xl">

            Explore Today.

            <span className="block text-blue-400">
              Build Tomorrow.
            </span>

          </h1>


          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
            Connect with faculty members, departments and academic leadership
            — all in one organized place.
          </p>


          <div className="mt-8 flex gap-4">

            <Link
              to="/faculty"
              className="rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Faculty →
            </Link>


            <Link
              to="/departments"
              className="rounded-xl border border-white/70 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              View Departments
            </Link>

          </div>


          <div className="mt-10 flex gap-12 border-t border-white/15 pt-6">

            <div>
              <p className="text-lg font-semibold">
                Knowledge
              </p>

              <p className="mt-1 text-xs text-slate-300">
                For a Better Tomorrow
              </p>
            </div>


            <div>
              <p className="text-lg font-semibold">
                Community
              </p>

              <p className="mt-1 text-xs text-slate-300">
                People Who Inspire
              </p>
            </div>


            <div>
              <p className="text-lg font-semibold">
                Opportunity
              </p>

              <p className="mt-1 text-xs text-slate-300">
                Beyond the Classroom
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero