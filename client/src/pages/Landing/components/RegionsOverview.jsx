import { Link } from "react-router-dom";
import Gaza from "../../../assets/gaza-regionOverview.jpg";
import Kashmir from "../../../assets/kashmir-regionOverview.jpg";
import Sudan from "../../../assets/sudan-regionOverview.jpg";

const regions = [
  {
    name: "Gaza",
    desc: "A region enduring one of the most severe humanitarian crises of our time.",
    image: Gaza,
    stats: "2.3M Lives Impacted",
  },
  {
    name: "Kashmir",
    desc: "A decades-long conflict affecting civilian life, identity, and freedom.",
    image: Kashmir,
    stats: "8M Lives Impacted",
  },
  {
    name: "Sudan",
    desc: "An unfolding crisis of displacement, famine, and political instability.",
    image: Sudan,
    stats: "25M Lives Impacted",
  },
];

const RegionsOverview = () => {
  return (
    <section className="relative px-18 py-28 bg-[#FAFAFA]">
      
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-[#C33838] font-semibold tracking-wide uppercase text-sm">
          Crisis Regions
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Global Humanitarian Focus
        </h2>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore verified, research-driven insights into regions facing 
          humanitarian emergencies around the world.
        </p>
      </div>

      {/* Regions Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {regions.map((region) => (
          <div
            key={region.name}
            className="
              bg-white border border-gray-200 rounded-3xl overflow-hidden 
              shadow-sm hover:shadow-xl transition-all duration-500
              group
            "
          >
            {/* Large Photo */}
            <div className="overflow-hidden">
              <img
                src={region.image}
                alt={region.name}
                className="
                  w-full h-60 object-cover 
                  group-hover:scale-105 transition-transform duration-700
                "
              />
            </div>

            {/* Content */}
            <div className="px-6 py-4">
              <p className="text-xs uppercase tracking-widest text-[#C33838] font-semibold">
                {region.stats}
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-3">
                {region.name}
              </h3>

              <p className="text-gray-600 mt-2 leading-relaxed text-sm">
                {region.desc}
              </p>

              <Link
                to={`/regions/${region.name.toLowerCase()}`}
                className="
                  inline-flex items-center gap-2 mt-4 text-[#C33838] 
                  font-semibold hover:gap-3 transition-all
                "
              >
                Explore Region
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}

      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-20">
        <Link
          to="/regions"
          className="
            mt-14 px-10 py-3.5 bg-[#C33838] text-white rounded-full 
          text-sm tracking-wide hover:bg-red-800 transition
          shadow-md hover:shadow-lg
          "
        >
          Browse All Regions
        </Link>
      </div>

    </section>
  );
};

export default RegionsOverview;
