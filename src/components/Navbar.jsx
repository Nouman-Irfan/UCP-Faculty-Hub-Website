import React from 'react'
import { Link, NavLink } from 'react-router'
import { motion } from 'motion/react'

const Navbar = () => {

  const navClass = ({ isActive }) => {
    if (isActive) {
      return 'border-b-2 border-blue-700 py-3 text-sm font-semibold text-blue-700'
    }

    return 'border-b-2 border-transparent py-3 text-sm font-semibold text-slate-700 transition hover:text-blue-700'
  }

  return (
    <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut' }} className="sticky top-0 z-50 w-full bg-white shadow-sm">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link to="/">
          <img src="/assets/branding/ucp-faculty-hub-logo.png" alt="UCP Faculty Hub Logo" className="h-14 w-auto" />
        </Link>

        <ul className="flex items-center gap-8">

          <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} whileHover={{ y: -2 }}>
            <NavLink to="/" end className={navClass}>Home</NavLink>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} whileHover={{ y: -2 }}>
            <NavLink to="/faculty" className={navClass}>Faculty</NavLink>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} whileHover={{ y: -2 }}>
            <NavLink to="/departments" className={navClass}>Departments</NavLink>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} whileHover={{ y: -2 }}>
            <NavLink to="/deans-hods" className={navClass}>Deans & HODs</NavLink>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} whileHover={{ y: -2 }}>
            <NavLink to="/help&faq" className={navClass}>Help & FAQ</NavLink>
          </motion.li>

          <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} whileHover={{ y: -2 }}>
            <NavLink to="/about" className={navClass}>About</NavLink>
          </motion.li>

        </ul>

        <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
          <Link to="/faculty" className="block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 hover:shadow-md">
            Browse Directory →
          </Link>
        </motion.div>

      </div>

    </motion.nav>
  )
}

export default Navbar