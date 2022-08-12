import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Dashboard from '../../components/Dashboard'

import { useCreateProject } from '../../api/project/hooks'

export default function NewProject() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [skills, setSkills] = useState('')
  const [faculty, setFaculty] = useState('')
  const [degree, setDegree] = useState('')
  const [type, setType] = useState('')
  const [link, setLink] = useState('')

  const { createProject, result } = useCreateProject()

  const submitForm = (e) => {
    e.preventDefault()
    createProject({title, description, skills, faculty, degree, type, link})
    return false
  }

  useEffect(() => {
    if (result && result.success) {
      router.replace(`/projects/${result.data._id}`)
    }
  }, [result])

  return (
    <Dashboard current="Projects">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">Create Project</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <form className="space-y-6" onSubmit={submitForm}>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <div className="mt-1">
                <input
                  id="title"
                  name="title"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={title} onChange={(e) => setTitle(e.target.value)}/>
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={description} onChange={(e) => setDescription(e.target.value)}/>
              </div>
            </div>

            <div>
              <label htmlFor="skills" className="block text-sm font-medium text-gray-700">
                Skills (comma-separated)
              </label>
              <div className="mt-1">
                <input
                  id="skills"
                  name="skills"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={skills} onChange={(e) => setSkills(e.target.value)}/>
              </div>
            </div>

            <div>
              <label htmlFor="faculty" className="block text-sm font-medium text-gray-700">
                Faculty
              </label>
              <div className="mt-1">
                <input
                  id="faculty"
                  name="faculty"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={faculty} onChange={(e) => setFaculty(e.target.value)}/>
              </div>
            </div>

            <div>
              <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
                Degree
              </label>
              <select
                id="degree"
                name="degree"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                value={degree} onChange={(e) => setDegree(e.target.value)}>

                <option value="">None</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select
                id="type"
                name="type"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                value={type} onChange={(e) => setType(e.target.value)}>

                <option value="Project">Project</option>
                <option value="Thesis">Thesis</option>
                <option value="Personal">Personal</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="link" className="block text-sm font-medium text-gray-700">
                Link
              </label>
              <div className="mt-1">
                <input
                  id="link"
                  name="link"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  value={link} onChange={(e) => setLink(e.target.value)}/>
              </div>
            </div>

            <div>
              <button onClick={submitForm}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Create project
              </button>
            </div>
          </form>
        </div>
      </main>
    </Dashboard>
  )
}
