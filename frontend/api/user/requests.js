import { fetchJson } from '../helpers'

export function SignInRequest(data) {
  return fetchJson('login', 'POST', data)
}

export function SignUpRequest(data) {
  return fetchJson('user', 'POST', data)
}

export function UpdateProfileRequest(data, token) {
  return fetchJson('user', 'PUT', data, token)
}

export function GetUserRequest(data, token) {
  return fetchJson(`users/${data.userId}`, 'GET', null, token)
}

export function GetUserProjectsRequest(data) {
  //return GetProjectsMockData()
  return fetchJson(`users/${data.username}/projects`, 'GET', data)
}
