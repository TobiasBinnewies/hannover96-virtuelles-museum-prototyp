'use client'

import styles from './timelineSlider.modular.css'
import { useEffect } from 'react'

export default function TimelineSlider(props) {
  const { sections } = props

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const screenHeight = window.innerHeight
      const adjustedScrollHeight = document.body.scrollHeight - screenHeight
      const scrollY = window.scrollY
      const scrollHeigthPercentage = scrollY / adjustedScrollHeight
      const scrollHeigthPercentage100 = scrollHeigthPercentage * 100

      const timelineSlider = document.getElementById('timeline-slider')
      const rotationDegrees = scrollHeigthPercentage * 360
      timelineSlider.style.transform = `rotate(${rotationDegrees}deg)`

      const timelineFooter = document.getElementById('timeline-footer')
      timelineFooter.style.transform = `translateX(-${
        scrollHeigthPercentage * 50
      }%)`

      const timelineListContainer = document.getElementById(
        'timeline-list-container',
      )
      timelineListContainer.style.transform = `translateY(-${scrollHeigthPercentage100}%)`

      timelineListContainer.style.setProperty(
        '--before-height',
        `${scrollHeigthPercentage100}%`,
      )

      timelineListContainer.style.setProperty(
        '--after-height',
        `${100 - scrollHeigthPercentage100}%`,
      )

      const timelineListElements = timelineListContainer.querySelectorAll('li')
      timelineListElements.forEach((listElement, index) => {
        const page = scrollY / screenHeight

        const pagePosition = index - page
        const offset = Math.pow(3, Math.abs(pagePosition)) * 15

        if (pagePosition !== 0) {
          listElement.style.transform = `translateX(-${offset}%)`
        }

        if (Math.round(pagePosition) === 0) {
          listElement.style['color'] = '#10B981'
          listElement.style['font-weight'] = 'bold'
        } else {
          listElement.style['color'] = '#000000'
          listElement.style['font-weight'] = 'normal'
        }
      })
    })
  })

  return (
    <div id="timeline" className="fixed z-50">
      <div
        id="timeline-slider"
        className="relative -left-[85%] -top-[25vh] w-[150vh] h-[150vh] bg-contain rounded-[50%]"
      ></div>
      <div
        id="timeline-slider-indicator"
        className="absolute left-[16%] top-[50vh]"
      ></div>
      <div
        id="timeline-list-container"
        className="fixed -z-50 top-[50vh] left-0 h-screen w-[18%] flex justify-end items-center"
      >
        <ol
          id="timeline-list"
          className="relative h-screen w-full flex flex-col justify-between items-end list-none text-2xl"
        >
          {sections.map((section, index) => (
            <li
              key={index}
              className="text-center text-black flex justify-center items-center"
            >
              {section.mainSubtitle.slice(-4)}
            </li>
          ))}
        </ol>
      </div>
      <div
        id="timeline-footer"
        className="fixed left-0 bottom-0 w-[200vw] h-[20vh] bg-repeat"
      ></div>
    </div>
  )
}
