import Link from 'next/link'

const tabs = (projectId) => ([
  { name: 'Overview', href: `/projects/${projectId}` },
  { name: 'Discussion', href: `/projects/${projectId}/discussion` },
  { name: 'Members', href: `/projects/${projectId}/members` },
])

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProjectTabs({ current, projectId }) {
  return (
    <div>
      <nav className="flex space-x-4 justify-center" aria-label="Tabs">
        {tabs(projectId).map((tab) => (
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
