import { useRouter } from 'next/router'

import Dashboard from '../../../components/Dashboard'
import UserTabs from '../../../components/UserTabs'
import Loading from '../../../components/Loading'

import { useUser } from '../../../api/user/hooks'

export default function UserOverview() {
  const router = useRouter()
  const { username } = router.query

  const { result } = useUser(username)

  return (
    <Dashboard current="Profile">
      <Loading
        result={result}
        render={(user) => (
          <>
            <header>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                      {user.fullName}
                    </h2>
                  </div>
                </div>
              </div>
            </header>
            <main>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
                <UserTabs current="Overview" username={username} />

                <p className="mt-12 whitespace-pre-line">
                  {user.description}
                </p>
              </div>
            </main>
          </>
        )}
      />
    </Dashboard>
  )
}
