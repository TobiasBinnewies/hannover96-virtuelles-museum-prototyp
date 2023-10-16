import content from '../utils/section.content'
import Section from '@/components/section/Section'
import { useSession } from '@/services/frontend/session'
import models from '@components/models/models'

export default function SectionList() {
  const {session} = useSession({redirect: false})
  const sections = content.sections.map((item, index) => {
    return <Section session={session} key={index} obj={item} model={item.model == null ? models.Model_Empty : item.model} arlink={item.arlink}/>
  })

  return (
    <div id="section-list" className="y-mandatory-scroll-snapping">
      {sections}
    </div>
  )
}
