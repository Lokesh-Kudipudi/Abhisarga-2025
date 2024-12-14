import React from "react";
import { SparklesCore } from "@/components/heroSection/SparklesCore";
import { HeroParallaxDemo } from "@/components/heroSection/HeroParallaxDemo";

const Sparkles = ({ products }) => {
  return (
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={0.7}
          particleDensity={10}
          particleColor="#FFFFFF"
        />
      </div>
      <div>
        <HeroParallaxDemo products={products} />
      </div>
    </div>
  );
};

export default Sparkles;
