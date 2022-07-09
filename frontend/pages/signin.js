import { useState } from 'react'
import { useRouter } from 'next/router'

import { useSignIn, useIsSignedIn } from '../api/user/hooks'
import ApiErrorMessage from '../components/ApiErrorMessage'

export default function Signin() {
  const router = useRouter()

  const { signIn, result: signInResult } = useSignIn()
  const isSignedIn = useIsSignedIn()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    signIn(username, password)
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
              <h2 className="mt-6 text-center text-3xl font-extrabold text-red-600">Sign in to your account</h2>
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
              </div>

              <div>
                <button onClick={() => signIn(username, password)}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <ApiErrorMessage result={signInResult} defaultMessage="There was an error signing in" />
          </div>
        </div>
      </div>
    </>
  )
}
