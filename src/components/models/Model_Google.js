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
    height: "30vh",
    width: "60vw",
  }

  useEffect(() => {
    if(mediaQuery.matches){
      setStyle(desktopSize)
    }else {
      setStyle(mobileSize)
    }
  }, [])

  return (
    <model-viewer className={'relative mt-20'}
                  alt="xxx"
                  src='/Testobjekt.glb' ios-src='/Testobjekt.usdz' ar ar-modes="webxr scene-viewer quick-look" shadow-intensity='1' camera-controls
                  touch-action='pan-y' disable-zoom
                  style={style}>
      <button id={"ar-button"} className={"absolute bottom-0 right-0"}><img className={"w-[50%] mr-auto ml-auto bg-white"} src={"./ar_button_icon.png"} alt={"in 3D ansehen"}/> </button>
    </model-viewer>
  )
}