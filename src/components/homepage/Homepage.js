import Link from 'next/link'

function Homepage() {
return (
  <div className={"h-screen sm:bg-[url('/bg_home_desktop.png')] bg-no-repeat bg-[url('/bg_home_mobile.png')] p-10"}>
    <div className={"h-[50%] w-[50%] m-auto flex flex-col items-center container"}>
      <h1 className={"text-white mt-40 text-4xl sm:text-6xl text-center"}>Willkommen zum Hannover 96 Museum</h1>
      <img className={"blur-sm w-[100%] sm:w-[50%] ml-auto mr-auto mt-6"} src={"/H96_Header_Logo.png"}/>
      <Link href={"/timeline"}> <div className={"w-[50vw] sm:w-[12vw] rounded-xl bg-cta-bg text-xl sm:text-2xl p-3 mt-20 text-center"}>Take the Tour!</div></Link>
    </div>
  </div>
)
}

export default Homepage;