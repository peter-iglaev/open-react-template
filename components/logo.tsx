import React from "react";
import { Merriweather_Sans } from "next/font/google";

const Mar = Merriweather_Sans({ subsets: ["latin"] });

const IntelligentFashionLogo = () => (
  <div className="inline-block m-2 sm:m-4 p-4 sm:p-6 rounded-lg shadow-lg border-gray-200 hover:shadow-xl transition-shadow duration-300 relative">
    <p
      className={`${Mar.className} text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-slate-100 to-red-500 flex flex-col sm:flex-row`}
    >
      <span className="break-words">intelligent</span>
      <span className="sm:ml-2 break-words">fashion</span>
    </p>

    <div className="absolute left-0 bottom-0 w-16 sm:w-20 h-16 sm:h-20">
      <div className="absolute left-0 bottom-0 w-px h-full bg-gradient-to-t from-purple-600 to-transparent"></div>
      <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-purple-600 to-transparent"></div>
    </div>
  </div>
);

export default IntelligentFashionLogo;
