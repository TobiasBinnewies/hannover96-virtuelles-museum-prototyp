'use client'

import { useEffect, useState } from 'react'
import SectionImage from './SectionImage'
import { getFetch } from '@/services/frontend/fetch'
import { use } from 'react'
import content from '../utils/section.content'

// Fetching images for all sections
const imagesFetch = { all: getFetch('/api/section-images?section=all') }
content.sections.forEach((section) => {
  imagesFetch[section.date] = 
  (async () => {
    const response = await fetch(
      `/api/section-images?section=${section.date}`,
      { next: { revalidate: 10*60 } },
    )
    const data = await response.json()
    return data
  })();
  // getFetch(
  //   `/api/section-images?section=${section.date}`,
  // )
})

export default function SectionImageList({ section, width }) {
  const images = use(imagesFetch[section])

  return (
    <div className="flex justify-center">
      <div
        className={`grid gap-1 grid-cols-${
          images.length < 2 ? '1' : '2'
        } justify-items-center`}
        style={{ width: width }}
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
