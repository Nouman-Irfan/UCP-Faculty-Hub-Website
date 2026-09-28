import React from 'react'
import { motion } from 'motion/react'

const OfficeCard = ({ office, featured = false, index = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: featured ? 25 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: featured ? index * 0.08 : 0 }}
            whileHover={featured ? { y: -3 } : {}}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-blue-200 hover:shadow-lg"
        >
            <div className={featured ? "grid md:grid-cols-[280px_1fr]" : "grid md:grid-cols-[220px_1fr]"}>

                <div className={`flex items-center justify-center bg-slate-100 ${featured ? 'min-h-72 p-6' : 'min-h-56 p-5'}`}>
                    <img
                        src={office.image}
                        alt={office.name}
                        className={featured ? "max-h-64 w-full object-contain" : "max-h-48 w-full object-contain"}
                    />
                </div>

                <div className={featured ? "flex flex-col justify-center p-8" : "flex flex-col justify-center p-7"}>

                    {featured ? (
                        <>
                            <p className="text-xs font-bold tracking-[0.18em] text-blue-700">ADMINISTRATIVE OFFICE</p>
                            <h3 className="mt-3 text-2xl font-bold text-slate-900">{office.office}</h3>
                            <p className="mt-5 text-lg font-semibold text-blue-700">{office.name}</p>
                            <p className="mt-1 text-sm font-medium text-slate-500">{office.role}</p>

                            <div className="mt-7 border-t border-slate-200 pt-5">
                                <p className="text-xs font-bold tracking-wider text-slate-400">OFFICE LOCATION</p>
                                <div className="mt-3 inline-flex w-fit rounded-lg bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                                    {office.location}, {office.building}
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-xs font-bold tracking-wider text-blue-700">{office.location.toUpperCase()}</p>
                            <h3 className="mt-2 text-2xl font-bold text-slate-900">{office.office}</h3>
                            <p className="mt-3 text-lg font-semibold text-blue-700">{office.name}</p>
                            <p className="text-sm text-slate-500">{office.role}</p>
                            <p className="mt-4 text-sm text-slate-600">
                                Located in the {office.location} of {office.building}.
                            </p>
                        </>
                    )}

                </div>
            </div>
        </motion.div>
    )
}

export default OfficeCard