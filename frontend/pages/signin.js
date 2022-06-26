import { useState } from 'react'

import { useSignIn, useSignOut, useUsername, useIsSignedIn } from '../api/user/hooks'
import ApiErrorMessage from '../components/ApiErrorMessage'

export default function Login() {
  const { signIn, result: signInResult } = useSignIn()
  const signOut = useSignOut()
  const signedInUsername = useUsername()
  const isSignedIn = useIsSignedIn()
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Log in
      </h1>


      { isSignedIn ? <>
        <p>Signed in as {signedInUsername}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </> : <>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => signIn(username, password)}>Sign in</button>
        <ApiErrorMessage result={signInResult} defaultMessage="There was an error signing in" />
      </> }
    </div>
  )
}
