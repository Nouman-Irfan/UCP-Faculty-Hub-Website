import React from 'react'

const FacultyCard = ({ person, onViewProfile }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">

      <div className="flex h-64 items-center justify-center bg-slate-100 p-3">

        <img src={person.image || "/assets/placeholders/faculty-placeholder.png"} alt={person.name} className="h-full w-full object-contain"
          onError={(e) => {
            e.currentTarget.src =
              "/assets/placeholders/faculty-placeholder.png"
          }}
        />

      </div>


      <div className="p-5">

        <h3 className="text-lg font-bold text-slate-900">
          {person.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-blue-700">
          {person.designation}
        </p>

        <p className="mt-3 text-sm text-slate-600">
          {person.department}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {person.faculty}
        </p>

        <button
          onClick={() => onViewProfile(person)}
          className="mt-5 w-full rounded-lg bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          View Profile
        </button>

      </div>

    </div>
  )
}

export default FacultyCard