import { useRouter } from 'next/router'

import Dashboard from '../../../components/Dashboard'
import ProjectTabs from '../../../components/ProjectTabs'
import ProjectHeader from '../../../components/ProjectHeader'
import Loading from '../../../components/Loading'
import { useProject } from '../../../api/project/hooks'

export default function ProjectDiscussion() {
  const router = useRouter()
  const { id } = router.query

  const { result } = useProject(id)

  return (
    <Dashboard current="Projects">
      <Loading
        result={result}
        render={(project) => (
          <>
            <ProjectHeader project={project} />
            <main>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                <ProjectTabs current="Discussion" projectId={id} />
              </div>
            </main>
          </>
        )}
      />
    </Dashboard>
  )
}
