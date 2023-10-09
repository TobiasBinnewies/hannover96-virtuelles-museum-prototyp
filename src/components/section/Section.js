'use client'
import SectionTitle from '@/components/utils/SectionTitle'
import SectionSubtitle from '@/components/utils/SectionSubtitle'
import SectionText from '@/components/utils/SectionText'
import SectionModal from '@/components/section/SectionModal'

export default function Section(props) {
  const section = props.obj

  return (
    <div className={'bg-amber-50 h-screen flex justify-center'}>
      <div className={'w-[50%] m-auto z-30'}>
        <SectionSubtitle text={section.date} />
        <SectionTitle text={section.title} />
        <SectionText text={section.description || section.content} />
        <SectionModal obj={section} />
      </div>
      {props.model}
    </div>
  )
}
