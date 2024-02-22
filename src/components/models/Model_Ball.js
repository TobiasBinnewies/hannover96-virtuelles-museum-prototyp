import { useEffect, useState } from 'react'

export default function Model_Ball() {
  const [style, setStyle] = useState({height: "20vh",
    width: "40vw", margin: "auto"})

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
                  src='/ball_old.glb' ar shadow-intensity='1' camera-controls
                  touch-action='pan-y' disable-zoom style={style}></model-viewer>
  )
}