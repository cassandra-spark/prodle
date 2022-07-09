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

export function GetMembershipUserProjectRequest({ userId, projectId }) {
  return fetchJson(`memberships/user-project/${userId}/${projectId}`, 'GET')
}

//export function GetTagListRequest() {
  //return GetTagListMockData()
  ////return fetchJson(`tags`, 'GET')
//}

export function ApplyRequest({ projectId, userId }, token) {
  return fetchJson(`membershipsprojects/${projectId}`, 'POST', { userId }, token)
}

export function AcceptApplicantRequest({ membershipId }, token) {
  return fetchJson(`memberships/${membershipId}`, 'POST', { status: "accepted" }, token)
}

export function RejectApplicantRequest({ membershipId }, token) {
  return fetchJson(`memberships/${membershipId}`, 'POST', { status: "rejected" }, token)
}
