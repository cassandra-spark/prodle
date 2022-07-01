import { SearchIcon, TagIcon } from '@heroicons/react/solid'

import Dashboard from '../components/Dashboard'
import ProjectList from '../components/ProjectList'

export default function Projects() {
  return (
    <Dashboard current="Projects">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Search Projects</h1>
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
                className="focus:ring-red-500 focus:border-red-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                placeholder="Search projects"
              />
            </div>
            <button
              type="button"
              className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
            >
              <span>Search</span>
            </button>
          </div>
          <div class="mt-4 gap-4 flex justify-between">
            <div className="flex gap-4">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-500 text-white">
                JavaScript
                <button
                  type="button"
                  className="flex-shrink-0 ml-2 h-4 w-4 rounded-full inline-flex items-center justify-center bg-white text-red-500 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                >
                  <span className="sr-only">Remove small option</span>
                  <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                    <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                  </svg>
                </button>
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-500 text-white">
                CSS
                <button
                  type="button"
                  className="flex-shrink-0 ml-2 h-4 w-4 rounded-full inline-flex items-center justify-center bg-white text-red-500 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                >
                  <span className="sr-only">Remove small option</span>
                  <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                    <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                  </svg>
                </button>
              </span>
            </div>
            <div className="flex rounded-md shadow-sm max-w-sm">
              <div className="relative flex items-stretch flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <TagIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="tag"
                  id="tag"
                  className="focus:ring-red-500 focus:border-red-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                  placeholder="Filter tags"
                />
              </div>
              <button
                type="button"
                className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
              >
                <span>Add tag</span>
              </button>
            </div>
          </div>
          <div className="text-center mt-12 mb-8">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Projects</h3>
          </div>
          <ProjectList />
        </div>
      </main>
    </Dashboard>
  )
}
