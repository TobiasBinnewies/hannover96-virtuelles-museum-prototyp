import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'

export function useSession({ redirect } = { redirect: true }) {
  const [cookies, setCookie, removeCookie] = useCookies(['session-token'])
  const [session, setSession] = useState(undefined)
  const router = useRouter()
  useEffect(() => {
    fetch('/api/secure/session')
      .then((res) => {
        if (res.status === 401) {
          if (redirect) {
            router.push('/signin')
          }
          return { message: 'Unauthorized' }
        }
        if (res.status !== 200) {
          return { message: 'Unauthorized' }
        }
        return res.json()
      })
      .then((data) => {
        if (data.message === 'Unauthorized') {
          setSession(undefined)
          return
        }
        setSession(data.session)
      })
  }, [cookies])
  return {
    session,
    logout: () => {
      removeCookie('session-token')
      router.push('/signin')
    },
  }
}
