import React from 'react'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import FacultyBadges from '../components/FacultyBadges'
import PopularDepartments from '../components/PopularDepartments'
import { motion } from 'motion/react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <main className="bg-white text-slate-900">

      <Hero />
      <StatsSection />


      <section className="mx-auto max-w-6xl px-6 py-14">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
          className="mx-auto max-w-3xl text-center"
        >

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

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 h-1 rounded-full bg-amber-400"
          />

        </motion.div>

      </section>


      <section className="bg-slate-50">

        <div className="mx-auto max-w-6xl px-6 py-12">

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">


            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -5 }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >

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

              <Link
                to="/faculty"
                className="mt-4 inline-block text-sm font-semibold text-blue-700"
              >
                Explore Faculty →
              </Link>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.08 }}
              whileHover={{ y: -5 }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                D
              </div>

              <h3 className="text-lg font-semibold">
                Departments
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore different academic departments across UCP.
              </p>

              <Link
                to="/departments"
                className="mt-4 inline-block text-sm font-semibold text-blue-700"
              >
                View Departments →
              </Link>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              whileHover={{ y: -5 }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-sky-100 font-bold text-sky-700">
                H
              </div>

              <h3 className="text-lg font-semibold">
                Deans & HODs
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Discover the people leading UCP faculties and departments.
              </p>

              <Link
                to="/deans-hods"
                className="mt-4 inline-block text-sm font-semibold text-blue-700"
              >
                View Leadership →
              </Link>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              whileHover={{ y: -5 }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >

              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">
                ?
              </div>

              <h3 className="text-lg font-semibold">
                Help & FAQ
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Find answers to common questions quickly.
              </p>

              <Link
                to="/help&faq"
                className="mt-4 inline-block text-sm font-semibold text-blue-700"
              >
                View FAQs →
              </Link>

            </motion.div>

          </div>

        </div>

      </section>


      <section className="bg-slate-50">

        <div className="mx-auto max-w-6xl px-6 py-14">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: 'easeOut'
            }}
            className="mb-9 text-center"
          >

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

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: 'easeOut'
            }}
          >
            <FacultyBadges />
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >

            <motion.div
              whileHover={{ x: 4 }}
              className="inline-block"
            >
              <Link
                to="/departments"
                className="text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                Explore All Departments →
              </Link>
            </motion.div>

          </motion.div>

        </div>

      </section>


      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.6,
          ease: 'easeOut'
        }}
      >
        <PopularDepartments />
      </motion.div>

    </main>
  )
}

export default Home