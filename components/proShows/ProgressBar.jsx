// import React from 'react';

// export default function ProgressBar({ progress }) {
//   return (
//     <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 z-50">
//       <div 
//         className="h-full bg-orange-500 transition-all duration-75 ease-linear"
//         style={{ width: `${progress}%` }}
//       />
//     </div>
//   );
// }


import React from 'react';

function ProgressBar({ progress }) {
  return (
    <div 
      className="
        absolute  w-full z-50
        transition-all duration-300 ease-linear
        h-0.5 sm:h-[2px]
        bg-gray-800/80
        backdrop-blur-[2px]
      "
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div 
        className="
          h-full
          transition-all duration-75 ease-linear
          bg-gradient-to-r from-orange-500 to-orange-400
          shadow-[0_0_2px_rgba(251,146,60,0.2)]
        "
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;