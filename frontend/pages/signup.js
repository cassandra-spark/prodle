import { useState } from 'react'

import { useSignUp, useSignOut, useFullName, useIsSignedIn } from '../api/user/hooks'
import ApiErrorMessage from '../components/ApiErrorMessage'

export default function Login() {
  const { signUp, signUpResult } = useSignUp()
  const signOut = useSignOut()
  const signedInFullName = useFullName()
  const isSignedIn = useIsSignedIn()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Sign up
      </h1>


      { isSignedIn ? <>
        <p>Signed in as {signedInFullName}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </> : <>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="text" placeholder="Full name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <button onClick={() => signUp({username, password, fullName})}>Sign up</button>
        <ApiErrorMessage result={signUpResult} defaultMessage="There was an error signing up" />
      </> }
    </div>
  )
}
