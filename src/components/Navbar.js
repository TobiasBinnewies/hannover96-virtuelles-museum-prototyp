export default function Navbar() {
    return (
        <main>
          <header>
            <div className='relative bg-white'>
              <div className='bg-black h-8' style={{ width: '100%', height: '64px' }}></div>
              <div style={{ background: 'linear-gradient(135deg,black 0%,black 33%,white 33%,white 66%,#019d3a 66%,#019d3a 100%)', width: '100%', height: '44px' }}>
                <div className='flex justify-between items-center h-full px-4'>
                  <div className="flex items-center">
                    <img src='/Users/mscorp14/Projects/96 - Website/hannover96-virtuelles-museum-prototyp/src/H96_Header_Logo.png' alt='Hallo' className="h-8 w-8 rounded-full" />
                  </div>
                  <div className="bg-white rounded-lg p-4 mt-[-65px]">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-300 rounded-full mr-2"></div> {/* Platzhalter für Profilbild */}
                      <div className="flex flex-col">
                        <div className="text-black font-semibold text-sm">Max Mustermann</div>
                        <button className="bg-cyan-600 text-white py-1 px-2 rounded mt-1">Logout</button>
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