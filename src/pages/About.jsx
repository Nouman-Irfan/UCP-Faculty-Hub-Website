import React from 'react'
import { motion } from 'motion/react'

const About = () => {
  return (
    <main className="bg-white text-slate-900">

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid items-center gap-12 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-sm font-semibold tracking-wide text-blue-700">
              ABOUT THE PROJECT
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-3 text-4xl font-bold leading-tight"
            >
              UCP Faculty Hub
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-5 text-lg leading-8 text-slate-600"
            >
              UCP Faculty Hub is a student-developed platform created to make
              faculty information easier to explore and understand.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-4 leading-7 text-slate-600"
            >
              Instead of searching through different university pages, students
              can browse faculty members, departments and academic leadership
              from one organized place.
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-7 h-1 bg-amber-400"
            />

          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.015 }}
          >

            <img
              src="/assets/hero/about.png"
              alt="UCP Academic Community"
              className="h-75 w-full rounded-2xl object-cover"
            />

          </motion.div>

        </div>

      </section>


      <section className="border-y border-slate-200 bg-slate-50">

        <div className="mx-auto max-w-6xl px-6 py-14">

          <div className="grid gap-10 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >

              <p className="text-sm font-semibold text-blue-700">
                OUR PURPOSE
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Why We Built It
              </h2>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >

              <p className="leading-7 text-slate-600">
                Faculty information can sometimes be spread across multiple
                university pages. This project brings useful academic
                information together in a simple and organized format.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                The main goal is to help students quickly find the people,
                departments and leadership connected with their academic life.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      <section className="mx-auto max-w-6xl px-6 py-14">

        <div className="grid gap-12 md:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >

            <p className="text-sm font-semibold text-blue-700">
              WHAT IT OFFERS
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Simple Academic Discovery
            </h2>


            <div className="mt-8 space-y-6">

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                whileHover={{ x: 5 }}
                className="border-l-4 border-blue-600 pl-5"
              >

                <h3 className="font-semibold">
                  Faculty Directory
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Browse faculty profiles and available academic information.
                </p>

              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 }}
                whileHover={{ x: 5 }}
                className="border-l-4 border-blue-600 pl-5"
              >

                <h3 className="font-semibold">
                  Departments
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Explore departments and the people associated with them.
                </p>

              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.3 }}
                whileHover={{ x: 5 }}
                className="border-l-4 border-blue-600 pl-5"
              >

                <h3 className="font-semibold">
                  Academic Leadership
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Find Deans, HODs and other academic leadership information.
                </p>

              </motion.div>

            </div>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >

            <p className="text-sm font-semibold text-blue-700">
              DATA INFORMATION
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Where the Information Comes From
            </h2>

            <p className="mt-6 leading-7 text-slate-600">
              Faculty information used on this website is based on publicly
              available University of Central Punjab information.
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              If certain information is not publicly available, it is not
              intentionally guessed or invented.
            </p>

          </motion.div>

        </div>

      </section>


      <section className="border-t border-slate-200 bg-slate-50">

        <div className="mx-auto max-w-6xl px-6 py-14">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            <p className="text-sm font-semibold text-blue-700">
              PROJECT TEAM
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Built By
            </h2>

          </motion.div>


          <div className="mt-8 grid max-w-3xl gap-8 sm:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ x: 5 }}
              className="border-l-4 border-blue-600 pl-5"
            >

              <p className="text-lg font-semibold">
                Aqsa Ismail
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Developer
              </p>

            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ x: 5 }}
              className="border-l-4 border-blue-600 pl-5"
            >

              <p className="text-lg font-semibold">
                Muhammad Nouman
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Developer
              </p>

            </motion.div>

          </div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 border-t border-slate-200 pt-6"
          >

            <p className="text-sm text-slate-500">
              Submitted To
            </p>

            <p className="mt-1 font-semibold">
              Prof. Abdul Rehman Hashmi
            </p>

          </motion.div>

        </div>

      </section>

    </main>
  )
}

export default About