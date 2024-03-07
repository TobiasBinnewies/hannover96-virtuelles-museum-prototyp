'use client'
import SectionTitle from '@/components/utils/SectionTitle'
import SectionSubtitle from '@/components/utils/SectionSubtitle'
import SectionText from '@/components/utils/SectionText'
import SectionModal from '@/components/section/SectionModal'
import AR_Modal from '@components/section/AR_Modal'
// import Image from '@/components/section/Image'
import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'
import models from '@components/models/models'

export default function Section({
  obj: section,
  session,
  model,
  arlink,
  images,
}) {
  const mediaQueryTablet = window.matchMedia('(min-width: 1024px)')
  const mediaQueryDesktop = window.matchMedia('(min-width: 1400px)')
  const mediaQueryHeight = window.matchMedia('(min-height: 600px)')
  const [titleSize, setTitleSize] = useState('4xl')

  useEffect(() => {
    if (mediaQueryTablet.matches) {
      setTitleSize('4xl')
    } else if(mediaQueryDesktop.matches){
      setTitleSize('6xl')
    }else {
      setTitleSize('2xl')
    }
  })

  return (
    <div
      id={section.date.slice(-4)}
      className={'bg-primary-bg h-screen flex justify-center items-center childElement container mx-auto'}
    >
      {mediaQueryHeight.matches ? <div
        className={
          'w-[70%] left-8 lg:left-20 w-[60%] relative tablet:flex z-30 bg-gray-200 rounded-2xl p-2 shadow-2xl h-[50vh]'
        }
      >
        <div>
          <SectionSubtitle text={section.date} />
          <SectionTitle title={section.title} size={titleSize} padding="6px" />
          <SectionText text={section.description || section.content} />
          <Suspense fallback={<p>Loading Modal...</p>}>
            {section.content &&
            <SectionModal session={session} obj={section} images={images} />}
          </Suspense>
          <Suspense fallback={<p>Loading ARModel...</p>}>
            {arlink != null ? <AR_Modal arlink={arlink} /> : <div />}
          </Suspense>
        </div>
        <div
          className={
            'flex right-0 items-center justify-center desktop:justify-normal h-[25vh] desktop:w-[30%]'
          }
        >
          <Suspense fallback={<p>Loading ARModel...</p>}>{model !== null ? model : models.Model_Placeholder}</Suspense>
        </div>
      </div>
        :
      <div className={'w-[50%} relative md:flex z-30 bg-red-300 p-3 rounded-2xl'}>Bitte hochkant verwenden und Seite neu laden</div>
      }

    </div>
  )
}
