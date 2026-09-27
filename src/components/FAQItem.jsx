import React from 'react'
import { motion } from 'motion/react'

const FAQItem = ({ number, question, answer, delay = 0 }) => {
    return (
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay }} whileHover={{ y: -3 }}>
            <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md">

                <summary className="flex cursor-pointer list-none items-center justify-between gap-5">
                    <div className="flex items-center gap-5">
                        <span className="text-sm font-bold text-blue-700">{number}</span>
                        <h3 className="text-lg font-semibold text-slate-900">{question}</h3>
                    </div>

                    <span className="text-2xl font-light text-blue-700 transition duration-200 group-open:rotate-45">
                        +
                    </span>
                </summary>

                <div className="ml-10 mt-5 border-t border-slate-100 pt-5">
                    <p className="leading-7 text-slate-600">{answer}</p>
                </div>

            </details>
        </motion.div>
    )
}

export default FAQItem