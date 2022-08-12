import { useMyMembershipStatus, useApply } from '../api/project/hooks'
import { useRouter } from 'next/router'

import { capitalize } from '../api/helpers'
import { useCurrentUser } from '../api/user/hooks'
import { useDeleteProject } from '../api/project/hooks'

export default function ProjectHeader({ project, refetch }) {
  const router = useRouter()
  const { status, refetch: refetchMembership } = useMyMembershipStatus(project._id)
  const { apply } = useApply(project._id)
  const { deleteProject } = useDeleteProject()
  const currentUser = useCurrentUser()

  const doApply = async () => {
    await apply()
    await refetchMembership()
    if (refetch) await refetch()
  }

  const doDelete = async () => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      await deleteProject(project._id)
      router.replace(`/projects`)
    }
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
            {project.owner == currentUser._id
              ? <button
                type="button"
                onClick={doDelete}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Delete
              </button>
              : <></>
            }
            {status == "can apply" ?
              <button
                type="button"
                onClick={doApply}
                className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Apply
              </button>
              : (status ?
                  <button
                    type="button"
                    disabled="disabled"
                    className="disabled ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200"
                  >
                    {capitalize(status)}
                  </button>
                  : <></>
              )
            }
          </div>
        </div>
      </div>
    </header>
  )
}
