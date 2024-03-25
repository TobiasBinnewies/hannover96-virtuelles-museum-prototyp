'use client'

import models from '@components/models/models'
import Section from '@/components/section/Section'
import { Suspense, useEffect } from 'react'
import useExternalScripts from '@components/utils/useExternalScripts'
import { useHoverEffect } from '../utils/useHoverEffect'

export default async function SectionList({ images, session, sections: sectionData }) {
  // const { session } = useSession({ redirect: false })
  const sections = sectionData.map((item, index) => (
    <Suspense key={index} fallback={<p>Loading Sections...</p>}>
      <Section
        session={session}
        obj={item}
        model={models[item.model]}
        arlink={item.arLink}
        images={images}
      />
    </Suspense>
  ))

  useExternalScripts('https://ar.scanblue.cloud/assets/scanblue.3.js')

  useHoverEffect()

  return (
    <div id="section-list" className="y-mandatory-scroll-snapping">
      {sections}
    </div>
  )
}
