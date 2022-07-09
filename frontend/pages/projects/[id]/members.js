import { useRouter } from 'next/router'

import Dashboard from '../../../components/Dashboard'
import ProjectTabs from '../../../components/ProjectTabs'
import ProjectMembersList from '../../../components/ProjectMembersList'
import ProjectHeader from '../../../components/ProjectHeader'
import Loading from '../../../components/Loading'
import { useProject, useAcceptApplicant, useRejectApplicant } from '../../../api/project/hooks'

export default function ProjectMembers() {
  const router = useRouter()
  const { id } = router.query

  const { result, refetch } = useProject(id)
  const { accept } = useAcceptApplicant(id)
  const { reject } = useRejectApplicant(id)

  return (
    <Dashboard current="Projects">
      <Loading
        result={result}
        render={(project) => (
          <>
            <ProjectHeader project={project} refetch={refetch} />
            <main>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                <ProjectTabs current="Members" projectId={id} />

                <div className="max-w-2xl mx-auto mt-12">
                  <ProjectMembersList users={project.members} />


                  {project.applicants.length > 0 ?
                    <>
                      <div className="pb-5 border-b border-gray-200 mt-12">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Applicants</h3>
                      </div>
                      <ProjectMembersList users={project.applicants} accept={accept} reject={reject} />
                    </>
                    : <></>
                  }
                </div>
              </div>
            </main>
          </>
        )}
      />
    </Dashboard>
  )
}
