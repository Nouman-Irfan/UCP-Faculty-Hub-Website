import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'

const Footer = () => {
  const links = [
    ['Home', '/'],
    ['Faculty', '/faculty'],
    ['Departments', '/departments'],
    ['Deans & HODs', '/deans-hods'],
    ['FAQ', '/help&faq'],
    ['About', '/about']
  ]

  return (
    <motion.footer initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.6 }} className="mt-16 bg-slate-900 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">

          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <motion.img whileHover={{ scale: 1.03 }} src="/assets/branding/ucp-faculty-hub-logo-footer.png" alt="UCP Faculty Hub Logo" className="h-16 w-auto object-contain" />

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              A student-focused platform for exploring UCP faculty members,
              departments and academic leadership across the university.
              Discover, connect, and learn with ease.
            </p>
          </motion.div>


          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>

            <ul className="space-y-3 text-sm">
              {links.map(([name, path]) => (
                <motion.li key={name} whileHover={{ x: 5 }}>
                  <Link to={path} className="transition hover:text-blue-400">
                    » {name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>


          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h3 className="mb-4 font-semibold text-white">Project</h3>

            <div className="space-y-4 text-sm text-slate-400">
              <div>
                <p className="text-slate-200">Developed By</p>
                <p className="mt-1">Aqsa Ismail</p>
                <p>Muhammad Nouman</p>
              </div>

              <div>
                <p className="text-slate-200">Submitted To</p>
                <p className="mt-1">Prof. Abdul Rehman Hashmi</p>
              </div>
            </div>
          </motion.div>

        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          Copyright © 2026 UCP Faculty Hub. All Rights Reserved.
        </motion.p>
      </div>

    </motion.footer>
  )
}

export default Footer