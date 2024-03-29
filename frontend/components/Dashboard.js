import { Fragment } from 'react'
import Link from 'next/link'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { useSignOut, useCurrentUser } from '../api/user/hooks'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Profile', href: '/profile' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard({ children, current }) {
  const signOut = useSignOut()
  const user = useCurrentUser()

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white border-b border-gray-200">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="/prodle.png"
                        alt="Prodle"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="/prodle.png"
                        alt="Prodle"
                      />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                        >
                          <a
                            className={classNames(
                              item.name == current
                                ? 'border-red-500 text-gray-900'
                                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                              'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                            )}
                            aria-current={item.name == current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    {/* Profile dropdown */}
                    {user ?
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src="/user.png" alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            <a className="block px-4 py-2 text-sm text-gray-700 font-bold">{user.fullName}</a>
                          </Menu.Item>
                          <Menu.Item>
                            <a className="block px-4 py-2 text-sm text-gray-700 overflow-hidden text-ellipsis">{user.email}</a>
                          </Menu.Item>
                          <Menu.Item>
                            <a className="block px-4 py-2 text-sm text-gray-700" href="" onClick={() => signOut()}>Sign out</a>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                    : <></>
                    }
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                    >
                      <Disclosure.Button
                        as="a"
                        className={classNames(
                          item.name == current
                            ? 'bg-red-50 border-red-500 text-red-700'
                            : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                          'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                        )}
                        aria-current={item.name == current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    </Link>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-200">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src="/user.png" alt="" />
                    </div>
                    {user ? 
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">{user.fullName}</div>
                        <div className="text-sm font-medium text-gray-500">{user.email}</div>
                      </div>
                      :
                      <></>
                    }
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="py-10">
          {children}
        </div>
      </div>
    </>
  )
}
