'use client'

import { useSession } from '@/services/frontend/session'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LoaderUtils } from 'three'

export default function Navbar({ buttons }) {
  const { session, logout } = useSession({ redirect: false });

  return (
    <main id="navbar">
      <header>
        
          <div className="absolute z-[60] left-0 top-0 w-screen bg-white">
            <div
              className="bg-black h-8"
              style={{ width: '100%', height: '64px' }}
            ></div>
            <div
              style={{
                background:
                  'linear-gradient(135deg,black 0%,black 33%,white 33%,white 66%,#019d3a 66%,#019d3a 100%)',
                width: '100%',
                height: '44px',
                display: 'grid',
                gridTemplateColumns: '1fr auto 1fr',  // Three columns: left buttons, logo, right login button
                alignItems: 'center',  // Align items vertically in the middle
              }} >
         
              {/* Left Buttons */}
              <div className="flex items-center justify-start mt-[-50px]">
                {buttons.map((button, index) => (
                  <div key={index} className="flex items-center ml-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-center">
                        <div className="flex flex-col">
                          <div className="text-primary-text font-semibold text-sm flex items-center">
                            <Link href={button.destination}>
                              <div className="flex items-center">
                                <Image src={button.icon} width={20} height={20} />
                                <div className="ml-2">{button.title}</div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
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
                <div className="flex items-center justify-end" style={{ marginTop: '-45px', marginRight: '10px' }}>
                  <div className="bg-white rounded-lg p-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div> {/* Placeholder for profile picture */}
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
                <div className="flex items-center justify-end" style={{ marginTop: '-45px', marginRight: '10px' }}>
                  <div className="bg-white rounded-lg p-4">
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
  );
}

