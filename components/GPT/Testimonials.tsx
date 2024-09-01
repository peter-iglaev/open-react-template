import React from "react";

export default function Testimonials() {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center pb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Partners Say
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          <div className="flex flex-col items-center text-center bg-gray-800 p-6 rounded-lg">
            <p className="text-lg text-gray-400 mb-4">
              "Since integrating the virtual try-on tool, we’ve seen a 25%
              increase in conversions and a significant drop in returns." -
              FashionRetailer Inc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
