'use client'

import styles from './timelineSlider.modular.css'
import { useEffect } from 'react'

export default function TimelineSlider() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const screenHeight = window.innerHeight
      const adjustedScrollHeight = document.body.scrollHeight - screenHeight
      const scrollY = window.scrollY

      const timelineSlider = document.getElementById('timeline-slider')
      const rotationDegrees = (scrollY / adjustedScrollHeight) * 360
      timelineSlider.style.transform = `rotate(${rotationDegrees}deg)`

      const timelineFooter = document.getElementById('timeline-footer')
      const offset = (scrollY / adjustedScrollHeight) * 50
      timelineFooter.style.transform = `translateX(-${offset}%)`
    })
  })

  return (
    <div id="timeline" className="fixed">
      <div
        id="timeline-slider"
        // style={{
        //   background:
        //     'conic-gradient(red 0% 25%,blue 25% 50%,green 50% 75%,yellow 75% 100%);',
        //   //'url(https://clipart-library.com/image_gallery2/Football.png);',
        // }}
        className="relative z-10 -left-[85%] -top-[25vh] w-[150vh] h-[150vh] bg-contain rounded-[50%]" // bg-[image:var(--image-url)]
      ></div>
      <div
        id="timeline-list-container"
        className="fixed top-0 left-[12%] h-screen flex justify-center items-center"
      >
        <ol
          id="timeline-list"
          className="list-none h-[80vh] flex flex-col justify-between text-2xl"
        >
          <li className="flex-1 text-center">1900</li>
          <li className="flex-1 text-center">1910</li>
          <li className="flex-1 text-center">1920</li>
          <li className="flex-1 text-center">1930</li>
          <li className="flex-1 text-center">1940</li>
          <li className="flex-1 text-center">1950</li>
          <li className="flex-1 text-center">1960</li>
          <li className="flex-1 text-center">1970</li>
          <li className="flex-1 text-center">1980</li>
          <li className="flex-1 text-center">1990</li>
        </ol>
      </div>
      <div
        id="timeline-footer"
        // style={{
        //   background:
        //     'repeating-linear-gradient(to right,ForestGreen 0%,LawnGreen 10%,LawnGreen 20%,ForestGreen 30%);',
        //   //'url(https://purepng.com/public/uploads/large/purepng.com-grassgrasstype-of-plantgrasslandgrass-lawn-1411527053446ekjji.png);',
        // }}
        className="fixed left-0 bottom-0 z-20 width-[200vw] h-[20vh] bg-repeat"
      ></div>
    </div>
  )
}
