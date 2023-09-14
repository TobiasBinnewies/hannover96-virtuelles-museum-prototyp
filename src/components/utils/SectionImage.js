import Image from 'next/image'

export default function SectionImage(props) {
  return (
    <div className={'w-[50%] m-auto'}>
      <div className={'flex justify-center items-center mt-8'}>
        <Image
          src={props.image}
          width={500}
          height={500}
          alt={props.alt}
          className={'shadow-2xl'}

        />
      </div>
      <p className={'text-black font-normal font-sans'}>{props.subtitle}</p>
    </div>
  )
}