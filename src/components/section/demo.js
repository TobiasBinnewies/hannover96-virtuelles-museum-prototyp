'use client'
import SectionTitle from '@/components/utils/SectionTitle'
import SectionSubtitle from '@/components/utils/SectionSubtitle'
import SectionText from '@/components/utils/SectionText'
import content from '../utils/section.content'
import MyComponent from '@/components/section/SectionModal'
import SectionModal from '@/components/section/SectionModal'

export default function DemoSection() {
  return (
    <div className={'bg-amber-50 h-screen flex justify-center'}>
      <div className={'w-[50%] m-auto'}>
        <SectionSubtitle text={content.subtitle} />
        <SectionTitle text={content.title} />
        <SectionText text={content.text} />
        <SectionModal />
      </div>
    </div>
  )
}