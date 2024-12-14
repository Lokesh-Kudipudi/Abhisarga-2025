// import React from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// export default function NavigationArrows({ onPrev, onNext }) {
//   return (
//     <>
//       <button
//         onClick={onPrev}
//         className="text-white absolute left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 z-50"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={onNext}
//         className="text-white absolute right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 z-50"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
//     </>
//   );
// }

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function NavigationArrows({ onPrev, onNext }) {
  return (
    <div className="
      absolute bottom-6 left-6
      flex items-center gap-3
      z-50
    ">
      <button
        onClick={onPrev}
        aria-label="Previous"
        className="
          flex items-center justify-center
          w-10 h-10 sm:w-12 sm:h-12
          bg-black/40 hover:bg-white/90
          text-white hover:text-black
          rounded-full
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white/50
          active:scale-95
          backdrop-blur-md
          touch-manipulation
          select-none
        "
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={onNext}
        aria-label="Next"
        className="
          flex items-center justify-center
          w-10 h-10 sm:w-12 sm:h-12
          bg-black/40 hover:bg-white/90
          text-white hover:text-black
          rounded-full
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white/50
          active:scale-95
          backdrop-blur-md
          touch-manipulation
          select-none
        "
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}

export default NavigationArrows;