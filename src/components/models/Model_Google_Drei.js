import '@google/model-viewer';
import { useEffect, useState } from 'react'

export default function Model_Google_Drei() {
  const [style, setStyle] = useState({})

  const mediaQuery = window.matchMedia("(min-width: 640px)")

  const mobileSize = {
    height: "30vh",
    width: "30vw",
  }

  useEffect(() => {
    if(mediaQuery.matches){
      setStyle(mobileSize)
    }
  }, [])

  return (
      <model-viewer className={'relative h-screen'}
        alt="xxx"
        src='/iphone.glb' ar shadow-intensity='1' camera-controls
        touch-action='pan-y' disable-zoom style={style}></model-viewer>
  )
}