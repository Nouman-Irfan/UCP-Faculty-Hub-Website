import React from 'react'

const FacultyModal = ({ person, onClose }) => {
  if (!person) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-white shadow-xl">

        <div className="flex justify-end p-4">

          <button
            onClick={onClose}
            className="text-3xl leading-none text-slate-500 hover:text-slate-900"
          >
            ×
          </button>

        </div>


        <div className="grid gap-8 px-8 pb-8 md:grid-cols-[220px_1fr]">

          <div>

            <div className="flex h-64 items-center justify-center rounded-lg bg-slate-100 p-3">

              <img
                src={person.image || "/assets/placeholders/faculty-placeholder.png"}
                alt={person.name}
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.src =
                    "/assets/placeholders/faculty-placeholder.png"
                }}
              />

            </div>

          </div>


          <div>

            <h2 className="text-3xl font-bold text-slate-900">
              {person.name}
            </h2>

            <p className="mt-2 font-medium text-blue-700">
              {person.designation}
            </p>

            <p className="mt-3 text-slate-600">
              {person.department}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              {person.faculty}
            </p>


            {person.email && (

              <div className="mt-5">

                <p className="text-sm font-semibold text-slate-900">
                  Email
                </p>

                <p className="mt-1 break-all text-sm text-slate-600">
                  {person.email}
                </p>

              </div>

            )}


            {person.officeExtension && (

              <div className="mt-4">

                <p className="text-sm font-semibold text-slate-900">
                  Office Extension
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  {person.officeExtension}
                </p>

              </div>

            )}


            {person.education && person.education.length > 0 && (

              <div className="mt-6">

                <h3 className="text-lg font-bold text-slate-900">
                  Education
                </h3>

                <div className="mt-3 space-y-3">

                  {person.education.map((edu, index) => (

                    <div
                      key={index}
                      className="border-l-2 border-blue-600 pl-3"
                    >

                      <p className="font-medium text-slate-900">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </p>

                      {edu.institution && (
                        <p className="text-sm text-slate-500">
                          {edu.institution}
                        </p>
                      )}

                      {edu.year && (
                        <p className="text-sm text-slate-500">
                          {edu.year}
                        </p>
                      )}

                    </div>

                  ))}

                </div>

              </div>

            )}


            {person.researchInterests &&
              person.researchInterests.length > 0 && (

              <div className="mt-6">

                <h3 className="text-lg font-bold text-slate-900">
                  Research Interests
                </h3>

                <div className="mt-3 flex flex-wrap gap-2">

                  {person.researchInterests.map((interest, index) => (

                    <span
                      key={index}
                      className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700"
                    >
                      {interest}
                    </span>

                  ))}

                </div>

              </div>

            )}


            {person.profileUrl && (

              <a
                href={person.profileUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-block rounded-lg border border-blue-700 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
              >
                Official UCP Profile
              </a>

            )}

          </div>

        </div>

      </div>

    </div>
  )
}

export default FacultyModal