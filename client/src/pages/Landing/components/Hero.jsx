import { motion } from "framer-motion";
import { FaDove } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-[#C33838] text-white px-18 pt-8 pb-48 overflow-hidden">
      {/* Decorative curved bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-white"
        style={{ clipPath: "ellipse(100% 100% at 95% 110%)" }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-12">

          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-5xl font-extrabold max-w-xl leading-tight mb-4">
              Revealing Truth Beyond Headlines
            </h1>

            <p className="text-lg max-w-md text-gray-100 mb-8">
              A research-driven, evidence-based platform that sheds light on
              humanitarian crises around the world.
            </p>

            <div className="flex gap-6">
              <button className="px-6 py-3 bg-[#FFDB4C] text-[#C33838] font-semibold rounded-lg hover:bg-yellow-400 transition-colors shadow-md">
                Explore Regions
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C33838] transition-colors hover:shadow-md">
                Learn About Mission
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-lg">

              {/* Rotating Globe */}
              <motion.svg
                viewBox="0 0 500 500"
                className="w-full h-auto drop-shadow-2xl"
                fill="none"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 28
                }}
              >
                {/* Globe outline */}
                <circle
                  cx="250"
                  cy="250"
                  r="180"
                  stroke="white"
                  strokeWidth="3"
                  opacity="0.9"
                />

                {/* Latitude curves */}
                <path
                  d="M80 250 Q250 120 420 250"
                  stroke="#FFDB4C"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  opacity="1"
                />
                <path
                  d="M80 250 Q250 380 420 250"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                  opacity="1"
                />

                {/* Longitude curves */}
                <ellipse
                  cx="250"
                  cy="250"
                  rx="90"
                  ry="180"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="5 10"
                  opacity="1"
                />
                <ellipse
                  cx="250"
                  cy="250"
                  rx="140"
                  ry="180"
                  stroke="#FFDB4C"
                  strokeWidth="2"
                  strokeDasharray="8 12"
                  opacity="1"
                />

                {/* Pulsing verification dots */}
                {[ [180,160], [320,300], [250,370] ].map(([x,y], idx) => (
                  <motion.circle
                    key={idx}
                    cx={x}
                    cy={y}
                    r="7"
                    fill="#FFDB4C"
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 3 + idx,
                      repeat: Infinity
                    }}
                  />
                ))}
              </motion.svg>

              {/* Dove icon floating on the globe */}
              <motion.div
                className="absolute top-1/2 left-1/2 text-white"
                style={{ transform: "translate(-50%, -50%)" }}
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut"
                }}
              >
                <FaDove size={80} className="text-[#FFDB4C] drop-shadow-xl" />
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
