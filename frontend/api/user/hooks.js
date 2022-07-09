import { useState, useEffect, useContext } from 'react'

import UserContext from './context'
import { SignInRequest, SignUpRequest, UpdateProfileRequest, GetUserRequest, GetUserProjectsRequest } from './requests'

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

export function useCurrentUser() {
  const { user } = useContext(UserContext)

  return user
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

export function useUser(userId) {
  const [result, setResult] = useState(null)

  const refetch = async () => {
    if (userId) {
      setResult(await GetUserRequest({ userId }))
    } else {
      setResult(null)
    }
  }

  useEffect(() => {
    refetch()
  }, [userId])

  return { result, user: result?.data, refetch }
}

export function useUserProjects(username) {
  const [result, setResult] = useState(null)

  const refetch = async () => {
    if (username) {
      setResult(await GetUserProjectsRequest({ username }))
    } else {
      setResult(null)
    }
  }

  useEffect(() => {
    refetch()
  }, [username])

  return { result, projects: result?.data, refetch }
}
