import { useState } from 'react'
import { useRouter } from 'next/router'

import { useSignUp, useIsSignedIn } from '../api/user/hooks'
import ApiErrorMessage from '../components/ApiErrorMessage'

export default function Login() {
  const router = useRouter()

  const { signUp, signUpResult } = useSignUp()
  const isSignedIn = useIsSignedIn()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [email, setEmail] = useState('')
  const [userType, setUserType] = useState('')
  const [degree, setDegree] = useState('')
  const [major, setMajor] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    signUp({username, password, fullName, birthDate, email, userType, degree, major})
    return false
  }

  if (isSignedIn) {
    router.replace(`/`)
    return (<></>)
  }

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md mb-10">
              <img
                className="mx-auto h-12 w-auto"
                src="prodle.png"
                alt="Prodle"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-red-600">Create an account</h2>
            </div>

            <form className="space-y-6" onSubmit={submitForm}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="username"
                    autoComplete="username"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
              </div>

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full name
                </label>
                <div className="mt-1">
                  <input
                    id="fullName"
                    name="fullName"
                    type="fullName"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
              </div>

              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Birthdate
                </label>
                <div className="mt-1">
                  <input
                    id="birthDate"
                    name="birthDate"
                    type="date"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    value={birthDate} onChange={(e) => setBirthDate(e.target.value)}/>
                </div>
              </div>

              <div>
                <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  id="userType"
                  name="userType"
                  required
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
                  value={userType} onChange={(e) => setUserType(e.target.value)}>

                  <option value="Student">Student</option>
                  <option value="Student Assistant">Student Assistant</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Professor">Professor</option>
                </select>
              </div>

              <div>
                <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
                  Degree
                </label>
                <select
                  id="degree"
                  name="degree"
                  required
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
                <label htmlFor="major" className="block text-sm font-medium text-gray-700">
                  Major
                </label>
                <div className="mt-1">
                  <input
                    id="major"
                    name="major"
                    type="major"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    value={major} onChange={(e) => setMajor(e.target.value)}/>
                </div>
              </div>

              <div>
                <button onClick={submitForm}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Sign up
                </button>
              </div>
            </form>

            <ApiErrorMessage result={signUpResult} defaultMessage="There was an error signing up" />
          </div>
        </div>
      </div>
    </>
  )
}
