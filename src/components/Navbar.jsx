import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { motion } from 'motion/react'
import OfficesDropdown from './OfficesDropdown'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [officesOpen, setOfficesOpen] = useState(false)

  const navClass = ({ isActive }) =>
    isActive
      ? 'border-b-2 border-blue-700 py-3 text-sm font-semibold text-blue-700'
      : 'border-b-2 border-transparent py-3 text-sm font-semibold text-slate-700 transition hover:text-blue-700'

  const mobileClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 text-sm font-semibold ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50 hover:text-blue-700'}`

  const closeMenu = () => {
    setMenuOpen(false)
    setOfficesOpen(false)
  }

  return (
    <motion.nav initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:py-4">
        <Link to="/" onClick={closeMenu}>
          <img src="/assets/branding/ucp-faculty-hub-logo.png" alt="UCP Faculty Hub Logo" className="h-11 w-auto sm:h-14" />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          <motion.li whileHover={{ y: -2 }}><NavLink to="/" end className={navClass}>Home</NavLink></motion.li>
          <motion.li whileHover={{ y: -2 }}><NavLink to="/faculty" className={navClass}>Faculty</NavLink></motion.li>
          <motion.li whileHover={{ y: -2 }}><NavLink to="/departments" className={navClass}>Departments</NavLink></motion.li>
          <motion.li whileHover={{ y: -2 }}><NavLink to="/deans-hods" className={navClass}>Deans & HODs</NavLink></motion.li>
          <OfficesDropdown navClass={navClass} />
          <motion.li whileHover={{ y: -2 }}><NavLink to="/help&faq" className={navClass}>Help & FAQ</NavLink></motion.li>
          <motion.li whileHover={{ y: -2 }}><NavLink to="/about" className={navClass}>About</NavLink></motion.li>
        </ul>

        <motion.div whileHover={{ y: -3, scale: 1.03 }} whileTap={{ scale: 0.96 }} className="hidden lg:block">
          <Link to="/faculty" className="block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800">Browse Directory →</Link>
        </motion.div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-2xl text-slate-700 lg:hidden" aria-label="Toggle menu">
          {menuOpen ? '×' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="border-t border-slate-200 bg-white px-4 py-4 shadow-md lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1">
            <NavLink to="/" end className={mobileClass} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/faculty" className={mobileClass} onClick={closeMenu}>Faculty</NavLink>
            <NavLink to="/departments" className={mobileClass} onClick={closeMenu}>Departments</NavLink>
            <NavLink to="/deans-hods" className={mobileClass} onClick={closeMenu}>Deans & HODs</NavLink>

            <button onClick={() => setOfficesOpen(!officesOpen)} className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
              Offices <span>{officesOpen ? '−' : '+'}</span>
            </button>

            {officesOpen && (
              <div className="ml-3 space-y-1 border-l-2 border-blue-100 pl-3">

                <details>
                  <summary className="cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    A-Building
                  </summary>
                  <div className="ml-3">
                    <NavLink to="/offices/a-building" className={mobileClass} onClick={closeMenu}>All A-Building</NavLink>
                    <NavLink to="/offices/a-building/1st-floor" className={mobileClass} onClick={closeMenu}>1st Floor</NavLink>
                    <NavLink to="/offices/a-building/2nd-floor" className={mobileClass} onClick={closeMenu}>2nd Floor</NavLink>
                    <NavLink to="/offices/a-building/3rd-floor" className={mobileClass} onClick={closeMenu}>3rd Floor</NavLink>
                    <NavLink to="/offices/a-building/ssc-office" className={mobileClass} onClick={closeMenu}>SSC Office</NavLink>
                  </div>
                </details>

                <details>
                  <summary className="cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    B-Building
                  </summary>
                  <div className="ml-3">
                    <NavLink to="/offices/b-building" className={mobileClass} onClick={closeMenu}>All B-Building</NavLink>
                    <NavLink to="/offices/b-building/ground-floor" className={mobileClass} onClick={closeMenu}>Ground Floor</NavLink>
                    <NavLink to="/offices/b-building/3rd-floor" className={mobileClass} onClick={closeMenu}>3rd Floor</NavLink>
                  </div>
                </details>

                <details>
                  <summary className="cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    C-Building
                  </summary>
                  <div className="ml-3">
                    <NavLink to="/offices/c-building" className={mobileClass} onClick={closeMenu}>All C-Building</NavLink>
                    <NavLink to="/offices/c-building/3rd-floor" className={mobileClass} onClick={closeMenu}>3rd Floor</NavLink>
                    <NavLink to="/offices/c-building/international-hub" className={mobileClass} onClick={closeMenu}>International Hub</NavLink>
                  </div>
                </details>

                <details>
                  <summary className="cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    D-Building
                  </summary>
                  <div className="ml-3">
                    <NavLink to="/offices/d-building" className={mobileClass} onClick={closeMenu}>All D-Building</NavLink>
                    <NavLink to="/offices/d-building/1st-floor" className={mobileClass} onClick={closeMenu}>1st Floor</NavLink>
                    <NavLink to="/offices/d-building/2nd-floor" className={mobileClass} onClick={closeMenu}>2nd Floor</NavLink>
                    <NavLink to="/offices/d-building/cso-office" className={mobileClass} onClick={closeMenu}>CSO Office</NavLink>
                  </div>
                </details>

                <NavLink to="/offices/takhleeq-building" className={mobileClass} onClick={closeMenu}>
                  Takhleeq
                </NavLink>

                <details>
                  <summary className="cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                    Gym-Building
                  </summary>
                  <div className="ml-3">
                    <NavLink to="/offices/gym-building" className={mobileClass} onClick={closeMenu}>All Gym-Building</NavLink>
                    <NavLink to="/offices/gym-building/2nd-floor" className={mobileClass} onClick={closeMenu}>2nd Floor</NavLink>
                    <NavLink to="/offices/gym-building/dsa-office" className={mobileClass} onClick={closeMenu}>DSA Office</NavLink>
                  </div>
                </details>

              </div>
            )}

            <NavLink to="/help&faq" className={mobileClass} onClick={closeMenu}>Help & FAQ</NavLink>
            <NavLink to="/about" className={mobileClass} onClick={closeMenu}>About</NavLink>
            <Link to="/faculty" onClick={closeMenu} className="mt-3 block rounded-lg bg-blue-700 px-4 py-3 text-center text-sm font-semibold text-white">Browse Directory →</Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar