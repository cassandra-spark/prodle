import Link from 'next/link'

export default function ProjectMembersList({ users, accept, reject }) {
  return (
    <div>
      <div className="flow-root mt-6">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {users.map((user) => (
            <li key={user.username} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="h-16 w-16 rounded-full" src={user.imageUrl} alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{user.fullName}</p>
                  <p className="text-sm text-gray-500 truncate">{user.degree ? `${user.degree} ` : ''}{user.userType}</p>
                  <p className="text-sm text-gray-500 truncate">{user.email}</p>
                </div>
                <div className="flex gap-4">
                  <Link href={`/users/${user.username}`}>
                    <a
                      className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Profile
                    </a>
                  </Link>
                  {accept ?
                    <a
                      onClick={() => accept(user.id)}
                      className="inline-flex items-center shadow-sm px-2.5 py-0.5 cursor-pointer border border-gray-300 text-sm leading-5 font-medium rounded-full text-white bg-green-700 hover:bg-green-600"
                    >
                      Accept
                    </a>
                    : <></>
                  }
                  {reject ?
                    <a
                      onClick={() => reject(user.id)}
                      className="inline-flex items-center shadow-sm px-2.5 py-0.5 cursor-pointer border border-gray-300 text-sm leading-5 font-medium rounded-full text-white bg-red-700 hover:bg-red-600"
                    >
                      Reject
                    </a>
                    : <></>
                  }
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
