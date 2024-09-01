import React from "react";

export default function Features() {
  return (
    <section className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center pb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-gray-400">
            Empower your e-commerce with our AI-driven solutions.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          <div className="flex flex-col items-center text-center">
            <svg
              className="w-16 h-16 mb-4 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2h-3l-4 4-4-4H4a2 2 0 01-2-2V5z"></path>
            </svg>
            <h4 className="text-xl font-bold mb-2">Virtual Try-On</h4>
            <p className="text-lg text-gray-400">
              Allow customers to try on clothes virtually with just a photo.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <svg
              className="w-16 h-16 mb-4 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5 3a1 1 0 000 2h10a1 1 0 100-2H5zM4 7a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 11-2 0V8H6v9a1 1 0 11-2 0V7z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h4 className="text-xl font-bold mb-2">Pose Generator</h4>
            <p className="text-lg text-gray-400">
              Show outfits in different poses, enhancing the shopping
              experience.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <svg
              className="w-16 h-16 mb-4 text-purple-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v6a2 2 0 01-2 2h-3l-4 4-4-4H4a2 2 0 01-2-2V5z"></path>
            </svg>
            <h4 className="text-xl font-bold mb-2">Style Recommendations</h4>
            <p className="text-lg text-gray-400">
              Offer personalized outfit suggestions based on fashion trends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
