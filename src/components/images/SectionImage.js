import { CldImage, getCldImageUrl } from 'next-cloudinary'
import Image from 'next/image'
import demo_one_img from './H96.jpeg'
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
    <div className="p-3">
      <div
        className="border p-5 rounded-2xl bg-white"
        style={{ width: '30vw' }}
      >
        <div className="text-center">
          <p className="text-emerald-500 text-2xl font-sans font-bold">
            {image.title}
          </p>
        </div>
        <div className="relative h-96">
          {show ? (
            <CldImage
              className="rounded-xl w-full h-full"
              title="title"
              width="900"
              height="500"
              src={image.path}
              alt="Description of my image"
              blurDataURL="/H96_Header_Logo.png"
              placeholder="blur"
              fit
            />
          ) : (
            // <Image width="900" height="200" fit src={url} />
            <Image
              // width="1000"
              // height="200"
              src="/H96_Header_Logo.png"
              blurDataURL="/H96_Header_Logo.png"
              placeholder="blur"
              alt=""
              //   fill="responsive"
              style={{
                objectFit: 'contain',
              }}
              layout="fill"
            />
          )}
        </div>
        <div className="text-right">
          <p className="text-black text-base font-sans font-normal">
            Author: {image.username}
          </p>
        </div>
      </div>
    </div>
  )
}