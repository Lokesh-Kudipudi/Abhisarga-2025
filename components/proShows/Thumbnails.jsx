import Image from "next/image";
import React from "react";

// Utility function for combining class names
const cn = (...classes) =>
  classes.filter(Boolean).flat().join(" ").trim();

export default function Thumbnails({
  items,
  currentIndex,
  onSelect,
}) {
  return (
    <div
      className="
      absolute z-50
      left-1/2 -translate-x-1/2
      bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10
      w-[95vw] sm:w-[90vw] md:w-[85vw] lg:w-auto
      max-w-[1200px]
    "
    >
      {/* Scrollable thumbnails container */}
      <div
        className="
        /* Scroll behavior */
        overflow-x-auto
        [-ms-overflow-style:none]
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
        -mx-2 px-2
        
        /* Grid layout */
        grid grid-flow-col auto-cols-max
        gap-2 sm:gap-3 md:gap-4 lg:gap-5
        justify-start sm:justify-center
      "
      >
        {items.map((item, index) => (
          <ThumbnailButton
            key={item.id}
            item={item}
            isActive={index === currentIndex}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}

function ThumbnailButton({ item, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        /* Base styles */
        "relative overflow-hidden group",
        "transition-all duration-300",
        "touch-manipulation",

        /* Responsive sizing */
        "w-32 sm:w-36 md:w-40 lg:w-48",
        "h-20 sm:h-24 md:h-28",

        /* Border radius and styling */
        "rounded-lg sm:rounded-xl",

        /* Active and hover states */
        isActive
          ? "ring-2 ring-orange-500 scale-100 sm:scale-105"
          : "scale-90 hover:scale-95 ring-1 ring-white/10",

        /* Focus states */
        "focus:outline-none focus:ring-2 focus:ring-orange-500"
      )}
    >
      {/* Thumbnail Image */}
      <Image
        src={item.image}
        alt={item.title}
        style={{
          objectFit: "cover",
        }}
        fill
        className="
          transition-transform duration-300
          group-hover:scale-110
        "
      />

      {/* Overlay with text */}
      <div
        className="
        /* Positioning */
        absolute inset-0
        
        /* Background gradient */
        bg-gradient-to-t
        from-black/80
        via-black/40
        to-transparent
        
        /* Transition */
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-300
        
        /* Content layout */
        p-2 sm:p-3 md:p-4
        flex flex-col
        justify-end
      "
      >
        <h4
          className="
          text-white font-semibold
          text-xs sm:text-sm
          truncate
        "
        >
          {item.title}
        </h4>
        <p
          className="
          text-white/70
          text-[10px] sm:text-xs
          truncate
        "
        >
          {item.topic}
        </p>
      </div>
    </button>
  );
}
