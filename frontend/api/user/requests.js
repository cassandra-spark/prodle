import { fetchJson } from '../helpers'

export function SignInRequest(data) {
  return fetchJson(`login`, 'POST', data)
}

export function SignUpRequest(data) {
  return fetchJson(`users`, 'POST', data)
}

export function UpdateProfileRequest({ userId }, data) {
  return fetchJson(`users/${userId}`, 'PUT', data)
}

export function GetUserRequest({ userId }) {
  return fetchJson(`users/${userId}`, 'GET')
}

export function GetUserMembershipsRequest({ userId }) {
  return fetchJson(`memberships/users/${userId}`, 'GET')
}
