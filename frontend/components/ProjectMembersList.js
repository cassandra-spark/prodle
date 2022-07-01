const people = [
  {
    name: 'Phillip Torff',
    role: 'PhD Researcher',
    email: 'philiptoff@mail.com',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kierra Press',
    role: 'Student Assistant',
    email: 'kierrapress@mail.com',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Alfredo Vetrovs',
    role: 'Master’s Student',
    email: 'al.ve@mail.com',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function ProjectMembersList() {
  return (
    <div>
      <div className="flow-root mt-6">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {people.map((person) => (
            <li key={person.handle} className="py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{person.name}</p>
                  <p className="text-sm text-gray-500 truncate">{person.role}</p>
                  <p className="text-sm text-gray-500 truncate">{person.email}</p>
                </div>
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center shadow-sm px-2.5 py-0.5 border border-gray-300 text-sm leading-5 font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Profile
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
