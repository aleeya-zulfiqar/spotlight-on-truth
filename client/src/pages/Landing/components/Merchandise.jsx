import React from "react";
import Wristband from "../../../assets/GazaWristbands.png";
import Hoodie from "../../../assets/kashmir-hoodie.jpg";
import Stickers from "../../../assets/sudan-stickers.jpg";

export default function Merchandise() {
  const products = [
    {
      name: "Solidarity Wristband",
      price: 8,
      image: Wristband,
    },
    {
      name: "Minimal Hoodie",
      price: 45,
      image: Hoodie,
    },
    {
      name: "Support Stickers",
      price: 4,
      image: Stickers,
    },
  ];

  return (
    <section className="py-28 bg-[#FAFAFA] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#C33838] mb-3 tracking-tight">
          Support Through Merchandise
        </h2>
        <p className="text-gray-600 text-lg">
          100% of proceeds support vetted humanitarian causes
        </p>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 px-18">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="
                group bg-white border border-gray-200 rounded-2xl 
                p-4 shadow-sm hover:shadow-md transition cursor-pointer
              "
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition"></div>
              </div>

              {/* Title */}
              <h3 className="text-xl mt-5 group-hover:underline font-semibold text-gray-900">
                {p.name}
              </h3>

              {/* Price */}
              <p className="text-gray-700 mt-2 font-medium">
                ${p.price}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="
          mt-14 px-10 py-3.5 bg-[#C33838] text-white rounded-full 
          text-sm tracking-wide hover:bg-red-800 transition
          shadow-md hover:shadow-lg
        ">
          Shop & Support
        </button>

      </div>
    </section>
  );
}
