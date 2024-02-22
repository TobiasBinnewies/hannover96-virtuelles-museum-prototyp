import '@google/model-viewer';
import { useEffect, useState } from 'react'

export default function Model_Google() {
  const [style, setStyle] = useState({})

  const mediaQuery = window.matchMedia("(min-width: 640px)")

  const desktopSize = {
    height: "30vh",
    width: "30vw",
  }

  const mobileSize = {
    height: "40vh",
    width: "40vw",
  }

  useEffect(() => {
    if(mediaQuery.matches){
      setStyle(desktopSize)
    }else {
      setStyle(mobileSize)
    }
  }, [])

  return (
      <model-viewer className={'relative'}
        alt="xxx"
        src='/Testobjekt.glb' ios-src='/Testobjekt.usdz' ar ar-modes="webxr scene-viewer quick-look" shadow-intensity='1' camera-controls
        touch-action='pan-y' disable-zoom
        style={style}
      ></model-viewer>
  )
}