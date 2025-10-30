import React from 'react'

const Hero = () => {
  return (
    <section className=" flex flex-col w-screen h-[100vh-52rem]">
    <div className='w-screen h-25 border-b-2  flex'>
        <div className=' w-1/2 md:w-1/4  flex justify-center items-center text-4xl border-r-2'>
            logo
        </div>
        <div className=' hidden  sm:block w-2/4  border-r-2'>

        </div>
        <div className=' w-1/2 md:w-1/4 border-r-2 flex items-center justify-center text-2xl'>
            Resume 
        </div>
    </div>
    <div className='border-b-2 w-screen h-52 flex'>
        <div className='w-3/4 border-r-2 flex justify-start p-3 md:pl-10  lg:text-9xl md:text-7xl sm:text-5xl text-4xl  items-center'>
            Skund Kumar
        </div>
        <div className='w-1/4'>
            some random gif
        </div>
    </div>
    <div className='w-screen h-56 border-b-2 flex'>
        <div className='w-1/2 border-r-2 overflow-hidden'>
            <img className='h-56 w-full' src="https://framerusercontent.com/images/NAfbHnLBoe9onq0nkSpVySsaI.png?scale-down-to=2048" alt="" />
        </div>
        <div className='w-1/2 border-r-2 overflow-hidden flex items-center justify-center lg:text-9xl md:text-7xl sm:text-5xl text-4xl'>
            Front End
        </div>
    </div>
    <div className='w-screen h-52 flex items-center lg:text-9xl md:text-7xl sm:text-5xl text-4xl pl-10'>
        <h1 className='mr-10'>Developer</h1>
        <img className='w-30 h-30 mt-7 mr-2' src="/egg.svg" alt="" />
        <img className='w-30 h-30 mt-7 mr-2' src="/greenflower.svg" alt="" />
        <img className='w-30 h-30 mt-7' src="/lemon.svg" alt="" />
    </div>

  </section>
  )
}

export default Hero