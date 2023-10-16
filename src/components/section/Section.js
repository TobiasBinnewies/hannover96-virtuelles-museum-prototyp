'use client'
import SectionTitle from '@/components/utils/SectionTitle'
import SectionSubtitle from '@/components/utils/SectionSubtitle'
import SectionText from '@/components/utils/SectionText'
import SectionModal from '@/components/section/SectionModal'
import AR_Modal from '@components/section/AR_Modal'

export default function Section(props) {
  const section = props.obj

  return (
    <div className={'bg-amber-50 h-screen flex justify-center childElement'}>
      <div className={'w-[50%] z-30 mt-auto mb-auto ml-[20vw]'}>
        <SectionSubtitle text={section.date} />
        <SectionTitle text={section.title} />
        <SectionText text={section.description || section.content} />
        <SectionModal obj={section} />
        {props.arlink != null ? <AR_Modal arlink={props.arlink}/> : <div/>}
      </div>
      {props.model}
    </div>
  )
}
