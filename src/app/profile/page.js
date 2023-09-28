'use client'

import { useSession } from '@frontend/session'
import UploadSectionImage from '@/components/images/UploadSectionImage'
// import { v2 as cloudinary } from 'cloudinary'
// import { CldImage } from 'next-cloudinary'

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDANARY_API_SECRET,
// })

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
      {/* <CldUploadButton uploadPreset="<Upload Preset>" /> */}
      {/* <CldImage
        width="960"
        height="600"
        src="section-image/newNameTest123"
        sizes="100vw"
        alt="Description of my image"
      /> */}
    </div>
  )
}
