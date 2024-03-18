import Kachel from './Kachel'
import { useEffect, useState } from 'react'

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
  const [keyQueue, setKeyQueue] = useState([]);


  useEffect(() => {
    let timeoutId;

    const handleOrientationChange = () => {
      const isWrongOrientation = window.orientation !== 0;
      setWrongOrientation(isWrongOrientation);

      if (isWrongOrientation) {
        timeoutId = setTimeout(() => {
          goodluck("Vielen Dank für deine Geduld! Du wirst es nicht bereuen!");
        }, 96000);
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeyQueue(prevQueue => [...prevQueue, event.key]);
    };

    window.addEventListener('keydown', handleKeyDown);

    checkKeyCombination();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keyQueue]);

  const checkKeyCombination = () => {
    if (keyQueue.length >= 3) {
      if (keyQueue[keyQueue.length - 3] === 'h' && keyQueue[keyQueue.length - 2] === '9' && keyQueue[keyQueue.length - 1] === '6') {
        goodluck("Wow! Du hast den Code geknackt! Herzlichen Glückwunsch!");
        setKeyQueue([]);
      }
    }
  };

  const goodluck = (msg) => {
    window.alert(msg);
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  }

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
