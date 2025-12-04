import React from "react";
import TRT from "../../../assets/trtworld.png";
import AlJazeera from "../../../assets/aljazeera.png";
import UNHRC from "../../../assets/unhrc.png";
import HRW from "../../../assets/hrw.png";
import UNOCHA from "../../../assets/ocha.png"

export default function Sources() {
  const sources = [
    { name: "TRT", logo: TRT },
    { name: "Al Jazeera", logo: AlJazeera },
    { name: "UNHRC", logo: UNHRC },
    { name: "UN OCHA", logo: UNOCHA },
    { name: "HRW", logo: HRW },
  ];

  return (
    <section className="pt-10 bg-[#C33838] overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-10 pointer-events-none"></div>

      <div className="text-center mb-0 relative z-10">
        <h2 className="text-white text-3xl font-semibold tracking-wide">
          Verified Through Trusted Global Sources
        </h2>
      </div>

      {/* marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-10 animate-scroll whitespace-nowrap items-center opacity-100">
          {sources.map((src, i) => (
            <div key={i} className="shrink-0">
              <img 
                src={src.logo}
                alt={src.name}
                className="h-48 object-contain grayscale brightness-0 invert opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}

          {/* Duplicate logos for infinite scroll loop */}
          {sources.map((src, i) => (
            <div key={`dup-${i}`} className="shrink-0">
              <img
                src={src.logo}
                alt={src.name}
                className="h-48 object-contain grayscale brightness-0 invert opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>

      {/* marquee animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 18s linear infinite;
        }
      `}</style>
    </section>
  );
}
