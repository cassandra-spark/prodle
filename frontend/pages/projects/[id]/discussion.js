import { useState } from 'react'
import { useRouter } from 'next/router'

import Dashboard from '../../../components/Dashboard'
import ProjectTabs from '../../../components/ProjectTabs'
import ProjectHeader from '../../../components/ProjectHeader'
import Loading from '../../../components/Loading'
import Comment from '../../../components/Comment'
import { useProject } from '../../../api/project/hooks'
import { useComments, useCreateComment } from '../../../api/discussion/hooks'

export default function ProjectDiscussion() {
  const router = useRouter()
  const { id } = router.query

  const [comment, setComment] = useState('')

  const { result } = useProject(id)
  const { result: commentsResult, refetch: refetchComments } = useComments(id)
  const { createComment } = useCreateComment(id)

  const submitForm = (event) => {
    event.preventDefault()

    const f = async () => {
      const result = await createComment(comment)
      if (result.success) {
        setComment('')
        await refetchComments()
      }
    }
    f()

    return false
  }

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
                <div className="max-w-2xl mx-auto mt-12">
                  <Loading
                    result={commentsResult}
                    render={(comments) => comments.map((comment) => <Comment comment={comment} refetch={refetchComments} key={comment._id} />)}
                  />
                  <form className="space-y-6" onSubmit={(e) => submitForm(e)}>
                    <div>
                      <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                        Comment
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="comment"
                          name="comment"
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                          value={comment} onChange={(e) => setComment(e.target.value)}/>
                      </div>
                    </div>

                    <div>
                      <button onClick={(e) => submitForm(e)}
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Create comment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </main>
          </>
        )}
      />
    </Dashboard>
  )
}
