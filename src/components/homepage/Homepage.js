import Link from 'next/link'
import Kachel from './Kachel'

const kacheln = [
  {
    title: 'Hannover 96 - Home',
    image: '/H96_Header_Logo.png',
    url: 'https://www.hannover96.de/startseite',
  },

  {
    title: 'Virtuelles Museum',
    image: '/H96_Header_Logo.png',
    url: '/timeline-start',
  },

  {
    title: 'Stamme 96 - Matterport',
    image: '/H96_Header_Logo.png',
    url: 'https://my.mpskin.com/de/tour/rh179agyah',
  },
]

function Homepage() {
  return (
    <div className={'h-screen p-10 flex items-center'}>
        <div
          className={
            'h-[50%] w-[50%] m-auto flex flex-col lg:flex-row items-center container'
          }
        >
          {kacheln.map((kachel, index) => (
            <Kachel key={index} {...kachel} />
          ))}
        </div>
    </div>
  )
}

export default Homepage
