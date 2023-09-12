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
    <div id="timeline">
      <div id="timeline-slider"></div>
      <div id="timeline-list-container">
        <ol id="timeline-list">
          <li>1900</li>
          <li>1910</li>
          <li>1920</li>
          <li>1930</li>
          <li>1940</li>
          <li>1950</li>
          <li>1960</li>
          <li>1970</li>
          <li>1980</li>
          <li>1990</li>
        </ol>
      </div>
      <div id="timeline-footer"></div>
    </div>
  )
}
