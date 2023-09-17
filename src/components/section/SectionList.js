import content from '../utils/section.content'
import Section from '@/components/section/Section'
import Model_Wd from '@/components/models/Model_Wd'
import Model_Computer from '@/components/models/Model_Computer'


export default function SectionList() {

  return (
    <div>
      <Section obj={content.demo_one} model={<Model_Wd/>}/>
      <Section obj={content.demo_two} model={<Model_Computer/>}/>
    </div>
  )
}