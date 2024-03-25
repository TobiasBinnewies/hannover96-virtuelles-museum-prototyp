import TimelineSlider from '@/components/timeline/TimelineSlider'
import SectionList from '@/components/section/SectionList'
import prisma from '@/lib/prisma'

async function getSectionData() {
  const sections = await prisma.section.findMany()
  console.log(sections);
  return sections
}

export default async function Home({ params }) {
  const { session, images } = params
  // const sections = [
  //   {
  //     title: 'Hannover 96 wird gegründet!',
  //     date: '12.04.1896',
  //     description:
  //       'Hannover 96 wurde 1896 als „Hannoversche Fußball-Club von 1896 (HFC)“ gegründet, begann jedoch erst 1899 mit Fußball und wurde 1901 ein reiner Fußballverein.',
  //     model: 'Model_Gruendung',
  //     arlink: null,
  //     content:
  //       'Hannover 96 wurde 1896 als „Hannoversche Fußball-Club von 1896 (HFC)“ gegründet, begann jedoch erst 1899 mit Fußball und wurde 1901 ein reiner Fußballverein.',
  //     images: [],
  //   },
  // ]
  const sections = await getSectionData()
  return (
    <div
      id="page"
      className={'bg-primary-bg h-screen'}
      style={{ overflow: 'hidden' }}
    >
      <TimelineSlider sections={sections} />
      <SectionList images={images} session={session} sections={sections} />
    </div>
  )
}