import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          <div>

            <img
              src="/assets/branding/ucp-faculty-hub-logo.png"
              alt="UCP Faculty Hub Logo"
              className="h-16 w-auto object-contain"
            />

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              A student-focused platform for exploring
              UCP faculty members, departments,
              and academic leadership across the university.
              Discover, connect, and learn with ease.
            </p>

          </div>


          <div>

            <h3 className="mb-4 font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/"
                  className="transition hover:text-blue-400"
                >
                  » Home
                </Link>
              </li>

              <li>
                <Link
                  to="/faculty"
                  className="transition hover:text-blue-400"
                >
                  » Faculty
                </Link>
              </li>

              <li>
                <Link
                  to="/departments"
                  className="transition hover:text-blue-400"
                >
                  » Departments
                </Link>
              </li>

              <li>
                <Link
                  to="/deans-hods"
                  className="transition hover:text-blue-400"
                >
                  » Deans & HODs
                </Link>
              </li>

              <li>
                <Link
                  to="/help&faq"
                  className="transition hover:text-blue-400"
                >
                  »  FAQ
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="transition hover:text-blue-400"
                >
                  » About
                </Link>
              </li>

            </ul>

          </div>


          <div>

            <h3 className="mb-4 font-semibold text-white">
              Project
            </h3>

            <div className="space-y-4 text-sm text-slate-400">

              <div>
                <p className="text-slate-200">
                  Developed By
                </p>

                <p className="mt-1">
                  Aqsa Ismail
                </p>
                Muhammad Nouman
                <p>

                </p>
              </div>


              <div>
                <p className="text-slate-200">
                  Submitted To
                </p>

                <p className="mt-1">
                  Prof. Abdul Rehman Hashmi
                </p>
              </div>

            </div>

          </div>

        </div>

        <p className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          Copyright © 2026 UCP Faculty Hub. All Rights Reserved.
        </p>

      </div>

    </footer>
  )
}

export default Footer