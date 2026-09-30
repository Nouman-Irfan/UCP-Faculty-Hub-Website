import React from 'react'
import { motion } from 'motion/react'
import Counter from './Counter'

const DepartmentOverview = ({ department, departmentId, totalPeople, researchCount }) => {
    const departmentImage = `/assets/department-badges/${departmentId}.png`

    return (
        <div className="mt-6 grid gap-5 md:grid-cols-3">

            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.08 }} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:col-span-2">
                <p className="text-sm font-semibold text-blue-700">UCP DEPARTMENT</p>
                <h1 className="mt-3 text-4xl font-bold text-slate-900">{department.department}</h1>
                <p className="mt-4 max-w-xl leading-7 text-slate-600">
                    Explore the people, academic information and research interests connected with this department.
                </p>

                <div className="mt-7 border-t border-slate-200 pt-5">
                    <p className="text-sm font-semibold text-slate-500">FACULTY</p>
                    <p className="mt-1 font-medium text-slate-800">{department.faculty}</p>
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="flex min-h-64 items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <img src={departmentImage} alt={department.department} className="max-h-52 w-full object-contain" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="rounded-2xl border border-slate-200 bg-blue-50 p-6">
                <p className="text-sm font-semibold text-blue-700">DIRECTORY</p>
                <p className="mt-3 text-4xl font-bold text-slate-900">
                    <Counter value={totalPeople} />
                </p>
                <p className="mt-2 text-sm text-slate-600">Directory Records</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.27 }} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-sm font-semibold text-slate-500">RESEARCH</p>
                <p className="mt-3 text-4xl font-bold text-blue-700">
                    <Counter value={researchCount} />
                </p>
                <p className="mt-2 text-sm text-slate-600">Profiles with Research Interests</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.34 }} className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm font-semibold text-amber-700">EXPLORE</p>
                <h3 className="mt-3 text-xl font-bold text-slate-900">Meet the Department</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                    Browse the profiles below to learn more about the people connected with this department.
                </p>
            </motion.div>

        </div>
    )
}

export default DepartmentOverview