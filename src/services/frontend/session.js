import { useRouter } from 'next/navigation'
import { use } from 'react'
import { useCookies } from 'react-cookie'
import { useState } from 'react'
import { useEffect } from 'react'
import next from 'next'

const fetchSession = async () => {
  const response = await fetch('/api/secure/session', {
    next: { revalidate: 0 },
  })
  const data = await response.json()
  return data
}

const getSession = fetchSession()

export function useSession({ redirect } = { redirect: true }) {
  const [cookies, setCookie, removeCookie] = useCookies(['session-token'])
  const router = useRouter()
  const data = use(getSession)
  const [session, setSession] = useState(data.session)
  useEffect(() => {
    fetchSession().then((data) => {
      setSession(data.session)
    })
  }, [cookies['session-token']])
  return {
    session: session,
    logout: () => {
      removeCookie('session-token')
      // setSession(undefined)
      router.push('/signin')
      router.refresh()
    },
  }
}
