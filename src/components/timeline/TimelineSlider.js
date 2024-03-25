'use client'

import styles from './timelineSlider.modular.css'
import { useEffect } from 'react'
import Link from 'next/link'
import { useHoverEffect } from '../utils/useHoverEffect'

export default function TimelineSlider(props) {
  const { sections } = props

  useHoverEffect()

  useEffect(() => {
    const sectionList = document.getElementById('section-list')
    const timelineSlider = document.getElementById('timeline-slider')
    const timelineFooter = document.getElementById('timeline-footer')
    const timelineList = document.getElementById('timeline-list')
    const timelineListElements = timelineList.querySelectorAll('li')

    function setTransform(element, property, value) {
      element.style.transform = `${property}(${value})`
    }

    function handleScroll() {
      const screenHeight = window.innerHeight
      const scrollY = sectionList.scrollHeight - sectionList.clientHeight
      const scrollPercentage = (sectionList.scrollTop / scrollY) * 100
      const scrollPercentage36 = scrollPercentage * 3.6

      setTransform(timelineSlider, 'rotate', `${scrollPercentage36}deg`)
      setTransform(timelineFooter, 'translateX', `-${scrollPercentage * 0.5}%`)

      const currentIndex =
        sectionList.scrollTop /
        (sectionList.scrollHeight / timelineListElements.length)

      timelineListElements.forEach((listElement, index) => {
        const listElementTextOffset = (listElement.offsetHeight / 2 - 3) * -1
        const offsetY = Math.min(Math.max(index - currentIndex, -5), 5) * 10

        setTransform(
          listElement,
          `translateY(${offsetY}vh) translateY`,
          `${listElementTextOffset}px`,
        )

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

        setTransform(
          listElement,
          `translateY(${offsetY}vh) translateY(${listElementTextOffset}px) translateX`,
          `-${offset}%`,
        )

        listElement.children[0].children[0].classList.toggle(
          'highlighted',
          Math.round(currentIndex) === index,
        )
        listElement.children[0].children[0].classList.toggle(
          'light-effect',
          Math.round(currentIndex) === index,
        )
        listElement.children[0].children[0].classList.toggle(
          'light-effect-color',
          Math.round(currentIndex) === index,
        )
        listElement.children[0].children[0].children[0].classList.toggle(
          'light-effect',
          Math.round(currentIndex) === index,
        )
        listElement.children[0].children[0].children[0].classList.toggle(
          'light-effect-background',
          Math.round(currentIndex) === index,
        )
      })
    }

    sectionList.addEventListener('scroll', handleScroll)
    handleScroll()

    const scrollableDivs = document.querySelectorAll('.enable-scrolling')

    const handleWheel = (event) => {
      event.stopPropagation()
    }
    scrollableDivs.forEach((scrollableDiv) => {
      scrollableDiv.addEventListener('wheel', handleWheel)
    })

    return () => {
      sectionList.removeEventListener('scroll', handleScroll)

      scrollableDivs.forEach((scrollableDiv) => {
        scrollableDiv.removeEventListener('wheel', handleWheel)
      })
    }
  }, [])

  return (
    <div id="timeline" className="fixed">
      <div id="timeline-container" className="relative">
        <div
          id="timeline-slider"
          className="enable-scrolling hidden xl:block fixed -top-[25vh] w-[150vh] h-[150vh] bg-contain rounded-[50%]"
        ></div>
        <div
          id="timeline-slider-indicator"
          className="enable-scrolling hidden xl:block fixed left-[200px] top-[50vh]"
        ></div>
        <div
          id="timeline-list-container"
          className="enable-scrolling fixed -z-50 top-0 left-0 h-screen w-[60px] md:w-[90px] xl:w-[300px] xl:flex justify-end items-center"
        >
          <ol
            id="timeline-list"
            className="relative -z-50 h-screen w-full flex flex-col justify-between items-end list-none text-2xl"
          >
            {sections.map((section, index) => (
              <li
                key={index}
                className="pointer-events-auto fixed -z-50 top-[50vh] text-center text-primary-text flex justify-center items-center"
              >
                <Link href={'#' + section.date.slice(-4)}>
                  <div
                    id="styles"
                    className="relative inline-block group text-base md:text-xl xl:text-2xl"
                  >
                    <span className="absolute w-0 -bottom-1 h-0.5 bg-black group-hover:w-full transition-all duration-200"></span>
                    {section.date.slice(-4)}
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
        <div
          id="timeline-footer"
          className="hidden md:block enable-scrolling fixed left-0 bottom-0 w-[200vw] h-[550px] xl:h-[600px] bg-repeat"
        ></div>
      </div>
    </div>
  )
}
