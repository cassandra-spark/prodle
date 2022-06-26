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
