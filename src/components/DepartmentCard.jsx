import React from 'react'
import { Link } from 'react-router'

const DepartmentCard = ({ department }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md">

      <div className="flex h-44 items-center justify-center bg-slate-50 p-5">

        <img src={department.image} alt={department.name} className="h-full w-full object-contain"/>

      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold text-slate-900">
          {department.name}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          {department.faculty}
        </p>

        <Link to={`/departments/${department.id}`} className="mt-5 inline-block text-sm font-semibold text-blue-700 hover:text-blue-900">
          Explore Department →
        </Link>

      </div>

    </div>
  )
}

export default DepartmentCard