import penguHome from '../assets/PenguHome.png'
import penguBg from '../assets/PenguHomeBackground.png'

function Home() {
  return (
    <div className="w-screen min-h-screen m-0 p-0 pt-16" style={{ backgroundColor: "#DFF6FF" }}>
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
        <div className="max-w-lg">
          <h1 className="text-6xl font-bold mb-4 text-gray-900">Hi, I’m Jonathan.</h1>
          <p className="text-lg text-gray-800">
            A recent Computer Science graduate focused on software development, with interests in web, frontend, and fullstack engineering roles.
          </p>
        </div>
        <div className="relative mt-8 md:mt-0 md:ml-8 flex-shrink-0 flex items-center justify-center">
          <img
            src={penguBg}
            alt="Pengu Background Home"
            className="absolute object-contain left-1/2 top-1/2 -translate-x-[45%] -translate-y-[70%] pointer-events-none select-none"
            aria-hidden="true"
            draggable="false"
          />
          <img
            src={penguHome}
            alt="Pengu Home"
            className="relative w-90 h-auto object-contain z-10"
          />
        </div>
      </div>
    </div>
  )
}

export default Home