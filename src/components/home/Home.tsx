import bgImg from '../../../public/home-bg.jpg'
import Typewriter from 'typewriter-effect';
const Home = () => {



  return (
    <div style={{
      backgroundImage: `url(${bgImg})`,
      backgroundPosition: "center",
      backgroundSize: "cover"
    }} className='h-full  relative'>
      <div className='flex items-center justify-center absolute w-full h-screen bg-black bg-opacity-50'>
        <div className=' w-1/2 '>
          <h1 className='text-6xl text-white'>Selam, Ben <span className='font-bold'>Cem</span></h1>
          <h3 className='text-3xl text-white mt-3'>
            <Typewriter
              options={{
                strings: ['Frontend Developper', 'Backend Developper', 'UI/UX Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Home