import Link from 'next/link'

const tabs = (username) => ([
  { name: 'Overview', href: `/users/${username}` },
  { name: 'Projects', href: `/users/${username}/projects` },
])

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function UserTabs({ current, username }) {
  return (
    <div>
      <nav className="flex space-x-4 justify-center" aria-label="Tabs">
        {tabs(username).map((tab) => (
          <Link
            key={tab.name}
            href={tab.href}
          >
            <a
              className={classNames(
                tab.name == current
                  ? 'bg-red-500 text-red-100'
                  : 'text-gray-500 hover:text-gray-700',
                'px-10 py-3 font-bold text-sm rounded-full'
              )}
              aria-current={tab.name == current ? 'page' : undefined}
            >
              {tab.name}
            </a>
          </Link>
        ))}
      </nav>
    </div>
  )
}
