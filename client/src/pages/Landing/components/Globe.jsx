import { useState, useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const GlobeSection = () => {
  const globeEl = useRef();
  const [selectedRegion, setSelectedRegion] = useState('All Regions');

  const regions = [
    { name: 'All Regions', coords: { lat: 20, lng: 40, altitude: 2.2 } },
    { name: 'Americas', coords: { lat: 10, lng: -80, altitude: 1.8 } },
    { name: 'Africa', coords: { lat: 5, lng: 20, altitude: 1.8 } },
    { name: 'Europe', coords: { lat: 50, lng: 10, altitude: 1.8 } },
    { name: 'Middle East', coords: { lat: 29, lng: 45, altitude: 1.8 } },
    { name: 'Asia', coords: { lat: 30, lng: 85, altitude: 1.8 } }    
  ];

  const markers = [
    { lat: 31.5, lng: 34.47, name: "Palestine (Gaza)", region: "Middle East", affected: "2.3M people" },
    { lat: 15.50, lng: 32.56, name: "Sudan", region: "Africa", affected: "25M people" },
    { lat: 34.15, lng: 74.85, name: "Kashmir", region: "Asia", affected: "8M people" },
    { lat: 33.89, lng: 35.51, name: "Lebanon", region: "Middle East", affected: "1.5M people" },
    { lat: 15.00, lng: 44.00, name: "Yemen", region: "Middle East", affected: "21M people" },
    { lat: 9.15, lng: 40.49, name: "Ethiopia", region: "Africa", affected: "5.5M people" },
    { lat: 33.31, lng: 44.36, name: "Iraq", region: "Middle East", affected: "2.5M people" },
    { lat: 34.53, lng: 69.17, name: "Afghanistan", region: "Asia", affected: "24M people" }
  ];

  const filteredMarkers = selectedRegion === 'All Regions' 
    ? markers 
    : markers.filter(m => m.region === selectedRegion);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().enableRotate = true;
      globeEl.current.controls().autoRotate = false;
      globeEl.current.pointOfView({ altitude: 2.2 }, 0);
    }
  }, []);

  const handleRegionClick = (regionName) => {
    setSelectedRegion(regionName);
    const region = regions.find(r => r.name === regionName);
    if (globeEl.current && region) {
      globeEl.current.pointOfView(region.coords, 1500);
    }
  };

  const handleMarkerClick = (marker) => {
    if (globeEl.current) {
      globeEl.current.pointOfView({
        lat: marker.lat,
        lng: marker.lng,
        altitude: 1.5
      }, 2000);
    }
    setTimeout(() => {
      window.location.href = `/regions/${marker.name.toLowerCase().replace(/\s+/g, '-')}`;
    },);
  };

  return (
    <section className="relative bg-white pb-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-[#C33838] mb-2 tracking-tight">
            Global Crisis Map
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Select a region to explore crisis zones around the world.
          </p>
        </div>

        {/* Regions Navigation Bar */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#FFDB4C] rounded-full shadow-md px-4 py-3 flex gap-2 overflow-x-auto">
            {regions.map((region) => (
              <button
                key={region.name}
                onClick={() => handleRegionClick(region.name)}
                className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                  selectedRegion === region.name
                    ? 'bg-[#C33838] text-white'
                    : 'text-[#C33838] hover:text-red-800'
                }`}
              >
                {region.name}
              </button>
            ))}
          </div>
        </div>

        {/* Globe Container */}
        <div className="flex justify-center items-center mb-12">
          <div className="relative w-full max-w-3xl h-[700px] rounded-4xl overflow-hidden shadow-2xl bg-linear-to-br from-gray-900 via-black to-gray-900">
            <Globe
              ref={globeEl}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              
              pointsData={filteredMarkers}
              pointLat="lat"
              pointLng="lng"
              pointLabel={(d) => `
                <div style="backdrop-filter: blur(50px); padding: 18px 18px; text-align: center;">
                  <div style="font-weight: 500; font-size: 16px; color: white; margin-bottom: 6px;">${d.name}</div>
                  <div style="font-size: 11px; color: #d3d3d3; margin-bottom: 4px; font-weight: 300;">📍${d.region}</div>
                </div>
              `}
              pointColor={() => 'black'}
              pointAltitude={0.005}
              pointRadius={0.90}
              onPointClick={handleMarkerClick}
              
              atmosphereColor="#c33838"
              atmosphereAltitude={0.25}
              
              width={900}
              height={700}
              
              animateIn={false}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;