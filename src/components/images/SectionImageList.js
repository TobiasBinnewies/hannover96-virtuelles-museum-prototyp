'use client'

import { useEffect, useState } from 'react'
import SectionImage from './SectionImage'

export default function SectionImageList({ section, width }) {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch(`/api/section-images?section=${section}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data)
      })
  }, [section])

  return (
    <div className='flex justify-center'>
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
