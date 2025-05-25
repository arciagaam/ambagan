import { apiErrorHandler } from './apiErrorHandler'

type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

async function request<T>(
  method: FetchMethod,
  url: string,
  body?: any,
  options: RequestInit = {}
): Promise<T> {
  try {
    const res = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    })

    const isJson = res.headers.get('content-type')?.includes('application/json')
    const data = isJson ? await res.json() : null

    if (!res.ok) {
      throw new Error(data?.error || `Request failed with status ${res.status}`)
    }

    return data
  } catch (error) {
    const { message, status } = apiErrorHandler(error)
    throw { message, status }
  }
}

export const asyncFetch = {
  get: <T>(url: string, options?: RequestInit) => request<T>('GET', url, undefined, options),
  post: <T>(url: string, body?: any, options?: RequestInit) => request<T>('POST', url, body, options),
  put: <T>(url: string, body?: any, options?: RequestInit) => request<T>('PUT', url, body, options),
  delete: <T>(url: string, body?: any, options?: RequestInit) => request<T>('DELETE', url, body, options),
}
