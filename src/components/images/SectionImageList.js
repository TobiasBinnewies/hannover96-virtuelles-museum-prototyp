'use client'

import SectionImage from './SectionImage'
// import { getFetch } from '@/services/frontend/fetch'
import { use } from 'react'
import content from '../utils/section.content'
import { getImages } from '@/services/backend/section-images'
// import { getImages } from '@/services/backend/section-images'

// Fetching images for all sections
// const imagesFetch = getImages('all')
//   all: 
  
  // getFetch(
  //   // process.env.NEXT_PUBLIC_URL + 
  //   'api/section-images?section=all',
  // )

// content.sections.forEach((section) => {
//   // console.log(process.env.NEXT_PUBLIC_URL)
//   imagesFetch[section.date] = 
//   getImages(section.date)
//   // (async () => {
//   //   const response = await fetch(
//   //     process.env.NEXT_PUBLIC_URL +
//   //       `/api/section-images?section=${section.date}`,
//   //     { next: { revalidate: 10 * 60 } },
//   //   )
//   //   const data = await response.json()
//   //   return data
//   // })();
//   // getFetch(
//   //   `/api/section-images?section=${section.date}`,
//   // )
// })

export default function SectionImageList({ section, width, images: imagesAll }) {
  const images = (imagesAll || []).filter((image) => section === 'all' ? true : image.section === section)
  return (
    <div className="flex justify-center">
      <div
        className={`grid gap-1 justify-items-center`}
        style={{
          width: width,
          gridTemplateColumns: `repeat(${images.length < 2 ? '1' : '2'}, minmax(0, 1fr))`,
        }}
      >
        {images.map((image) => (
          <SectionImage
            key={image._id}
            image={image}
            style={{ with: `calc(${width} / 2)` }}
          />
        ))}
      </div>
    </div>
  )
}
