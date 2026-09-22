import React from 'react'
import { Link, NavLink } from 'react-router'
import { motion } from 'motion/react'

const Navbar = () => {

  const navClass = ({ isActive }) => {

    if (isActive) {
      return 'border-b-2 border-blue-700 py-3 text-sm font-semibold text-blue-700'
    }

    return 'border-b-2 border-transparent py-3 text-sm font-semibold text-slate-700 hover:text-blue-700'
  }


  return (
    <motion.nav
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut'
      }}
      className="sticky top-0 z-50 w-full bg-white shadow-sm">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/">
          <img
            src="/assets/branding/ucp-faculty-hub-logo.png"
            alt="UCP Faculty Hub Logo"
            className="h-14 w-auto"
          />
        </Link>


        <ul className="flex items-center gap-8">

          <li>
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/faculty" className={navClass}>
              Faculty
            </NavLink>
          </li>

          <li>
            <NavLink to="/departments" className={navClass}>
              Departments
            </NavLink>
          </li>

          <li>
            <NavLink to="/deans-hods" className={navClass}>
              Deans & HODs
            </NavLink>
          </li>

          <li>
            <NavLink to="/help&faq" className={navClass}>
              Help & FAQ
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={navClass}>
              About
            </NavLink>
          </li>

        </ul>


        <motion.div
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <Link
            to="/faculty"
            className="block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Browse Directory →
          </Link>
        </motion.div>

      </div>

    </motion.nav>
  )
}

export default Navbar