'use client'

import { useSession } from '@frontend/session'
import UploadSectionImage from '@/components/images/UploadSectionImage'
import { CldImage } from 'next-cloudinary'

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
      <UploadSectionImage section={1} />
      <CldImage
        width="960"
        height="600"
        src="section-image/Test02"
        sizes="100vw"
        alt="Description of my image"
      />
    </div>
  )
}
