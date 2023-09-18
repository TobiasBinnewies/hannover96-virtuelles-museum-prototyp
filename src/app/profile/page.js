'use client'

import { useSession } from '@frontend/session'

export default function Profile() {
  const session = useSession()
  console.log(session)
  return <div>profile</div>
}
