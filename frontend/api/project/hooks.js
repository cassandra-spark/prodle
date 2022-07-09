import { useState, useEffect, useMemo, useContext } from 'react'

import UserContext from '../user/context'
import { GetProjectRequest, GetProjectsRequest, CreateProjectRequest, GetProjectMembershipsRequest, GetMembershipUserProjectRequest, ApplyRequest, AcceptApplicantRequest, RejectApplicantRequest } from './requests'

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

export function useCreateProject() {
  const [result, setResult] = useState(null)
  const { user } = useContext(UserContext)

  const createProject = async (project) => {
    setResult(await CreateProjectRequest({...project, owner: user._id}))
  }

  return { createProject, result }
}

export function useMyMembershipStatus(projectId) {
  const { memberships, refetch } = useProjectMemberships(projectId)
  const { user } = useContext(UserContext)

  const status = useMemo(() => {
    if (!memberships || !user) {
      return null
    }

    const membership = memberships.find((membership) => membership.user == user._id)

    if (!membership) return "can apply"

    return membership.status
  }, [memberships, user])

  return { status, refetch }
}

export function useProjectMemberships(projectId) {
  const [result, setResult] = useState(null)

  const refetch = async () => {
    if (projectId) {
      setResult(await GetProjectMembershipsRequest({ projectId }))
    } else {
      setResult(null)
    }
  }

  useEffect(() => {
    refetch()
  }, [projectId])

  return { result, memberships: result?.data, refetch }
}

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
}

export function useApply(projectId) {
  const [result, setResult] = useState(null)
  const { user } = useContext(UserContext)

  const apply = async () => {
    setResult(await ApplyRequest({ projectId, userId: user._id }))
  }

  return { apply, result }
}

export function useAcceptApplicant() {
  const accept = async (membershipId) => {
    return await AcceptApplicantRequest({ membershipId })
  }

  return { accept }
}

export function useRejectApplicant() {
  const reject = async (membershipId) => {
    return await RejectApplicantRequest({ membershipId })
  }

  return { reject }
}
