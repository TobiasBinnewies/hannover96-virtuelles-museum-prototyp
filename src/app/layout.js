import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@components/navbar/Navbar'
import Image from 'next/image'
import { getImages } from '@/services/backend/section-images'
// import { getUserAuth } from '@/services/backend/auth'
import { getSession } from '@/services/backend/session'

const font = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hannover 96 - Virtuelles Museum',
  description:
    'Eine digitale Reise durch 128 Jahre Geschichte des Hannover 96 Sportvereins.',
}

export default async function RootLayout(props) {
  const images = await getImages('all')
  const session = await getSession()

  props.params.images = images
  props.params.session = session

  return (
    <html lang="de">
      <body className={font.className}>
        <Navbar
          session={session}
          buttons={[
            {
              title: 'Timeline',
              destination: '/timeline',
              icon: 'reel-svgrepo-com.svg',
            },
            {
              title: 'Images',
              destination: '/section-images',
              icon: 'gallery-send-svgrepo-com.svg',
            },
            {
              title: 'Matterport',
              destination: 'https://my.mpskin.com/de/tour/rh179agyah',
              icon: 'monitor-camera-svgrepo-com.svg',
            },
          ]}
          style={{ position: 'sticky' }}
        />
        {props.children}
      </body>
    </html>
  )
}
