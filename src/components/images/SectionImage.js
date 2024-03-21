import { CldImage, getCldImageUrl } from 'next-cloudinary'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function SectionImage({ image }) {
  const [show, setShow] = useState(false)
  const url = getCldImageUrl({
    width: 'w_1',
    height: 'w_1',
    fit: 'true',
    src: image.path,
  })
  useEffect(() => {
    fetch(url).then((res) => {
      setShow(res.ok)
    })
  }, [url])
  return (
    <div className="p-3" style={{ width: '100%' }}>
      <div
        className="border p-5 rounded-2xl bg-primary-bg h-[100%] flex flex-col justify-between"
      >
        <div className="text-center">
          <p className="text-highlight-text text-2xl font-sans font-bold">
            {image.title}
          </p>
        </div>
        <div className="relative">
          <div className="flex justify-center items-center h-[100%]">
            {show ? (
              <CldImage
                className="rounded-xl w-full h-full"
                title={image.title}
                width="900"
                height="500"
                src={image.path}
                alt="description of image"
                blurDataURL="/H96_Header_Logo.png"
                placeholder="blur"
                fit
              />
            ) : (
              <Image
                src="/H96_Header_Logo.png"
                blurDataURL="/H96_Header_Logo.png"
                placeholder="blur"
                alt=""
                style={{
                  objectFit: 'contain',
                }}
                height={200}
                width={200}
              />
            )}
          </div>
        </div>
        <div className="text-right">
          <p className="text-primary-text text-base font-sans font-normal">
            Author: {image.author.username}
          </p>
        </div>
      </div>
    </div>
  )
}
