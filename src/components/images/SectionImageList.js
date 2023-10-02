'use client'

import { CldImage } from 'next-cloudinary'
import { useEffect, useState } from 'react'

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
        <div>
        {images.map((image) => (
            <div key={image._id}>
            <CldImage
                width="960"
                height="600"
                src={image.path}
                sizes="100vw"
                alt="Description of my image"
            />
            <p>{image.title}</p>
            <p>{image.username}</p>
            <p>{image.createdAt}</p>
            </div>
        ))}
        </div>
    )
}
