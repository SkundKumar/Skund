"use client";

import { Fugaz_One } from "next/font/google";
import Image from "next/image";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from 'react'
const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

export default function ScrollBar() {
  const mainRef = useRef(null);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);

  useLayoutEffect(()=>{
      let context = gsap.context(()=>{
        const cards = [card1Ref.current, card2Ref.current, card3Ref.current, card4Ref.current];

        gsap.set(cards, {autoAlpha: 0, y: 50});
        gsap.set(mainRef.current, {autoAlpha: 1,});

        gsap.to(cards,{
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power1.inOut',  
          scrum: 'true'
        })
      },mainRef);
      return () => context.revert();
  },[])


  return (
    <div className={`  w-full overflow-hidden ${fugaz.className}`}>
      <div
      ref={mainRef}
        className="
        sc
          flex md:grid md:grid-cols-4  
          overflow-x-auto md:overflow-visible scrollbar-hide
          -mx-0 md:mx-0 py-0 
        "
        // optional: enable smooth inertial scrolling on iOS
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* 1️⃣ Card One */}
        <div ref={card1Ref} className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto h-[250px] md:h-[250px] 
                          flex items-center justify-center 
                        text-black font-semibold text-xl overflow-hidden hover:scale-105 transition-transform">

          <img src="./baghban.svg" className="h-full w-full object-cover" alt="..." />
        </div>

        {/* 2️⃣ Card Two */}
        <div ref={card2Ref} className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto h-[250px] md:h-[250px] 
                          flex items-center justify-center
                        text-black font-semibold text-xl hover:scale-105 transition-transform">
           <img src="./coffee.svg" className="h-full w-full object-cover" alt="..." />
        </div>

        {/* 3️⃣ Card Three */}
        <div ref={card3Ref} className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto h-[250px] md:h-[250px] 
                          flex items-center justify-center
                        text-black font-semibold text-xl hover:scale-105 transition-transform">
         <img src="./dream.svg" className="h-full w-full object-cover" alt="..." />
        </div>

        {/* 4️⃣ Card Four */}
        <div ref={card4Ref} className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto h-[250px] md:h-[250px] 
                          flex items-center justify-center
                        text-black font-semibold text-xl hover:scale-105 transition-transform">
           <div className="w-full md:w-[400px]  overflow-hidden shadow-md">
           <iframe
        width="100%"
        height="230"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1964742215&color=%23e70b48&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>

      <div className="text-[10px] text-gray-400 text-center py-1 font-light bg-black">
        <a
          href="https://soundcloud.com/kendrick-lamar-music"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          Kendrick Lamar
        </a>{" "}
        ·{" "}
        <a
          href="https://soundcloud.com/kendrick-lamar-music/tv-off"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition"
        >
          tv off
        </a>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}
