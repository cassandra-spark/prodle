import { useApplicationStatus, useApply, APPLICATION_STATUS_NOT_APPLIED } from '../api/project/hooks'

export default function ProjectHeader({ project, refetch }) {
  const applicationStatus = APPLICATION_STATUS_NOT_APPLIED; //useApplicationStatus(project)
  const { apply } = useApply(project.id)

  const doApply = async () => {
    await apply()
    if (refetch) await refetch()
  }

  return (
    <header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              { project.title }
            </h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            {/*<button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Edit
            </button>*/}
            {applicationStatus == APPLICATION_STATUS_NOT_APPLIED ?
              <button
                type="button"
                onClick={doApply}
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Apply
              </button>
              :
              <button
                type="button"
                disabled="disabled"
                className="disabled ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200"
              >
                {applicationStatus}
              </button>
            }
          </div>
        </div>
      </div>
    </header>
  )
}
