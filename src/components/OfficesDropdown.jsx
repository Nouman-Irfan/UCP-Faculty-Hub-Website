import React from 'react'
import { Link, NavLink } from 'react-router'
import { motion } from 'motion/react'

const OfficesDropdown = ({ navClass }) => {
  const linkClass = "flex items-center justify-between rounded-lg px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700"
  const subMenu = "invisible absolute left-full top-0 w-52 translate-x-2 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition duration-200"

  return (
    <motion.li initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="group relative">

      <NavLink to="/offices" className={navClass}>Offices ▾</NavLink>

      <div className="invisible absolute left-0 top-full z-50 w-52 translate-y-2 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">

        <div className="group/a relative">
          <Link to="/offices/a-building" className={linkClass}>A-Building <span>›</span></Link>

          <div className={`${subMenu} group-hover/a:visible group-hover/a:translate-x-0 group-hover/a:opacity-100`}>
            <Link to="/offices/a-building/1st-floor" className={linkClass}>1st Floor</Link>
            <Link to="/offices/a-building/2nd-floor" className={linkClass}>2nd Floor</Link>
            <Link to="/offices/a-building/3rd-floor" className={linkClass}>3rd Floor</Link>
            <Link to="/offices/a-building/ssc-office" className={linkClass}>SSC Office</Link>
          </div>
        </div>

        <div className="group/b relative">
          <Link to="/offices/b-building" className={linkClass}>B-Building <span>›</span></Link>

          <div className={`${subMenu} group-hover/b:visible group-hover/b:translate-x-0 group-hover/b:opacity-100`}>
            <Link to="/offices/b-building/ground-floor" className={linkClass}>Ground Floor</Link>
          </div>
        </div>

        <div className="group/c relative">
          <Link to="/offices/c-building" className={linkClass}>C-Building <span>›</span></Link>

          <div className={`${subMenu} group-hover/c:visible group-hover/c:translate-x-0 group-hover/c:opacity-100`}>
            <Link to="/offices/c-building/3rd-floor" className={linkClass}>3rd Floor</Link>
            <Link to="/offices/c-building/international-hub" className={linkClass}>UCP International Hub</Link>
          </div>
        </div>

        <div className="group/d relative">
          <Link to="/offices/d-building" className={linkClass}>D-Building <span>›</span></Link>

          <div className={`${subMenu} group-hover/d:visible group-hover/d:translate-x-0 group-hover/d:opacity-100`}>
            <Link to="/offices/d-building/1st-floor" className={linkClass}>1st Floor</Link>
            <Link to="/offices/d-building/2nd-floor" className={linkClass}>2nd Floor</Link>
          </div>
        </div>

        <Link to="/offices/takhleeq-building" className={linkClass}>Takhleeq</Link>

        <div className="group/gym relative">
          <Link to="/offices/gym-building" className={linkClass}>Gym-Building <span>›</span></Link>

          <div className={`${subMenu} group-hover/gym:visible group-hover/gym:translate-x-0 group-hover/gym:opacity-100`}>
            <Link to="/offices/gym-building/2nd-floor" className={linkClass}>2nd Floor</Link>
            <Link to="/offices/gym-building/dsa-office" className={linkClass}>DSA Office</Link>
          </div>
        </div>

      </div>
    </motion.li>
  )
}

export default OfficesDropdown