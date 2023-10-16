'use client'

import content from '@/components/utils/section.content'
import TimelineSlider from '@/components/timeline/TimelineSlider'
import SectionList from '@/components/section/SectionList'
import useExternalScripts from '@components/utils/useExternalScripts'
import { useEffect } from 'react'

export default function Home() {
  useExternalScripts('https://ar.scanblue.cloud/assets/scanblue.3.js')

  useEffect(() => {
    document.getElementById('page').onmousemove = (e) => {
      onMouseMove(e)
    }
    const setMouseXY = (e, card) => {
      const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

        card.style.setProperty('--mouse-x', x + 'px')
        card.style.setProperty('--mouse-y', y + 'px')
    }
    const onMouseMove = (e) => {
      for (const card of document.getElementsByClassName('light-effect')) {
        setMouseXY(e, card)
      }
      for (const card of document.getElementsByClassName('light-effect-background')) {
        setMouseXY(e, card)
      }
    }
    return () => {
      document.getElementById('page').onmousemove = null
    }
  }, [])
  return (
    <div id='page' className={'bg-primary-bg h-screen'} style={{ overflow: 'hidden' }}>
      <TimelineSlider sections={content.sections} />
      <SectionList />
    </div>
  )
}
