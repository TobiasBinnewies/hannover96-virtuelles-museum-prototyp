'use client'

import styles from './timelineSlider.modular.css'
import { useEffect } from 'react'

export default function TimelineSlider(props) {
  const { sections } = props

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const screenHeight = window.innerHeight
      const scrollY = window.scrollY
      const scrollPercentage =
        (scrollY / (document.body.scrollHeight - screenHeight)) * 100

      const setTransform = (element, property, value) => {
        element.style.transform = `${property}(${value})`
      }

      const timelineSlider = document.getElementById('timeline-slider')
      setTransform(timelineSlider, 'rotate', `${scrollPercentage * 3.6}deg`)

      const timelineFooter = document.getElementById('timeline-footer')
      setTransform(timelineFooter, 'translateX', `-${scrollPercentage * 0.5}%`)

      const timelineList = document.getElementById('timeline-list')
      setTransform(timelineList, 'translateY', `-${scrollPercentage}%`)

      const timelineListElements = timelineList.querySelectorAll('li')
      timelineListElements.forEach((listElement) => {
        const verticalPosition = Math.min(
          Math.abs(
            listElement.getBoundingClientRect().top / screenHeight - 0.5,
          ),
          0.5,
        )
        const offset =
          ((Math.pow(10, 3 * verticalPosition) - 1) /
            (Math.pow(10, 3 * 0.5) - 1)) *
          300
        setTransform(listElement, 'translateX', `-${offset}%`)

        const roundedPosition = Math.round(verticalPosition * 10)
        listElement.style.color = roundedPosition === 0 ? '#10B981' : '#000000'
        listElement.style.fontWeight = roundedPosition === 0 ? 'bold' : 'normal'
      })
    })
  })

  return (
    <div id="timeline" className="fixed">
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
        className="fixed -z-50 top-0 left-0 h-screen w-[18%] flex justify-end items-center"
      >
        <ol
          id="timeline-list"
          className="relative -z-50 top-[50vh] h-screen w-full flex flex-col justify-between items-end list-none text-2xl"
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
