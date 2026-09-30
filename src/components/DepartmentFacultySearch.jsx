import React from 'react'

const DepartmentFacultySearch = ({ search, setSearch }) => {
    return (
        <div className="mb-8">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, designation, email or research..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />
        </div>
    )
}

export default DepartmentFacultySearch