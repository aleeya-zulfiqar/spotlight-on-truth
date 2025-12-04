import React from "react";

export default function AboutSupport() {
  return (
    <section className="px-18 py-32 bg-white relative">
      {/* background accents */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 bg-yellow-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10">

        {/* Left section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-[#FFDB4C]">SpotlightOnTruth</span>
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            Spotlight on Truth exists to counter misinformation with verified, 
            evidence-based, human-reviewed reporting. In an age where narratives 
            shift faster than facts, our role is to preserve clarity, accuracy, 
            and historical record.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            This platform operates independently — free from political, corporate, 
            or organizational influence. Our focus is integrity, transparency, 
            and amplifying the voices often overshadowed in mainstream coverage.
          </p>
        </div>

        {/* Right section */}
        <div className="flex flex-col space-y-5">
          
          {/* support label card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              Fuel Independent Journalism
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Help sustain fact-checked, bias-aware humanitarian reporting.
            </p>
            <a 
              className="inline-block mt-4 px-6 py-3 bg-[#FFDB4C] text-white font-semibold rounded-full hover:bg-red-700 transition"
              href="#"
            >
              Support the Mission
            </a>
          </div>

          {/* volunteer card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              Become a Volunteer
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Researchers, fact-checkers, designers, editors — all voices matter.
            </p>
            <a
              className="inline-block mt-4 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-red-700 transition"
              href="#"
            >
              Join the Team
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}