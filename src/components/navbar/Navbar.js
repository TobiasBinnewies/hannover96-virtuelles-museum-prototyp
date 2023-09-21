import Image from 'next/image'

export default function Navbar() {
  return (
    <main>
      <header>
        <div className="absolute left-0 top-0 w-screen bg-white">
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
            <div className="flex justify-between items-center h-full px-4">
              <div className="flex items-center"></div>
              <div className="bg-white rounded-lg p-4 mt-[-150px]">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div>{' '}
                  {/* Platzhalter für Profilbild */}
                  <div className="flex flex-col">
                    <div className="text-black font-semibold text-sm">
                      Max Mustermann
                    </div>
                    <button className="bg-cyan-600 text-white py-1 px-2 rounded mt-1">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </main>
  )
}
