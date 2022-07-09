import { useRouter } from 'next/router'

import Dashboard from '../../../components/Dashboard'
import ProjectTabs from '../../../components/ProjectTabs'
import ProjectHeader from '../../../components/ProjectHeader'
import Loading from '../../../components/Loading'

import { useProject } from '../../../api/project/hooks'

export default function Project() {
  const router = useRouter()
  const { id } = router.query

  const { result, refetch } = useProject(id)

  return (
    <Dashboard current="Projects">
      <Loading
        result={result}
        render={(project) => (
          <>
            <ProjectHeader project={project} refetch={refetch} />
            <main>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                <ProjectTabs current="Overview" projectId={id} />

                <p className="mt-12 whitespace-pre-line">
                  { project.description }
                </p>
              </div>
            </main>
          </>
        )}
      />
    </Dashboard>
  )
}
