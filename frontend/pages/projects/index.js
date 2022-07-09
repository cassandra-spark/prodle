import { useState } from 'react'
import Link from 'next/link'
import { SearchIcon } from '@heroicons/react/solid'

import Dashboard from '../../components/Dashboard'
import ProjectList from '../../components/ProjectList'

import { useProjects } from '../../api/project/hooks'

export default function Projects() {
  const [query, setQuery] = useState('')

  const { projects, refetch } = useProjects({ query })

  const search = () => {
    refetch({ query })
  }

  return (
    <Dashboard current="Projects">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">Search Projects</h1>
            </div>
            <div className="mt-4 flex md:mt-0 md:ml-4">
              <Link href="/projects/new">
                <a
                  type="button"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  New project
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 flex rounded-md shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="query"
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.code === 'Enter' && search()}
                className="focus:ring-red-500 focus:border-red-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                placeholder="Search projects"
              />
            </div>
            <button
              type="button"
              onClick={() => search()}
              className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
            >
              <span>Search</span>
            </button>
          </div>
          <div className="text-center mt-12 mb-8">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Projects</h3>
          </div>
          <ProjectList projects={projects} />
        </div>
      </main>
    </Dashboard>
  )
}
