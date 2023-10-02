// 'use client'

// import { useSession } from '@frontend/session'
import { useSession } from '@backend/session'

export default function Profile() {
  const session = useSession({ redirect: true })
  // console.log('session', session)
  return <div style={{color: 'red'}}>profile</div>
}
