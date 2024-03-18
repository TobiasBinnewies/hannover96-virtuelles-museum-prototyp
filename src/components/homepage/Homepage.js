import Link from 'next/link'
import Kachel from './Kachel'

const kacheln = [
  {
    title: 'Hannover 96 - Home',
    image: '/Stadion96.jpeg',
    url: 'https://www.hannover96.de/startseite',
  },

  {
    title: 'Virtuelles Museum',
    image: '/Archiv96.jpg',
    url: '/timeline',
  },

  {
    title: 'Stamme 96 - Matterport',
    image: '/Stamme96.jpg',
    url: 'https://my.mpskin.com/de/tour/rh179agyah',
  },
]

function Homepage() {
  return (
    <div className={'h-screen bg-primary-bg p-10 flex items-center'}>
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
