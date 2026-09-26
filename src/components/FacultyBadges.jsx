import React from 'react'
import { Link } from 'react-router'

const FacultyBadges = () => {
  const faculties = [
    { name: 'Faculty of Engineering', image: '/assets/faculty-badges/faculty-of-engineering.png' },
    { name: 'Faculty of Information Technology & Computer Science', image: '/assets/faculty-badges/faculty-of-information-technology-and-computer-science.png' },
    { name: 'Faculty of Management Sciences', image: '/assets/faculty-badges/faculty-of-management-sciences.png' },
    { name: 'Faculty of Humanities & Social Sciences', image: '/assets/faculty-badges/faculty-of-humanities-social-sciences.png' },
    { name: 'Faculty of Languages & Literature', image: '/assets/faculty-badges/faculty-of-languages-literature.png' },
    { name: 'Faculty of Law', image: '/assets/faculty-badges/faculty-of-law.png' },
    { name: 'Faculty of Media & Mass Communication', image: '/assets/faculty-badges/faculty-of-media-and-mass-communication.png' },
    { name: 'Faculty of Pharmaceutical Sciences', image: '/assets/faculty-badges/faculty-of-pharmaceutical-sciences.png' },
    { name: 'Faculty of Science & Technology', image: '/assets/faculty-badges/faculty-of-science-technology.png' }
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

      {faculties.map((faculty) => (
        <Link key={faculty.name} to="/departments" className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

          <div className="flex h-64 items-center justify-center bg-slate-100 px-7 py-6 transition-colors duration-300 group-hover:bg-slate-50">
            <img src={faculty.image} alt={faculty.name} className="w-full max-w-87 object-contain transition duration-300 group-hover:scale-[1.02]" />
          </div>

          <div className="border-t border-slate-200 px-6 py-5">
            <div className="flex min-h-16 items-center justify-between gap-4">

              <h3 className="text-lg font-bold leading-6 text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                {faculty.name}
              </h3>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:border-blue-200 group-hover:text-blue-700">
                →
              </span>

            </div>
          </div>

        </Link>
      ))}

    </div>
  )
}

export default FacultyBadges