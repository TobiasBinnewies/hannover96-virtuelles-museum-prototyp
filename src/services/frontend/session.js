import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export function useSession({ redirect } = { redirect: true }) {
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
  }, [])
  return session
}
