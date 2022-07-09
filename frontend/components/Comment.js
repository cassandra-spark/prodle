import { useState } from 'react'
import { useRouter } from 'next/router'

import Loading from '../components/Loading'
import { useCreateComment, useDeleteComment } from '../api/discussion/hooks'
import { useCurrentUser, useUser } from '../api/user/hooks'

export default function Comment({ comment, refetch }) {
  const router = useRouter()
  const { id } = router.query

  const [replyExpanded, setReplyExpanded] = useState(false)
  const [body, setBody] = useState('')

  const currentUser = useCurrentUser()
  const { createComment } = useCreateComment(id)
  const { deleteComment } = useDeleteComment()

  const { result } = useUser(comment.owner)

  const submitForm = (event, parentId) => {
    event.preventDefault()

    const f = async () => {
      const result = await createComment(body, parentId)
      if (result.success) {
        setBody('')
        setReplyExpanded(false)
        if (refetch) await refetch()
      }
    }
    f()

    return false
  }

  const doDelete = async () => {
    await deleteComment(comment._id)
    if (refetch) await refetch()
  }

  return (
    <div>
      <div className="py-4">
        <div className="flex space-x-3">
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <Loading
                result={result}
                render={(user) => 
                  <h3 className="text-sm font-medium">{user.fullName}</h3>
                }
              />
              <div className="flex gap-2">
                {currentUser._id == comment.owner
                  ? <>
                    <a className="text-sm text-gray-500 text-red-600 hover:underline cursor-pointer" onClick={doDelete}>Delete</a>
                    <span className="text-gray-400 -mt-[2px]">&bull;</span>
                  </>
                  : <></>
                }
                <a className="text-sm text-gray-500 text-red-600 hover:underline cursor-pointer" onClick={() => setReplyExpanded(!replyExpanded)}>Reply</a>
              </div>
            </div>
            <div className="pl-4 py-2 border-l-2 border-red-200">
              <p className="text-md text-gray-900">
                {comment.body}
              </p>

              {comment.children && comment.children.length > 0
                  ? comment.children.map((comment) => <Comment comment={comment} refetch={refetch} key={comment._id} />)
                  : <></>
              }

              {replyExpanded
                ? <form className="space-y-6 mt-4" onSubmit={(e) => submitForm(e, comment._id)}>
                  <div>
                    <div className="mt-1">
                      <textarea
                        id="body"
                        name="body"
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        value={body} onChange={(e) => setBody(e.target.value)}/>
                    </div>
                  </div>

                  <div>
                    <button onClick={(e) => submitForm(e, comment._id)}
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Post reply
                    </button>
                  </div>
                </form>
                : <></>
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
