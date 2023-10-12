'use client'

import content from '@/components/utils/section.content'
import TimelineSlider from '@/components/timeline/TimelineSlider'
import SectionList from '@/components/section/SectionList'
import useExternalScripts from '@components/utils/useExternalScripts'

export default function Home() {
  useExternalScripts("https://ar.scanblue.cloud/assets/scanblue.3.js");

  return (
    <div className={'bg-amber-200 h-screen'} style={{overflow: 'hidden'}}>
      <TimelineSlider sections={content.sections} />
      <SectionList />
    </div>
  )
}
