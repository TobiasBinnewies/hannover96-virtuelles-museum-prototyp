'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLogout } from '@/services/frontend/session'
import { useState } from 'react'
// import { LoaderUtils } from 'three'

export default function Navbar({ buttons, session }) {
  const logout = useLogout()
  const [mobileMenu, setMobileMenu] = useState('hidden')

  const openBurgerMenu = (value) => {
    setMobileMenu(value)
  }

  return (
    <main id="navbar">
      <header>
        <div className="absolute z-[60] left-0 top-0 w-screen bg-white">
          <div
            className="bg-black h-8"
            style={{ width: '100%', height: '64px' }}
          >
            <img
              onClick={() => openBurgerMenu('block')}
              src={'/burgerMenu.png'}
              className={
                'md:hidden absolute left-0 top-6 h-[10vh] hover:cursor-pointer'
              }
            />
          </div>
          <div
            className={`${mobileMenu} bg-homepage-bg h-screen w-[70%] absolute top-0 left-0`}
          >
            <div
              className={'bg-gray-300 text-center rounded-2xl'}
              onClick={() => setMobileMenu('hidden')}
            >
              <span
                className={
                  'text-heading-text w-[100%] mr-auto ml-auto text-xl font-bold'
                }
              >
                Schließen
              </span>
            </div>
            {buttons.map((button, index) => (
              <div
                key={index}
                className={
                  'bg-white text-black rounded-2xl text-center p-4 mt-2 ml-auto mr-auto w-[40vw]'
                }
              >
                <Link href={button.destination}>{button.title}</Link>
              </div>
            ))}
            {session ? (
              <div
                className={
                  'bg-white text-black rounded-2xl text-center p-4 mt-2 ml-auto mr-auto w-[40vw]'
                }
              >
                {session.username}
                <button onClick={logout}>Logout</button>
              </div>
            ) : (
              <div
                className={
                  'bg-white text-black rounded-2xl text-center p-4 mt-28 ml-auto mr-auto w-[40vw]'
                }
              >
                <Link href="/signin">Login</Link>
              </div>
            )}
          </div>
          <div
            style={{
              background:
                'linear-gradient(135deg,black 0%,black 33%,white 33%,white 66%,#019d3a 66%,#019d3a 100%)',
              width: '100vw',
              height: '44px',
              display: 'grid',
              gridTemplateColumns: '1fr auto 1fr', // Three columns: left buttons, logo, right login button
              alignItems: 'center', // Align items vertically in the middle
            }}
          >
            {/* Left Buttons */}
            <div className="flex items-center justify-start mt-[-50px]">
              {buttons.map((button, index) => (
                <div key={index} className="items-center ml-4 hidden md:flex">
                  <Link href={button.destination}>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <div className="text-primary-text font-semibold text-sm flex items-center">
                            <div className="flex items-center">
                              <Image src={button.icon} width={20} height={20} />
                              <div className="ml-2">{button.title}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Logo (centered) */}
            <div className="navbarBrand text-center">
              <a className="navbarIcon">
                <Image
                  src="/H96_Header_Logo.png"
                  alt="Logo"
                  width={110}
                  height={96}
                ></Image>
              </a>
            </div>

            {/* Right Login Button */}
            {session ? (
              <div
                className="items-center justify-end hidden md:flex"
                style={{ marginTop: '-45px', marginRight: '10px' }}
              >
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>{' '}
                    {/* Placeholder for profile picture */}
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
              <div
                className="flex items-center justify-end"
                style={{ marginTop: '-45px', marginRight: '10px' }}
              >
                <div className="bg-white rounded-lg p-4 hidden md:flex">
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
