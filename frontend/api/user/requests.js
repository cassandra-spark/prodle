import { fetchJson } from '../helpers'

export function SignInRequest(data) {
  return fetchJson('login', 'POST', data)
}

export function SignUpRequest(data) {
  return fetchJson('users', 'POST', data)
}

export function UpdateProfileRequest(data) {
  return fetchJson('users', 'PUT', data)
}

export function GetUserRequest(data) {
  return fetchJson(`users/${data.userId}`, 'GET')
}

export function GetUserMembershipsRequest(data) {
  return fetchJson(`memberships/users/${data.userId}`, 'GET')
}
