import content from '../utils/section.content'
import Section from '@/components/section/Section'

export default function SectionList() {
  return (
    <div>
      <Section obj={content.demo_one}/>
      <Section obj={content.demo_two}/>
    </div>
  )
}