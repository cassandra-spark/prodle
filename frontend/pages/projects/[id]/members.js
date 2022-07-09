import { useRouter } from 'next/router'

import Dashboard from '../../../components/Dashboard'
import ProjectTabs from '../../../components/ProjectTabs'
import ProjectMembersList from '../../../components/ProjectMembersList'
import ProjectHeader from '../../../components/ProjectHeader'
import Loading from '../../../components/Loading'
import { useCurrentUser } from '../../../api/user/hooks'
import { useProject, useProjectMemberships, useAcceptApplicant, useRejectApplicant } from '../../../api/project/hooks'

export default function ProjectMembers() {
  const router = useRouter()
  const { id } = router.query
  const user = useCurrentUser()

  const { result, project } = useProject(id)
  const { result: membershipsResult, refetch: refetchMemberships } = useProjectMemberships(id)
  const accept = (project && project.owner == user._id) ? useAcceptApplicant().accept : undefined
  const reject = (project && project.owner == user._id) ? useRejectApplicant().reject : undefined

  return (
    <Dashboard current="Projects">
      <Loading
        result={result}
        render={(project) => (
          <>
            <ProjectHeader project={project} refetch={refetchMemberships} />
            <main>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                <ProjectTabs current="Members" projectId={id} />

                <div className="max-w-2xl mx-auto mt-12">
                  <Loading
                    result={membershipsResult}
                    render={(memberships) => <ProjectMembersList memberships={memberships} refetch={refetchMemberships} accept={accept} reject={reject} />}
                  />
                </div>
              </div>
            </main>
          </>
        )}
      />
    </Dashboard>
  )
}
