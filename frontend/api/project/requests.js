import { fetchJson } from '../helpers'

export function GetProjectsRequest(filters) {
  if (filters.query) {
    return fetchJson(`projects?query=${encodeURIComponent(filters.query)}`, 'GET')
  }
  return fetchJson(`projects`, 'GET')
}

export function GetProjectRequest({ projectId }) {
  return fetchJson(`projects/${projectId}`, 'GET')
}

export function CreateProjectRequest(project) {
  return fetchJson(`projects`, 'POST', project)
}

export function DeleteProjectRequest({ projectId }) {
  return fetchJson(`projects/${projectId}`, 'DELETE')
}

export function GetProjectMembershipsRequest({ projectId }) {
  return fetchJson(`memberships/projects/${projectId}`, 'GET')
}

export function GetUserMembershipsRequest({ userId }) {
  return fetchJson(`memberships/users/${userId}`, 'GET')
}

export function GetMembershipUserProjectRequest({ userId, projectId }) {
  return fetchJson(`memberships/user-project/${userId}/${projectId}`, 'GET')
}

export function ApplyRequest({ projectId, userId }) {
  return fetchJson(`memberships/projects/${projectId}`, 'POST', { userId })
}

export function AcceptApplicantRequest({ membershipId }) {
  return fetchJson(`memberships/${membershipId}`, 'PUT', { status: "accepted" })
}

export function RejectApplicantRequest({ membershipId }) {
  return fetchJson(`memberships/${membershipId}`, 'PUT', { status: "rejected" })
}
