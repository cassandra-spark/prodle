import { useState, useContext } from 'react'

import UserContext from './context'
import { SignInRequest, SignUpRequest, UpdateProfileRequest } from './requests'

export function useSignIn() {
  const { setUser } = useContext(UserContext)
  const [result, setResult] = useState(null)

  const signIn = async (username, password) => {
    const result = await SignInRequest({ username, password })

    if (result.success) {
      setUser(result.data)
    }
    
    setResult(result)
  }
  
  return { signIn, result }
}

export function useSignOut() {
  const { clearUser } = useContext(UserContext)

  return async () => {
    clearUser()
  }
}

export function useUser() {
  const { user } = useContext(UserContext)

  return user
}

export function useUsername() {
  const { user } = useContext(UserContext)

  return user?.username
}

export function useFullName() {
  const { user } = useContext(UserContext)

  return user?.fullName
}

export function useIsSignedIn() {
  const { user } = useContext(UserContext)

  return user?.token != null 
}

export function useSignUp() {
  const { signIn } = useSignIn()
  const [result, setResult] = useState(null)

  const signUp = async (data) => {
    const result = await SignUpRequest(data)

    if (result.success) {
      await signIn(data.username, data.password)
    }

    setResult(result)
  }

  return { signUp, result }
}

export function useUpdateProfile() {
  const { user } = useContext(UserContext)
  const [result, setResult] = useState(null)

  const updateProfile =  async (data) => {
    setResult(await UpdateProfileRequest(data, user.token))
  }

  return { updateProfile, result }
}
