import Link from 'next/link'
import Kachel from './Kachel'
import { useEffect } from 'react'

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

  const [wrongOrientation, setWrongOrientation] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleOrientationChange = () => {
      const isWrongOrientation = window.orientation !== 0;
      setWrongOrientation(isWrongOrientation);

      if (isWrongOrientation) {
        timeoutId = setTimeout(() => {
          // Die Funktion, die nach 5 Sekunden falscher Orientierung ausgeführt wird
          alert("Frohe Ostern!");
          // Hier kannst du deine gewünschte Funktion aufrufen
        }, 5000);
      } else {
        clearTimeout(timeoutId);
      }
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
      clearTimeout(timeoutId);
    };
  }, []);

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
