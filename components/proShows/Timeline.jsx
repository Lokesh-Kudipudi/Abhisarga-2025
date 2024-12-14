// import React from 'react';

// export default function Timeline({ total, currentIndex, onSelect }) {
//   return (
//     <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-50">
//       {Array.from({ length: total }, (_, index) => (
//         <button
//           key={index}
//           onClick={() => onSelect(index)}
//           className={`w-11 h-11 rounded-full flex items-center justify-center transition-all
//             ${index === currentIndex 
//               ? 'bg-orange-500 scale-110 shadow-lg shadow-orange-500/40' 
//               : 'bg-white/10 hover:bg-white/20'}`}
//         >
//           {index + 1}
//         </button>
//       ))}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

// Utility function for combining class names
const cn = (...classes) => classes.filter(Boolean).flat().join(' ').trim();

// Hook for handling breakpoints
function useBreakpoint(breakpoint) {
  const breakpoints = { sm: 640, md: 768, lg: 1024, xl: 1280 };
  
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState(
    typeof window !== 'undefined' ? window.innerWidth < breakpoints[breakpoint] : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsBelowBreakpoint(window.innerWidth < breakpoints[breakpoint]);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isBelowBreakpoint;
}

// Timeline Button Component
function TimelineButton({ index, isActive, onClick }) {
  // Animation spring for scale and opacity
  const [{ scale, opacity }, api] = useSpring(() => ({
    scale: 1,
    opacity: 0,
    config: { tension: 300, friction: 20 }
  }));

  useEffect(() => {
    api.start({
      scale: isActive ? 1.1 : 1,
      opacity: isActive ? 0.4 : 0
    });
  }, [isActive, api]);

  return (
    <animated.button
      onClick={onClick}
      className={cn(
        /* Base styles */
        'relative rounded-full',
        'flex items-center justify-center',
        'transition-all duration-300',
        'focus:outline-none focus:ring-2',
        'touch-manipulation',
        '-webkit-tap-highlight-color-transparent',
        
        /* Responsive sizing */
        'w-8 h-8 text-xs',
        'sm:w-9 sm:h-9 sm:text-sm',
        'md:w-10 md:h-10 md:text-base',
        'lg:w-11 lg:h-11 lg:text-lg',
        
        /* Active state */
        isActive ? [
          'bg-orange-500',
          'text-white font-medium',
          'focus:ring-orange-300',
          'shadow-lg shadow-orange-500/20'
        ] : [
          'bg-white/10 hover:bg-white/20',
          'text-white/70 hover:text-white',
          'focus:ring-white/30'
        ]
      )}
      style={{
        transform: scale.to(s => `scale(${s})`)
      }}
      aria-label={`Go to slide ${index + 1}`}
    >
      {index + 1}
      
      {/* Active indicator glow */}
      {isActive && (
        <animated.div 
          className="absolute inset-0 rounded-full bg-orange-500/40"
          style={{ opacity }}
        />
      )}
    </animated.button>
  );
}

// Main Timeline Component
export default function Timeline({ total, currentIndex, onSelect }) {
  const isMobile = useBreakpoint('sm');
  
  return (
    <div className={cn(
      /* Base styles */
      'absolute z-50 flex',
      'transition-all duration-500 ease-in-out',
      
      /* Mobile: horizontal bottom layout */
      isMobile ? [
        'bottom-20 left-1/2 -translate-x-1/2',
        'flex-row gap-2 sm:gap-3',
        'px-4 py-3',
        'bg-black/20 backdrop-blur-sm',
        'rounded-full'
      ] : [
        /* Desktop: vertical side layout */
        'left-6 sm:left-8 md:left-10',
        'top-1/2 -translate-y-1/2',
        'flex-col gap-3 sm:gap-4 md:gap-5',
        'p-3',
        'bg-black/10 backdrop-blur-sm',
        'rounded-full'
      ],
      
      /* Hover effects */
      'hover:bg-black/30',
      'group'
    )}>
      {Array.from({ length: total }, (_, index) => (
        <TimelineButton
          key={index}
          index={index}
          isActive={index === currentIndex}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}