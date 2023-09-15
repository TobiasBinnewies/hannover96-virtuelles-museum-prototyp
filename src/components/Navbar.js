import Image from 'next/image';

export default function Navbar() {
    return (
        <main>
        
        <header>
          <div className='relative'>
            <div className='bg-black h-8' style={{ width:'100%', height:'64px'}}></div>
              <div style={{background: 'linear-gradient(135deg,black 0%,black 33%,white 33%,white 66%,#019d3a 66%,#019d3a 100%)', width:'100%', height:'44px'}}>
                <div className="navbarBrand">
                  <a className="navbarIcon">
                    <Image src="/H96_Header_Logo.png" alt="Logo" width={110} height={96}></Image>
                  </a>
                </div>
              </div>
            </div>
        </header>
      </main>            
    )
}