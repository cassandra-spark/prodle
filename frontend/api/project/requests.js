import { fetchJson } from '../helpers'

export function GetProjectsRequest(filters) {
  if (filters.query) {
    return fetchJson(`projects?query=${escapeHTMLElements(filters.query)}`, 'GET')
  }
  return fetchJson(`projects`, 'GET')
}

export function GetProjectRequest({ projectId }) {
  return fetchJson(`projects/${projectId}`, 'GET')
}

export function CreateProjectRequest(project) {
  return fetchJson(`projects`, 'POST', project)
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

export function ApplyRequest({ projectId, userId }, token) {
  return fetchJson(`memberships/projects/${projectId}`, 'POST', { userId }, token)
}

export function AcceptApplicantRequest({ membershipId }, token) {
  return fetchJson(`memberships/${membershipId}`, 'PUT', { status: "accepted" }, token)
}

export function RejectApplicantRequest({ membershipId }, token) {
  return fetchJson(`memberships/${membershipId}`, 'PUT', { status: "rejected" }, token)
}
