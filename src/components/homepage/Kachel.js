import Link from 'next/link'
import Image from 'next/image'

export default function Kachel({ title, image, url }) {
  return (
    <Link href={url}>
      <div
        className={
          'lg:w-[12vw] w-[50vw] lg:h-[70vh] h-[20vh] bg-cta-bg mx-5 my-1 lg:-skew-x-12 lg:skew-y-0 -skew-y-6 overflow-hidden border-4 relative'
        }
        style={{ minWidth: '100px' }}
      >
        <div
          className="h-full lg:w-[25vw] lg:-translate-x-20 lg:skew-x-12 lg:-skew-y-0 skew-y-6 bg-white lg:scale-100 scale-125 text-center w-full bg-no-repeat bg-center bg-cover absolute"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="lg:skew-x-12 lg:-skew-y-0 skew-y-6 absolute w-full justify-center flex left-0 lg:bottom-20 scale-0 lg:scale-100">
          <Title title={title} />
        </div>
        <div className="lg:skew-x-12 lg:-skew-y-0 skew-y-6 h-full w-full flex absolute lg:hidden items-center justify-center">
          <Title title={title} />
        </div>
      </div>
    </Link>
  )
}

function Title({title}) {
    return (
        <div className="w-3/4 min-h-min p-3 rounded bg-blue-500 text-center">
          {title}
        </div>
    )
}
