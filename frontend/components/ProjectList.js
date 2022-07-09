import { UserIcon, StarIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'

export default function Projects({ projects }) {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {projects ? projects.map((project) => (
          <li key={project._id}>
            <Link href={`/projects/${project._id}`}>
              <a className="block hover:bg-gray-50">
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="truncate">
                      <div className="flex text-sm">
                        <p className="font-medium text-red-600 truncate">{project.title}</p>
                      </div>
                      <div className="mt-2 flex">
                        <div className="flex items-center text-sm text-gray-500">
                          {project.skills.slice(1, -1)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                      <div className="flex overflow-hidden -space-x-1 gap-4">
                        <p className="flex items-center text-xl text-gray-500">
                          <UserIcon className="flex-shrink-0 mr-1.5 h-8 w-8 text-gray-400" aria-hidden="true" />
                          {/*project.members.length*/}
                          22
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-5 flex-shrink-0">
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                </div>
              </a>
            </Link>
          </li>
        )) : <p>Loading...</p>}
      </ul>
    </div>
  )
}
