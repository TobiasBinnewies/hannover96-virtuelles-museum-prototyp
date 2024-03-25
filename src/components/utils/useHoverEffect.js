import { useEffect } from 'react'

const setMouseXY = (e, card) => {
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  card.style.setProperty('--mouse-x', x + 'px')
  card.style.setProperty('--mouse-y', y + 'px')
}
const onMouseMove = (e) => {
  for (const card of document.getElementsByClassName('light-effect')) {
    setMouseXY(e, card)
  }
}

export function useHoverEffect() {
  useEffect(() => {
    const page = document.getElementById('page')
    page.addEventListener('mousemove', (e) => {
      onMouseMove(e)
    })
    return () => {
      page.removeEventListener('mousemove', (e) => {
        onMouseMove(e)
      })
    }
  }, [])
}