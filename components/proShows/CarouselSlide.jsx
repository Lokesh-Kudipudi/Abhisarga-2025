// import React from 'react';
// export default function CarouselSlide({ item, isActive }) {
//   return (
//     <div
//       className={`absolute inset-0 transition-all duration-700 ease-in-out
//         ${isActive ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
//     >
//       <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
//       <img
//         src={item.image}
//         alt={item.title}
//         className="w-full h-full object-cover"
//       />
//       <div className="absolute top-1/2 left-[10%] -translate-y-1/2 max-w-xl z-20">
//         <div className="flex items-center gap-5 mb-4">
//           <span className="text-orange-500">{item.author}</span>
//           <span className="text-white/80">{item.date}</span>
//         </div>
//         <h2 className="text-white text-5xl font-bold mb-3">{item.title}</h2>
//         <h3 className="text-2xl text-orange-500 mb-5">{item.topic}</h3>
//         <p className="text-white/80 mb-8">{item.description}</p>
//         <div className="flex gap-4">
//           <button className="px-8 py-3 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
//             SEE MORE
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import React from "react";

export default function CarouselSlide({ item, isActive }) {
  return (
    <div
      className={`absolute inset-0 transition-all duration-700 ease-in-out
        ${
          isActive
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 max-w-xl z-20">
        <div className="flex items-center gap-5 mb-4">
          <span className="text-orange-500">{item.author}</span>
          <span className="text-white/80">{item.date}</span>
        </div>
        <h2 className="text-white text-5xl font-bold mb-3">
          {item.title}
        </h2>
        <h3 className="text-2xl text-orange-500 mb-5">
          {item.topic}
        </h3>
        <p className="text-white/80 mb-8">{item.description}</p>
        <div className="flex gap-4">
          <button className="px-8 py-3 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
            SEE MORE
          </button>
          <button className="px-8 py-3 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
            @ABHISARGA
          </button>
        </div>
      </div>
    </div>
  );
}
