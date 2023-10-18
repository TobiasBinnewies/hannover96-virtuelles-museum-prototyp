import SectionImageList from '@/components/images/SectionImageList'
import { getImages } from '@/services/backend/section-images'

export default async function SectionImages() {
  const images = await getImages('all')
  return (
    <div className='pt-[100px]'>
      <SectionImageList section={'all'} width="70%" images={images} />
    </div>
  )
}
