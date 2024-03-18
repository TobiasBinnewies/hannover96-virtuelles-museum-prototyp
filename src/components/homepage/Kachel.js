import Link from 'next/link'

export default function Kachel({ title, image, url }) {
  return (
    <Link href={url}>
      <div
        className={
          'lg:w-[15vw] w-[50vw] lg:h-[70vh] h-[20vh] bg-cta-bg mx-5 my-1 lg:-skew-x-12 lg:skew-y-0 -skew-y-6 overflow-hidden border-4 relative border-black hover:scale-105 transition-all'
        }
        style={{ minWidth: '100px' }}
      >
        <div
          className="h-[calc(100%*1.1)] lg:w-[calc(100%*2)] lg:-translate-x-[25%] lg:skew-x-12 lg:-skew-y-0 skew-y-6 bg-white lg:scale-100 scale-125 text-center w-full bg-no-repeat bg-center bg-cover absolute"
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
      <div className="bg-white bg-opacity-80 text-black rounded-2xl text-center p-4 mt-2 ml-auto mr-auto w-3/4 font-bold">
        {title}
      </div>
    )
}
