import React from "react";

export default function Hero() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Transform Your Fashion E-Commerce
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Enhance customer engagement and reduce returns with our cutting-edge
          AI-powered virtual try-on solution.
        </p>
        <div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full">
            Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
