import content from '../utils/section.content'
import Section from '@/components/section/Section'

export default function SectionList() {

  const sections = content.sections.map((item, index) => {
    return <Section key={index} obj={item} model={item.model}/>
  })

  return (
    <div>
      {sections}
    </div>
  )
}