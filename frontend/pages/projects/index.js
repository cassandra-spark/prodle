import { useState, useEffect } from 'react'
import { SearchIcon, TagIcon, CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'

import Dashboard from '../../components/Dashboard'
import ProjectList from '../../components/ProjectList'

import { useProjects, useTagList } from '../../api/project/hooks'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

//function useTags(initialTags) {
  //const [tags, setTags] = useState(initialTags)
  
  //const addTag = (tag) => {
    //if (tags.some((tag0) => tag0.toLowerCase() == tag.toLowerCase())) {
      //return
    //}
    //const newTags = [...tags, tag]
    //setTags([...new Set(newTags)])
  //}
  
  //const removeTag = (tag) => {
    //const newTags = tags.filter((tag0) => tag0 !== tag)
    //setTags(newTags)
  //}

  //return { tags, addTag, removeTag }
//}

export default function Projects() {
  const [query, setQuery] = useState('')
  //const [tagInput, setTagInput] = useState('')
  //const { tags, addTag, removeTag } = useTags([])

  const { projects, refetch } = useProjects({ query })
  //const { tags: tagList } = useTagList()

  //const filteredTags =
    //tagInput === ''
      //? tagList
      //: tagList.filter((tag) => {
        //return tag.toLowerCase().includes(tagInput.toLowerCase())
      //})

  const search = () => {
    refetch({ query })
  }

  //const popTag = (tag) => {
    //removeTag(tag)
  //}

  //const pushTag = (tag) => {
    //addTag(tag)
    //setTagInput('')
  //}

  //useEffect(() => {
    //search()
  //}, [tags])

  return (
    <Dashboard current="Projects">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Search Projects</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 flex rounded-md shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="query"
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.code === 'Enter' && search()}
                className="focus:ring-red-500 focus:border-red-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                placeholder="Search projects"
              />
            </div>
            <button
              type="button"
              onClick={() => search()}
              className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
            >
              <span>Search</span>
            </button>
          </div>
          {/*<div className="mt-4 gap-4 flex justify-between">
            <div className="flex gap-4">
              {tags.map((tag) => (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-500 text-white">
                  {tag}
                  <button
                    type="button"
                    onClick={() => popTag(tag)}
                    className="flex-shrink-0 ml-2 h-4 w-4 rounded-full inline-flex items-center justify-center bg-white text-red-500 hover:bg-red-200 hover:text-red-500 focus:outline-none focus:bg-red-500 focus:text-white"
                  >
                    <span className="sr-only">Remove tag</span>
                    <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                      <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                    </svg>
                  </button>
                </span>
              ))}
            </div>
            <div className="flex rounded-md shadow-sm max-w-sm">
              {/*<div className="relative flex items-stretch flex-grow focus-within:z-10">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <TagIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="tag"
                  id="tag"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => e.code === 'Enter' && pushTag()}
                  className="focus:ring-red-500 focus:border-red-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
                  placeholder="Filter tags"
                />
              </div>/}
              <Combobox as="div" value={tagInput} onChange={(tag) => pushTag(tag)}>
                <div className="relative">
                  <Combobox.Input
                    className="w-full rounded-none rounded-l-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm"
                    onChange={(e) => setTagInput(e.target.value)}
                    displayValue={(tag) => tag}
                    placeholder="Filter tags"
                  />
                  <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </Combobox.Button>

                  {filteredTags && filteredTags.length > 0 && (
                    <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredTags.map((tag) => (
                        <Combobox.Option
                          key={tag}
                          value={tag}
                          className={({ active }) =>
                              classNames(
                                'relative cursor-default select-none py-2 pl-3 pr-9',
                                active ? 'bg-red-600 text-white' : 'text-gray-900'
                              )
                          }
                        >
                          {({ active, selected }) => (
                            <>
                              <span className={classNames('block truncate', selected && 'font-semibold')}>{tag}</span>

                              {selected && (
                                <span
                                  className={classNames(
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                    active ? 'text-white' : 'text-red-600'
                                  )}
                                >
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              )}
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}
                </div>
              </Combobox>
              <button
                type="button"
                onClick={() => pushTag(tagInput)}
                className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
              >
                <span>Add tag</span>
              </button>
            </div>
          </div>
            */}
          <div className="text-center mt-12 mb-8">
            <h3 className="text-2xl leading-6 font-medium text-gray-900">Projects</h3>
          </div>
          <ProjectList projects={projects} />
        </div>
      </main>
    </Dashboard>
  )
}
