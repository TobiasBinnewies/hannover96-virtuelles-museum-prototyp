'use client'

import content from '@/components/utils/section.content'
import TimelineSlider from '@/components/timeline/TimelineSlider'
import SectionList from '@/components/section/SectionList'

export default function Home() {
  return (
    <div className={'bg-amber-200 h-screen'}>
      <TimelineSlider sections={content.sections} />
      <SectionList />
    </div>
  )
}
