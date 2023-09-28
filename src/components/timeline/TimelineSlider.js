'use client'

import styles from './timelineSlider.modular.css'
import { useEffect } from 'react'

export default function TimelineSlider(props) {
  const { sections } = props

  useEffect(() => {
    const screenHeight = window.innerHeight
    const timelineSlider = document.getElementById('timeline-slider')
    const timelineSliderMobile = document.getElementById(
      'timeline-slider-mobile',
    )
    const timelineFooter = document.getElementById('timeline-footer')
    const timelineList = document.getElementById('timeline-list')
    const timelineListElements = timelineList.querySelectorAll('li')

    function setTransform(element, property, value) {
      element.style.transform = `${property}(${value})`
    }

    function handleScroll() {
      const scrollY = window.scrollY
      const scrollPercentage =
        (scrollY / (document.body.scrollHeight - screenHeight)) * 100
      const scrollPercentage36 = scrollPercentage * 3.6
      const scrollPercentage300 = scrollPercentage * 300

      setTransform(timelineSlider, 'rotate', `${scrollPercentage36}deg`)
      setTransform(
        timelineSliderMobile,
        `translateX(${scrollPercentage}vw) rotate`,
        `${scrollPercentage36}deg`,
      )
      setTransform(timelineFooter, 'translateX', `-${scrollPercentage * 0.5}%`)

      timelineList.style.transform = `translateY(-${scrollPercentage}%)`

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
        listElement.classList.toggle('highlighted', roundedPosition === 0)
      })
    }

    window.addEventListener('scroll', handleScroll)
  })

  return (
    <div id="timeline" className="fixed">
      <div id="timeline-container" className="relative">
        <div
          id="timeline-slider"
          className="hidden xl:block fixed -top-[25vh] w-[150vh] h-[150vh] bg-contain rounded-[50%]"
        ></div>
        <div
          id="timeline-slider-mobile"
          className="xl:hidden fixed left-0 bottom-4 w-[150px] h-[150px]"
        ></div>
        <div
          id="timeline-slider-indicator"
          className="hidden xl:block fixed left-[200px] top-[50vh]"
        ></div>
        <div
          id="timeline-list-container"
          className="hidden fixed -z-50 top-0 left-0 h-screen w-[300px] xl:flex justify-end items-center"
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
          className="fixed left-0 bottom-0 w-[200vw] h-[550px] xl:h-[600px] bg-repeat"
        ></div>
      </div>
    </div>
  )
}
