'use client'

import { useEffect, useState } from 'react'
import SectionImage from './SectionImage'

export default function SectionImageList({ section }) {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch(`/api/section-images?section=${section}`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data)
      })
  }, [section])

    return (
      <div className="grid gap-1 grid-cols-2 justify-items-center">
        {images.map((image) => (
          // <div key={image._id}>
          // <CldImage
          //     width="960"
          //     height="600"
          //     src={image.path}
          //     sizes="100vw"
          //     alt="Description of my image"
          // />
          // <p>{image.title}</p>
          // <p>{image.username}</p>
          // <p>{image.createdAt}</p>
          // </div>
          <SectionImage key={image._id} image={image} />
        ))}
      </div>
    )
}
