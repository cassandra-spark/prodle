import Link from 'next/link'

import WithUser from './WithUser.js'

export default function ProjectMembersList({ memberships, refetch, accept, reject }) {
  return (
    <div>
      <div className="flow-root mt-6">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {memberships.map((membership) => (
            membership.status != "rejected"
              ? <WithUser
                id={membership.user}
                render={(user) => (
                  user
                    ? <li key={membership._id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{user.fullName}</p>
                          <p className="text-sm text-gray-500 truncate">{user.degree ? `${user.degree} ` : ''}{user.userType}</p>
                          <p className="text-sm text-gray-500 truncate">{user.email}</p>
                        </div>
                        <div className="flex gap-4">
                          <Link href={`/users/${user._id}`}>
                            <a
                              className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                            >
                              Profile
                            </a>
                          </Link>
                          {accept && membership.status == "pending" ?
                            <a
                              onClick={async () => { await accept(membership._id); await refetch(); }}
                              className="inline-flex items-center shadow-sm px-2.5 py-0.5 cursor-pointer border border-gray-300 text-sm leading-5 font-medium rounded-full text-white bg-green-700 hover:bg-green-600"
                            >
                              Accept
                            </a>
                            : <></>
                          }
                          {reject && membership.status == "pending" ?
                            <a
                              onClick={async () => { await reject(membership._id); await refetch(); }}
                              className="inline-flex items-center shadow-sm px-2.5 py-0.5 cursor-pointer border border-gray-300 text-sm leading-5 font-medium rounded-full text-white bg-red-700 hover:bg-red-600"
                            >
                              Reject
                            </a>
                            : <></>
                          }
                        </div>
                      </div>
                    </li>
                    : <></>
                )}
              />
              : <></>
          ))}
        </ul>
      </div>
    </div>
  )
}
