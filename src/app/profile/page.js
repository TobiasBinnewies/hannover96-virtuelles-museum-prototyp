'use client'

import { useSession } from '@frontend/session'
import UploadImage from '@/components/images/UploadImage'
// import { useSession } from '@backend/session'

export default function Profile() {
  const session = useSession({ redirect: true })
  // console.log('session', session)
  return (
    <div>
      profile
      <br />
      <br />
      <br />
      <br />
      <br />
      <UploadImage />
    </div>
  )
}
