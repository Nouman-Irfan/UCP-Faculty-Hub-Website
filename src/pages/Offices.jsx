import React from 'react'
import { Link, useParams } from 'react-router'
import { motion } from 'motion/react'
import { officeCategories, offices } from '../data/officesData'
import OfficeCard from '../components/OfficeCard'

const Offices = () => {
    const { officeType, section } = useParams()

    const selected = officeCategories.find((item) => item.id === officeType)
    const mainOffices = offices.filter((office) => office.featured)

    const buildingOffices = offices.filter((office) => {
        const sameBuilding = office.building === selected?.name
        const sameSection = !section || office.section === section
        return sameBuilding && sameSection
    })

    return (
        <main className="bg-slate-50">

            <section className="bg-white">
                <div className="mx-auto max-w-6xl px-6 py-12">
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-sm font-semibold text-blue-700">UCP OFFICE DIRECTORY</p>
                        <h1 className="mt-2 text-4xl font-bold text-slate-900">
                            {selected ? selected.name : 'University Offices'}
                        </h1>

                        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                            {selected
                                ? `Explore administrative offices and important locations inside ${selected.name}.`
                                : 'Find important administrative offices and their locations across the University of Central Punjab.'}
                        </p>

                        {section && (
                            <p className="mt-3 text-sm font-semibold capitalize text-blue-700">
                                {section.replaceAll('-', ' ')}
                            </p>
                        )}
                    </motion.div>
                </div>
            </section>

            {!selected && (
                <section className="mx-auto max-w-6xl px-6 py-12">

                    <div className="mb-8">
                        <p className="text-sm font-semibold tracking-wide text-blue-700">ADMINISTRATION</p>
                        <h2 className="mt-2 text-3xl font-bold text-slate-900">Important Offices</h2>
                        <p className="mt-2 text-slate-500">
                            Find key administrative offices and their locations across UCP.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {mainOffices.map((office, index) => (
                            <OfficeCard key={office.name} office={office} featured={true} index={index} />))
                        }
                    </div>

                </section>
            )}

            <section className="mx-auto max-w-6xl px-6 py-12">

                <p className="text-sm font-semibold text-blue-700">OFFICE DIRECTORY</p>

                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    {selected ? `Offices in ${selected.name}` : 'Browse by Building'}
                </h2>

                {!selected ? (
                    <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {officeCategories.map((category) => (
                            <Link key={category.id} to={`/offices/${category.id}`} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
                                <h3 className="font-bold text-slate-900">{category.name}</h3>
                                <p className="mt-2 text-sm text-slate-500">Explore offices →</p>
                            </Link>
                        ))}

                    </div>
                ) : buildingOffices.length > 0 ? (
                    <div className="mt-7 space-y-6">

                        {buildingOffices.map((office) => (
                            <OfficeCard
                                key={office.name}
                                office={office}
                            />
                        ))}

                    </div>
                ) : (
                    <div className="mt-7 rounded-xl border border-slate-200 bg-white p-8">
                        <h3 className="text-xl font-bold capitalize text-slate-900">
                            {section ? section.replaceAll('-', ' ') : selected.name}
                        </h3>

                        <p className="mt-3 text-slate-500">
                            Office information for this location will be added here.
                        </p>
                    </div>
                )}

            </section>

        </main>
    )
}

export default Offices