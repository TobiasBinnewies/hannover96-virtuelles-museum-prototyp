import '@google/model-viewer';
import { useEffect, useState } from 'react'

export default function Model_Google() {
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
      <model-viewer className={'relative'}
        alt="xxx"
        src='/Testobjekt.glb' ar ar-modes="webxr scene-viewer quick-look" shadow-intensity='1' camera-controls
        touch-action='pan-y' disable-zoom
        style={style}
      ></model-viewer>
  )
}