'use client'

import { useSession } from '@/services/frontend/session'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const { session, logout } = useSession({ redirect: false })

  useEffect(() => {
    document.getElementById('navbar').onmousemove = (e) => {
      onMouseMove(e)
    }
    const setMouseXY = (e, card) => {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top

      card.style.setProperty('--mouse-x', x + 'px')
      card.style.setProperty('--mouse-y', y + 'px')
    }
    const onMouseMove = (e) => {
      for (const card of document.getElementsByClassName(
        'light-effect-background',
      )) {
        setMouseXY(e, card)
      }
    }
    return () => {
      document.getElementById('navbar').onmousemove = null
    }
  }, [])
  return (
    <main id='navbar'>
      <header>
        <div className="absolute z-[60] left-0 top-0 w-screen light-effect-background">
          <div
            className="bg-black h-8"
            style={{ width: '100%', height: '64px' }}
          ></div>
          <div
            style={{
              background:
                'linear-gradient(135deg,black 0%,black 33%,white 33%,white 66%,transparent 66%,transparent 100%)',
              width: '100%',
              height: '44px',
            }}
          >
            <div className="navbarBrand">
              <a className="navbarIcon">
                <Image
                  src="/H96_Header_Logo.png"
                  alt="Logo"
                  width={110}
                  height={96}
                ></Image>
              </a>
            </div>
            {session ? (
              <div className="flex justify-between items-center h-full px-4">
                <div className="flex items-center"></div>
                <div className="bg-white rounded-lg p-4 mt-[-150px]">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>{' '}
                    {/* Platzhalter für Profilbild */}
                    <div className="flex flex-col">
                      <div className="text-primary-text font-semibold text-sm">
                        {session.username}
                      </div>
                      <button
                        className="bg-cyan-600 text-white py-1 px-2 rounded mt-1"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex justify-between items-center h-full px-4">
                <div className="flex items-center"></div>
                <div className="bg-white rounded-lg p-4 mt-[-150px]">
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <div className="text-primary-text font-semibold text-sm">
                        <Link href="/signin">Login</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </main>
  )
}
