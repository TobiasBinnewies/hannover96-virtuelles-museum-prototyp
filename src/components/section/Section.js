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
      setTitleSize("4xl")
    }
  })

  return (
    <div
      id={section.date.slice(-4)}
      className={'bg-primary-bg h-screen sm:flex items-center childElement'}
    >
      <div className={'w-[70%] sm:w-[70%] sm:left-64 relative sm:flex top-36 sm:top-24 z-30 ml-auto mr-auto'}>
        <div>
        <SectionSubtitle text={section.date} />
        <SectionTitle title={section.title} size={titleSize} padding="6px" />
        <SectionText text={section.description || section.content} />
        <Suspense fallback={<p>Loading Modal...</p>}>
          <SectionModal session={session} obj={section} images={images} />
        </Suspense>
        <Suspense fallback={<p>Loading ARModel...</p>}>
          {arlink != null ? <AR_Modal arlink={arlink} /> : <div />}
        </Suspense>
        </div>
        <div className={"sm:flex right-0 sm:items-center"}>
          <Suspense fallback={<p>Loading ARModel...</p>}>{model}</Suspense>
        </div>
      </div>
    </div>
  )
}
