import Router from 'next/router'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

async function sessionLogin(username, password, setCookie) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }
  const res = await fetch('api/login', requestOptions)

  const data = await res.json()

  if (!res.ok) {
    const getErrorMessage = () => {
      switch (data.message) {
        case 'CredentialsSignin':
          return 'Invalid username or password'
        case 'connect ETIMEDOUT':
          return 'No conncetion to database'
        default:
          return data.message
      }
    }
    return { message: getErrorMessage(), ok: false }
  }

  // changeColors(data.colors);

  setCookie('session-token', data.token)

  return { ok: true }
}

function sessionLogout(removeCookie) {
  removeCookie('session-token')
  // changeColors(getColors());
  Router.push('/login')
}

async function makeSecureRequest(
  [cookies, setCookie, removeCookie],
  type,
  url,
  body,
) {
  const token = cookies['session-token']
  if (!token) {
    return { ok: false, message: 'No token in cookies' }
  }
  const requestOptions = () => {
    switch (type) {
      case 'GET':
        return {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      case 'POST':
        return {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      case 'PUT':
        return {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      case 'DELETE':
        return {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      case 'UPLOAD':
        return {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body,
        }
      default:
        return undefined
    }
  }

  const res = await fetch(`/api/secure/${url}`, requestOptions())
  const data = await res.json()

  if (res.status === 400) {
    return { ok: false, message: data.message }
  }

  if (res.status > 400 && res.status < 500) {
    sessionLogout(removeCookie)
    return { ok: false, message: 'Session expired' }
  }

  if (data.token) {
    removeCookie('session-token')
    setCookie('session-token', data.token)
  }
  return { ...data, ok: true }
}

export function useLogin() {
  const [cookies, setCookie, removeCookie] = useCookies(['session-token'])

  const login = async (username, password) => {
    return await sessionLogin(username, password, setCookie)
  }

  return login
}

export function useLogout() {
  const [cookies, setCookie, removeCookie] = useCookies(['session-token'])

  return () => sessionLogout(removeCookie)
}

export function useSession(serverSession) {
  if (serverSession !== undefined) {
    return serverSession
  }
  const [session, setSession] = useState(null)
  const [cookies, setCookie, removeCookie] = useCookies(['session-token'])

  useEffect(() => {
    makeSecureRequest(
      [cookies, setCookie, removeCookie],
      'GET',
      'session',
    ).then((session) => {
      setSession(session.ok ? session : undefined)
    })
  }, [cookies])
  return session
}

export function useSecureRequest() {
  const [cookies, setCookie, removeCookie] = useCookies(['session-token'])

  return async (type, url, body) => {
    return await makeSecureRequest(
      [cookies, setCookie, removeCookie],
      type,
      url,
      body,
    )
  }
}
