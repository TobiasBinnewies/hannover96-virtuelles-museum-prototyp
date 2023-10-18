'use client'
import SectionTitle from '@/components/utils/SectionTitle'
import SectionSubtitle from '@/components/utils/SectionSubtitle'
import SectionText from '@/components/utils/SectionText'
import SectionModal from '@/components/section/SectionModal'
import AR_Modal from '@components/section/AR_Modal'
// import Image from '@/components/section/Image'
import Image from 'next/image'

export default function Section({obj: section, session, model, arlink, images}) {
  return (
    <div
      id={section.date.slice(-4)}
      className={'bg-primary-bg h-screen flex justify-center childElement'}
    >
      <div className={'w-[50%] z-30 mt-auto mb-auto ml-[20vw]'}>
        <SectionSubtitle text={section.date} />
        <SectionTitle title={section.title} padding='6px' />
        <SectionText text={section.description || section.content} />
        <SectionModal session={session} obj={section} images={images} />
        {arlink != null ? <AR_Modal arlink={arlink} /> : <div />}
      </div>
      {model}
    </div>
  )
}
