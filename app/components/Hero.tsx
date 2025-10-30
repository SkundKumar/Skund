import React from 'react'
import { Pixelify_Sans } from 'next/font/google'
import { Fugaz_One } from 'next/font/google'

const pixelify = Pixelify_Sans({ subsets: ['latin'], weight: '400' });
const fugaz = Fugaz_One({ subsets: ['latin'], weight: '400' });
const Hero = () => {
  return (
    <section className=" flex flex-col w-screen h-[100vh-52rem]">
    <div className='w-screen h-25 border-b-2 border-black flex'>
        <div className={`${pixelify.className} w-1/2 md:w-1/4 flex justify-center items-center text-5xl md:text-7xl border-r-2 border-black`}>
            SK
        </div>
        <div className={`hidden sm:block w-2/4 border-black border-r-2 ${fugaz.className}`}>
        </div>
        <button className={`hover:bg-[#fff0db] w-1/2 md:w-1/4 border-black border-r-2 flex items-center justify-center text-2xl ${fugaz.className}`}>
            Resume
        </button>
    </div>
    <div className={`border-b-2 border-black w-screen h-52 flex ${fugaz.className}`}>
        <div className='w-3/4 border-black border-r-2 flex justify-start p-3 md:pl-10 lg:text-9xl md:text-7xl sm:text-5xl text-5xl items-center'>
            Skund Kumar
        </div>
        <div className='w-1/4'>
            <img 
                src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejI2eDhpYjBxbmNtYmJqazUyNW01eXFqeDJ2dGx4aDRyOG1ud3R3NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lJNoBCvQYp7nq/giphy.gif"
                alt="Animated GIF"
                className="w-full h-full object-cover"
            />
        </div>
    </div>
    <div className={`w-screen h-56 border-black border-b-2 flex ${fugaz.className}`}>
        <div className='w-1/2 border-r-2 border-black overflow-hidden'>
            <img className='h-56 w-full object-cover' src="/me.png" alt="" />
        </div>
        <div className='w-1/2 border-r-2 border-black overflow-hidden flex items-center justify-center lg:text-9xl md:text-7xl sm:text-5xl text-4xl'>
            Front End
        </div>
    </div>
    <div className={`w-screen h-52 flex items-center lg:text-9xl md:text-7xl sm:text-5xl text-7xl pl-5 md:pl-10 ${fugaz.className}`}>
        <h1 className='mr-10'>Developer</h1>
        <img className='w-30 h-30 mt-7 mr-2 hidden md:block ' src="/egg.svg" alt="" />
        <img className='w-30 h-30 mt-7 mr-2 hidden md:block' src="/greenflower.svg" alt="" />
        <img className='w-30 h-30 mt-7 hidden md:block' src="/lemon.svg" alt="" />
    </div>

  </section>
  )
}

export default Hero