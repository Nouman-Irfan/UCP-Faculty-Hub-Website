import React from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'

const QuickLinks = () => {
  const cards = [
    {
      letter: 'F',
      title: 'Faculty Directory',
      text: 'Browse faculty profiles and view available academic information.',
      link: '/faculty',
      button: 'Explore Faculty →',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      letter: 'D',
      title: 'Departments',
      text: 'Explore different academic departments across UCP.',
      link: '/departments',
      button: 'View Departments →',
      color: 'bg-indigo-100 text-indigo-700'
    },
    {
      letter: 'H',
      title: 'Deans & HODs',
      text: 'Discover the people leading UCP faculties and departments.',
      link: '/deans-hods',
      button: 'View Leadership →',
      color: 'bg-sky-100 text-sky-700'
    },
    {
      letter: '?',
      title: 'Help & FAQ',
      text: 'Find answers to common questions quickly.',
      link: '/help&faq',
      button: 'View FAQs →',
      color: 'bg-amber-100 text-amber-700'
    }
  ]

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {cards.map((card, index) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: index * 0.08 }} whileHover={{ y: -5 }} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md">

              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full font-bold ${card.color}`}>
                {card.letter}
              </div>

              <h3 className="text-lg font-semibold">{card.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {card.text}
              </p>

              <Link to={card.link} className="mt-4 inline-block text-sm font-semibold text-blue-700">
                {card.button}
              </Link>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default QuickLinks