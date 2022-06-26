export const apiUrl = 'http://localhost:3600'

export function makeApiUrl(path) {
  if (!path.startsWith('/')) {
    path = `/${path}`
  }
  return `${apiUrl}${path}`
}

export async function makeJsonResult(response) {
  let jsonResponse = null

  try {
    jsonResponse = await response.json()
  } catch (e) {}

  return {
    success: response.status >= 200 && response.status <= 299,
    status: response.status,
    data: jsonResponse,
  }
}

export async function fetchJson(path, method, data, token = null) {
  const response = await fetch(makeApiUrl(path), {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token ? `Bearer ${token}` : null,
    },
    body: JSON.stringify(data),
  })

  return await makeJsonResult(response)
}
