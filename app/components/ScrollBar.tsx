"use client";

export default function ScrollBar() {
  return (
    <div className="w-full overflow-hidden">
      <div
        className="
          flex md:grid md:grid-cols-4  
          overflow-x-auto md:overflow-visible scrollbar-hide
          -mx-4 md:mx-0 py-4 border-t-2 border-b-2 mb-2
        "
        // optional: enable smooth inertial scrolling on iOS
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* 1️⃣ Card One */}
        <div className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto h-[250px] md:h-[250px] 
                          flex items-center justify-center 
                        text-black font-semibold text-xl hover:scale-105 transition-transform">
          <p>UI Design</p>
        </div>

        {/* 2️⃣ Card Two */}
        <div className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto h-[250px] md:h-[250px] 
                          flex items-center justify-center
                        text-black font-semibold text-xl hover:scale-105 transition-transform">
          <p>Branding</p>
        </div>

        {/* 3️⃣ Card Three */}
        <div className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto h-[250px] md:h-[250px] 
                          flex items-center justify-center
                        text-black font-semibold text-xl hover:scale-105 transition-transform">
          <p>Motion</p>
        </div>

        {/* 4️⃣ Card Four */}
        <div className="flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-auto h-[250px] md:h-[250px] 
                          flex items-center justify-center
                        text-black font-semibold text-xl hover:scale-105 transition-transform">
           <div className="w-full md:w-[400px]  overflow-hidden shadow-md">
           <iframe
        width="100%"
        height="260"
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
