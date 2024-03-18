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
  useEffect(() => {
    let shakeTimeout;

    const handleShake = () => {
      clearTimeout(shakeTimeout);
      shakeTimeout = setTimeout(() => {
        // Funktion aufrufen, wenn das Handy 5 Sekunden lang geschüttelt wurde
        yourFunction();
      }, 5000); // 5000 Millisekunden entsprechen 5 Sekunden
    };

    // Event-Listener für das devicemotion-Ereignis registrieren
    window.addEventListener('devicemotion', handleShake);

    // Event-Listener beim Komponentenabbau entfernen
    return () => {
      window.removeEventListener('devicemotion', handleShake);
      clearTimeout(shakeTimeout);
    };
  }, []); // useEffect nur einmal beim Laden des Komponenten ausführen

  // Die Funktion, die ausgeführt werden soll
  const yourFunction = () => {
    // Hier den Code einfügen, den Sie ausführen möchten
    window.alert("Oh man, du hast aber zittrige Finger!");
  };
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
