const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''
const API_KEY = import.meta.env.VITE_API_KEY || ''

export async function submitInquiry(data) {
  const headers = {
    'Content-Type': 'application/json',
  }

  if (API_KEY) {
    headers['X-API-Key'] = API_KEY
  }

  const response = await fetch(`${API_BASE_URL}/api/v1/inquiries`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(errorBody.error || `Request failed with status ${response.status}`)
  }

  return response.json()
}
