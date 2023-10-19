'use client'

import content from '@/components/utils/section.content'
import TimelineSlider from '@/components/timeline/TimelineSlider'
import SectionList from '@/components/section/SectionList'
import useExternalScripts from '@components/utils/useExternalScripts'
import { useEffect } from 'react'
import { Suspense } from 'react'

const setMouseXY = (e, card) => {
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  card.style.setProperty('--mouse-x', x + 'px')
  card.style.setProperty('--mouse-y', y + 'px')
}
const onMouseMove = (e) => {
  for (const card of document.getElementsByClassName('light-effect')) {
    setMouseXY(e, card)
  }
}

export default function Home({ params }) {
  const { session, images } = params
  useExternalScripts('https://ar.scanblue.cloud/assets/scanblue.3.js')

  useEffect(() => {
    const page = document.getElementById('page')
    page.addEventListener('mousemove', (e) => {
      onMouseMove(e)
    })
    return () => {
      page.removeEventListener('mousemove', (e) => {
        onMouseMove(e)
      })
    }
  }, [])
  return (
    <div
      id="page"
      className={'bg-primary-bg h-screen'}
      style={{ overflow: 'hidden' }}
    >
      <TimelineSlider sections={content.sections} />
      <Suspense fallback={<h1>Loading Sections...</h1>}>
        <SectionList images={images} session={session} />
      </Suspense>
    </div>
  )
}
