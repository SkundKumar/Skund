'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { Pixelify_Sans } from 'next/font/google'
import { Fugaz_One } from 'next/font/google'
import { gsap } from 'gsap'
import Image from 'next/image'

const pixelify = Pixelify_Sans({ subsets: ['latin'], weight: '400' });
const fugaz = Fugaz_One({ subsets: ['latin'], weight: '400' });

const Hero = () => {
  // --- Refs ---
  const mainRef = useRef(null);

  // Content Refs
  const skRef = useRef(null);
  const resumeRef = useRef(null);
  const nameRef = useRef(null);
  const gifRef = useRef(null);
  const meRef = useRef(null);
  const frontEndRef = useRef(null);
  const developerRef = useRef(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  // Line Refs
  const vLine1 = useRef(null); // Vertical line 1
  const vLine2 = useRef(null); // Vertical line 2
  const vLine3 = useRef(null); // Vertical line 3
  const vLine4 = useRef(null); // Vertical line 4
  const hLine1 = useRef(null); // Horizontal line 1
  const hLine2 = useRef(null); // Horizontal line 2
  const hLine3 = useRef(null); // Horizontal line 3

  useLayoutEffect(() => {
    
    let context = gsap.context(()=>{
        const allOtherContents = [resumeRef.current, gifRef.current, frontEndRef.current, developerRef.current ];
        const verline = [vLine1.current, vLine2.current, vLine3.current, vLine4.current];
        const horline = [hLine1.current, hLine2.current, hLine3.current];
       if (!iconsRef.current) {
  return; 
}
// Now, TypeScript knows it's safe to access .querySelectorAll
const icons = gsap.utils.toArray(iconsRef.current.querySelectorAll('img'));
        gsap.set(mainRef.current, {autoAlpha: 1,});
        gsap.set(skRef.current, {autoAlpha: 0, y: '-100%',willChange: 'transform, opacity', force3D: true});
        gsap.set(allOtherContents, {autoAlpha: 0, y: 50,willChange: 'transform, opacity', force3D: true});
        gsap.set(nameRef.current,{autoAlpha: 0, y: '-100%',willChange: 'transform, opacity',force3D: true});
        gsap.set(verline, {scaleY: 0, transformOrigin: 'center center',willChange: 'transform, opacity',force3D: true});
        gsap.set(horline, {scaleX: 0, transformOrigin: 'left center',willChange: 'transform, opacity',force3D: true});
        gsap.set(meRef.current, { autoAlpha:0, y: '100%',willChange: 'transform, opacity',force3D: true});
        gsap.set(icons, {autoAlpha: 0, y: 50,willChange: 'transform, opacity',force3D: true});
        const tl = gsap.timeline();
        tl.to(skRef.current,{
          autoAlpha: 1,
          duration: 1.0,
          y: 0,
          ease: 'power3.inout'
        })
         
      
        
        tl.to(verline,{
            scaleY: 1,
            duration: 0.8,
            ease: 'power3.in',
            stagger: 0.1

        },)
        tl.to(horline,{
            scaleX: 1,
            duration: 0.8,
            ease: 'power3.in',
            stagger: 0.1
        },"-=1.0" );
          tl.to(nameRef.current,{
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.inout'
       });

        tl.to(allOtherContents,{
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.07,
        })
        tl.to(icons,{
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
        },"-=0.5");
     
       tl.to(meRef.current,{
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.inout'
       },"-=0.8");
       
    }, mainRef);

    return () => context.revert();

  }, []);

  return (
    <section ref={mainRef} className="hero-shell flex flex-col w-screen h-[100vh-52rem] overflow-hidden">
      
      {/* --- Row 1 --- */}
      <div className="flex w-screen h-25">
        <div ref={skRef} className={`${pixelify.className} w-1/2 md:w-1/4 flex justify-center items-center text-5xl md:text-7xl`}>
          SK
        </div>
        
        {/* Vertical Line 1 */}
        <div ref={vLine1} className="w-[2px] h-full bg-black"></div> 
        
        <div className={`hidden sm:block w-2/4 ${fugaz.className}`}>
        </div>
        
        {/* Vertical Line 2 (only on small screens and up) */}
        <div ref={vLine2} className="w-[2px] h-full bg-black hidden sm:block"></div> 
        
        <button ref={resumeRef} className={`hover:bg-[#fff0db] w-1/2 md:w-1/4 flex items-center justify-center text-2xl ${fugaz.className}`}>
          Resume
        </button>
      </div>
      
      {/* Horizontal Line 1 */}
      <div ref={hLine1} className="w-full h-[2px] bg-black"></div>

      {/* --- Row 2 (Added overflow-hidden) --- */}
      <div className={`w-screen h-52 flex ${fugaz.className} overflow-hidden`}>
        <div ref={nameRef} className='w-3/4 flex justify-start p-3 md:pl-10 lg:text-9xl md:text-7xl  text-7xl items-center'>
          Skund Kumar
        </div>
        
        {/* Vertical Line 3 */}
        <div ref={vLine3} className="w-[2px] h-full bg-black"></div>
        
        <div ref={gifRef} className='w-1/4'>
          <Image 
            src="/baghban.svg"
            alt="Animated GIF"
            width={150}
            height={150}
            loading='lazy'
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Horizontal Line 2 */}
      <div ref={hLine2} className="w-full h-[2px] bg-black"></div>

      {/* --- Row 3 (Added overflow-hidden) --- */}
      <div className={`w-screen h-56 flex ${fugaz.className} overflow-hidden`}>
        <div ref={meRef} className='w-1/2 overflow-hidden'>
          <Image width={150} height={15} className='h-56 w-full object-cover' src="/me.png" alt="" />
        </div>
        
        {/* Vertical Line 4 */}
        <div ref={vLine4} className="w-[2px] h-full bg-black"></div>
        
        <div ref={frontEndRef} className='w-1/2 overflow-hidden ml-2 mr-2  flex items-center justify-center lg:text-9xl md:text-7xl  text-6xl'>
          Front End
        </div>
      </div>
      
      {/* Horizontal Line 3 */}
      <div ref={hLine3} className="w-full h-[2px] bg-black"></div>
      
      {/* --- Row 4 --- */}
      <div className={`w-screen h-52 md:flex md:items-center pl-5 md:pl-10 ${fugaz.className}`}>
        <h1 ref={developerRef} className='mr-10 lg:text-9xl mt-5 md:mt-0 md:text-7xl sm:text-5xl text-7xl'>Developer</h1>
        <div ref={iconsRef} className="flex">
          <img className='md:w-30 md:h-30 h-20 mt-3 w-20 md:mt-7 mr-2  md:block ' src="/egg.svg" alt="" />
          <img className='md:w-30 md:h-30 h-20 mt-3 w-20 md:mt-7 mr-2  md:block' src="/greenflower.svg" alt="" />
          <img className='md:w-30 md:h-30 h-20 mt-3 w-20 md:mt-7  md:block' src="/lemon.svg" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero