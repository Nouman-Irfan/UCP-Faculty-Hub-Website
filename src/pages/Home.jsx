import React from 'react'
import Hero from '../components/Hero'
import StatsSection from '../components/StatsSection'
import FacultyBadges from '../components/FacultyBadges'
import PopularDepartments from '../components/PopularDepartments'
import Welcome from '../components/Welcome'
import QuickLinks from '../components/QuickLinks'
import AcademicFaculties from '../components/AcademicFaculties'
import { motion } from 'motion/react'
import { Link } from 'react-router'

const Home = () => {
  return (
    <main className="bg-white text-slate-900">

      <Hero />
      <StatsSection />
      <Welcome />
      <QuickLinks />
      <AcademicFaculties />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <PopularDepartments />
      </motion.div>

    </main>
  )
}

export default Home