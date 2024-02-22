import content from '../utils/section.content'
import Section from '@/components/section/Section'
import models from '@components/models/models'
import { Suspense } from 'react'

export default async function SectionList({ images, session }) {
  // const { session } = useSession({ redirect: false })
  const sections = content.sections.map((item, index) => (
    <Suspense key={index} fallback={<p>Loading Sections...</p>}>
      <Section
        session={session}
        obj={item}
        model={item.model == null ? models.Model_Empty : item.model}
        arlink={item.arlink}
        images={images}
      />
    </Suspense>
  ))

  return (
    <div id="section-list" className="y-mandatory-scroll-snapping">
      {sections}
    </div>
  )
}
