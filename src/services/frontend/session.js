import { useRouter } from 'next/navigation'
import { useCookies } from 'react-cookie'
// import { use } from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'

// const fetchSession = async () => {
//   const response = await fetch(
//     process.env.NEXT_PUBLIC_URL + '/api/secure/session',
//     { cache: 'no-store' },
//   )
//   const data = await response.json()
//   return data
// }

// const getSession = fetchSession()

// export function useSession({ redirect } = { redirect: true }) {
//   const [cookies, setCookie, removeCookie] = useCookies(['session-token'])

//   const data = use(getSession)
//   const [session, setSession] = useState(data.session)
//   useEffect(() => {
//     fetchSession().then((data) => {
//       setSession(data.session)
//     })
//   }, [cookies['session-token']])
//   return {
//     session: session,
//     logout: () => {},
//   }
// }

export function useLogout() {
  const [cookies, setCookie, removeCookie] = useCookies(['session-token'])
  const router = useRouter()
  return () => {
    removeCookie('session-token')
    // setSession(undefined)
    router.push('/signin')
    router.refresh()
  }
}
