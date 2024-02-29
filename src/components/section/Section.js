'use client'
import SectionTitle from '@/components/utils/SectionTitle'
import SectionSubtitle from '@/components/utils/SectionSubtitle'
import SectionText from '@/components/utils/SectionText'
import SectionModal from '@/components/section/SectionModal'
import AR_Modal from '@components/section/AR_Modal'
// import Image from '@/components/section/Image'
import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'

export default function Section({
  obj: section,
  session,
  model,
  arlink,
  images,
}) {
  const mediaQuery = window.matchMedia("(min-width: 640px)")
  const [titleSize, setTitleSize] = useState("4xl")

  useEffect(() => {
    if(mediaQuery.matches) {
      setTitleSize("6xl")
    }else{
      setTitleSize("2xl")
    }
  })

  return (
    <div
      id={section.date.slice(-4)}
      className={'bg-primary-bg h-screen md:flex items-center childElement'}
    >
      <div className={'w-[70%] md:w-[70%] md:left-64 relative md:flex top-36 md:top-24 z-30 ml-auto mr-10 md:mr-auto'}>
        <div>
        <SectionSubtitle text={section.date} />
        <SectionTitle title={section.title} size={titleSize} padding="6px" />
        <SectionText text={section.description || section.content} />
        <Suspense fallback={<p>Loading Modal...</p>}>
          <SectionModal session={session} obj={section} images={images} />
        </Suspense>
        {/* <Suspense fallback={<p>Loading ARModel...</p>}>
          {arlink != null ? <AR_Modal arlink={arlink} /> : <div />}
        </Suspense>
        </div>
        <div className={"flex right-0 items-center justify-center md:justify-normal h-[25vh] md:w-[30%]"}>
          <Suspense fallback={<p>Loading ARModel...</p>}>{model}</Suspense>
        </div>
      </div>
    </div>
  )
}
