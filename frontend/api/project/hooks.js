import { useState, useEffect, useContext } from 'react'

import UserContext from '../user/context'
import { GetProjectRequest, GetProjectsRequest, GetMembershipUserProjectRequest, ApplyRequest, AcceptApplicantRequest, RejectApplicantRequest } from './requests'

export function useProjects(initialFilters) {
  const [result, setResult] = useState(null)

  const refetch = async (filters) => {
    setResult(await GetProjectsRequest(filters))
  }

  useEffect(() => {
    refetch(initialFilters);
  }, [])

  return { result, projects: result?.data, refetch }
}

export function useProject(projectId) {
  const [result, setResult] = useState(null)

  const refetch = async () => {
    if (projectId) {
      setResult(await GetProjectRequest({ projectId }))
    } else {
      setResult(null)
    }
  }

  useEffect(() => {
    refetch()
  }, [projectId])

  return { result, project: result?.data, refetch }
}

//export function useTagList() {
  //const [result, setResult] = useState(null)

  //const refetch = async () => {
    //setResult(await GetTagListRequest())
  //}

  //useEffect(() => {
    //refetch();
  //}, [])

  //return { result, tags: result?.data, refetch }
//}

//export const APPLICATION_STATUS_UNKNOWN = "Unknown"
//export const APPLICATION_STATUS_MEMBER = "Member"
//export const APPLICATION_STATUS_APPLIED = "Applied"
//export const APPLICATION_STATUS_REJECTED = "Rejected"
//export const APPLICATION_STATUS_NOT_APPLIED = "Not applied"

export function useMembership(projectId) {
  const { user } = useContext(UserContext)

  const [result, setResult] = useState(null)

  const refetch = async () => {
    if (projectId) {
      setResult(await GetMembershipUserProjectRequest({ userId: user.id, projectId }))
    } else {
      setResult(null)
    }
  }

  useEffect(() => {
    refetch()
  }, [projectId])

  return { result, project: result?.data, refetch }

  //const username = user.username

  //if (!user || !project) return APPLICATION_STATUS_UNKNOWN
  //if (project.members.some((user) => user.username == username)) return APPLICATION_STATUS_MEMBER
  //if (project.applicants.some((user) => user.username == username)) return APPLICATION_STATUS_APPLIED
  //if (project.rejects.some((user) => user.username == username)) return APPLICATION_STATUS_REJECTED

  //return APPLICATION_STATUS_NOT_APPLIED
}

export function useApply(projectId) {
  const [result, setResult] = useState(null)
  const { user } = useContext(UserContext)

  const apply = async () => {
    setResult(await ApplyRequest({ projectId, user }, user.token))
  }

  return { apply, result }
}

export function useAcceptApplicant(projectId) {
  const [result, setResult] = useState(null)
  const { user } = useContext(UserContext)

  const accept = async (userId) => {
    setResult(await AcceptApplicantRequest({ projectId, userId }, user.token))
  }

  return { accept, result }
}

export function useRejectApplicant(projectId) {
  const [result, setResult] = useState(null)
  const { user } = useContext(UserContext)

  const reject = async (userId) => {
    setResult(await RejectApplicantRequest({ projectId, userId }, user.token))
  }

  return { reject, result }
}
