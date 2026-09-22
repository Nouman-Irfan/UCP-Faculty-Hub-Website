import React from 'react'
import ContactForm from '../components/ContactForm'
import { motion } from 'motion/react'

const HelpFAQ = () => {
  return (
    <main className="bg-white">

      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3"
          >

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-amber-400"
            />

            <p className="text-sm font-semibold tracking-widest text-blue-700">
              HELP CENTER
            </p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-px bg-amber-400"
            />

          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl"
          >
            Frequently Asked Questions
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600"
          >
            Find quick answers to common questions about the UCP Faculty Hub
            and how to use the platform.
          </motion.p>

        </div>
      </section>


      <section className="mx-auto max-w-4xl px-6 py-16">

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >

          <p className="text-sm font-semibold text-blue-700">
            COMMON QUESTIONS
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            How can we help?
          </h2>

        </motion.div>


        <div className="space-y-4">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -3 }}
          >

            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">

                <div className="flex items-center gap-5">

                  <span className="text-sm font-bold text-blue-700">
                    01
                  </span>

                  <h3 className="text-lg font-semibold text-slate-900">
                    What is UCP Faculty Hub?
                  </h3>

                </div>

                <span className="text-2xl font-light text-blue-700 transition duration-200 group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="ml-10 mt-5 border-t border-slate-100 pt-5">

                <p className="leading-7 text-slate-600">
                  UCP Faculty Hub is a student-developed academic directory
                  designed to make faculty, department and academic leadership
                  information easier to explore from one organized platform.
                </p>

              </div>

            </details>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            whileHover={{ y: -3 }}
          >

            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">

                <div className="flex items-center gap-5">

                  <span className="text-sm font-bold text-blue-700">
                    02
                  </span>

                  <h3 className="text-lg font-semibold text-slate-900">
                    How can I find a faculty member?
                  </h3>

                </div>

                <span className="text-2xl font-light text-blue-700 transition duration-200 group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="ml-10 mt-5 border-t border-slate-100 pt-5">

                <p className="leading-7 text-slate-600">
                  Open the Faculty page and use the search bar to search by
                  name, designation, department or research interest. You can
                  also use the available filters to narrow down the results.
                </p>

              </div>

            </details>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            whileHover={{ y: -3 }}
          >

            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">

                <div className="flex items-center gap-5">

                  <span className="text-sm font-bold text-blue-700">
                    03
                  </span>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Can I browse faculty by department?
                  </h3>

                </div>

                <span className="text-2xl font-light text-blue-700 transition duration-200 group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="ml-10 mt-5 border-t border-slate-100 pt-5">

                <p className="leading-7 text-slate-600">
                  Yes. Visit the Departments page to explore different academic
                  departments. Opening a department will show the people
                  associated with that department.
                </p>

              </div>

            </details>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            whileHover={{ y: -3 }}
          >

            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">

                <div className="flex items-center gap-5">

                  <span className="text-sm font-bold text-blue-700">
                    04
                  </span>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Where does the information come from?
                  </h3>

                </div>

                <span className="text-2xl font-light text-blue-700 transition duration-200 group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="ml-10 mt-5 border-t border-slate-100 pt-5">

                <p className="leading-7 text-slate-600">
                  The faculty information used on this website is based on
                  publicly available information related to the University of
                  Central Punjab.
                </p>

              </div>

            </details>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            whileHover={{ y: -3 }}
          >

            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">

                <div className="flex items-center gap-5">

                  <span className="text-sm font-bold text-blue-700">
                    05
                  </span>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Is this an official UCP website?
                  </h3>

                </div>

                <span className="text-2xl font-light text-blue-700 transition duration-200 group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="ml-10 mt-5 border-t border-slate-100 pt-5">

                <p className="leading-7 text-slate-600">
                  No. UCP Faculty Hub is a student academic project and is not
                  the official website of the University of Central Punjab.
                </p>

              </div>

            </details>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            whileHover={{ y: -3 }}
          >

            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">

              <summary className="flex cursor-pointer list-none items-center justify-between gap-5">

                <div className="flex items-center gap-5">

                  <span className="text-sm font-bold text-blue-700">
                    06
                  </span>

                  <h3 className="text-lg font-semibold text-slate-900">
                    Why might some profile information be missing?
                  </h3>

                </div>

                <span className="text-2xl font-light text-blue-700 transition duration-200 group-open:rotate-45">
                  +
                </span>

              </summary>

              <div className="ml-10 mt-5 border-t border-slate-100 pt-5">

                <p className="leading-7 text-slate-600">
                  Some information may not be publicly available or currently
                  listed. Because of this, the amount of information shown can
                  vary between different faculty profiles.
                </p>

              </div>

            </details>

          </motion.div>

        </div>

      </section>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <ContactForm />
      </motion.div>

    </main>
  )
}

export default HelpFAQ