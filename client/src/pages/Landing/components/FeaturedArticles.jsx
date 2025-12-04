import React from "react";
import { Link } from "react-router-dom";
import Gaza from "../../../assets/dailyGaza-article.jpg";
import WestBank from "../../../assets/westbankarrests-article.jpg";
import MediaBias from "../../../assets/mediabias-article.jpg";

export default function FeaturedArticles() {

  const articles = [
    {
      title: "Daily Gaza Update — Dec 10",
      excerpt: "Summary of events, verified sources, humanitarian updates...",
      region: "Gaza",
      image: Gaza,
    },
    {
      title: "West Bank arrests & incidents",
      excerpt: "Documenting detentions, ground movements, and civilian reports...",
      region: "West Bank",
      image: WestBank,
    },
    {
      title: "Media Bias: analysis & evidence",
      excerpt: "Comparing Western vs regional reporting, highlighting narrative distortion...",
      region: "Global Media",
      image: MediaBias,
    },
  ];

  return (
    <section className="px-18 py-24 bg-[#C33838] border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Heading */}
        <h2 className="text-5xl font-bold text-center text-white mb-16 tracking-tight">
          Featured Articles
        </h2>

        {/* Articles grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="
                group bg-white border border-gray-200 rounded-2xl overflow-hidden 
                shadow-sm hover:shadow-md transition-all cursor-pointer
              "
            >
              {/* Image block */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>
              </div>

              {/* Text block */}
              <div className="py-4 px-6">

                {/* Region Tag */}
                <span className="
                  inline-block mb-3 text-xs tracking-wide uppercase
                  bg-gray-900 text-white px-3 py-1 rounded-full
                ">
                  {article.region}
                </span>

                {/* Title */}
                <h3 className="text-xl font-serif font-semibold text-gray-900 group-hover:underline">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <Link
                to={`/regions`}
                className="
                  inline-flex items-center gap-2 mt-4 text-gray-900
                  text-sm font-medium hover:gap-3 hover-underline transition-all
                "
              >
                  Read More
                  <svg
                  className="w-4 h-4"
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

      </div>
    </section>
  );
}
