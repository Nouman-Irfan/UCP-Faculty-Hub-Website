import React from 'react'
import { motion } from 'motion/react'

const AboutDetails = () => {
    const features = [
        ['Faculty Directory', 'Browse faculty profiles and available academic information.'],
        ['Departments', 'Explore departments and the people associated with them.'],
        ['Academic Leadership', 'Find Deans, HODs and other academic leadership information.']
    ]

    const team = ['Aqsa Ismail', 'Muhammad Nouman']

    return (
        <>
            <section className="mx-auto max-w-6xl px-6 py-14">
                <div className="grid gap-12 md:grid-cols-2">

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <p className="text-sm font-semibold text-blue-700">WHAT IT OFFERS</p>
                        <h2 className="mt-2 text-3xl font-bold">Simple Academic Discovery</h2>

                        <div className="mt-8 space-y-6">
                            {features.map((feature, index) => (
                                <motion.div key={feature[0]} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: (index + 1) * 0.1 }} whileHover={{ x: 5 }} className="border-l-4 border-blue-600 pl-5">
                                    <h3 className="font-semibold">{feature[0]}</h3>
                                    <p className="mt-1 text-sm leading-6 text-slate-600">{feature[1]}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
                        <p className="text-sm font-semibold text-blue-700">DATA INFORMATION</p>
                        <h2 className="mt-2 text-3xl font-bold">Where the Information Comes From</h2>
                        <p className="mt-6 leading-7 text-slate-600">Faculty information used on this website is based on publicly available University of Central Punjab information.</p>
                        <p className="mt-4 leading-7 text-slate-600">If certain information is not publicly available, it is not intentionally guessed or invented.</p>
                    </motion.div>

                </div>
            </section>

            <section className="border-t border-slate-200 bg-slate-50">
                <div className="mx-auto max-w-6xl px-6 py-14">

                    <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <p className="text-sm font-semibold text-blue-700">PROJECT TEAM</p>
                        <h2 className="mt-2 text-3xl font-bold">Built By</h2>
                    </motion.div>

                    <div className="mt-8 grid max-w-3xl gap-8 sm:grid-cols-2">
                        {team.map((name, index) => (
                            <motion.div key={name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (index + 1) * 0.1 }} whileHover={{ x: 5 }} className="border-l-4 border-blue-600 pl-5">
                                <p className="text-lg font-semibold">{name}</p>
                                <p className="mt-1 text-sm text-slate-500">Developer</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-10 border-t border-slate-200 pt-6">
                        <p className="text-sm text-slate-500">Submitted To</p>
                        <p className="mt-1 font-semibold">Prof. Abdul Rehman Hashmi</p>
                    </motion.div>

                </div>
            </section>
        </>
    )
}

export default AboutDetails