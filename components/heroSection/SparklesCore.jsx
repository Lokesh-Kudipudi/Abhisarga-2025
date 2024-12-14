"use client";
import React from "react";
import { useEffect, useState } from "react";
import Particles, {
  initParticlesEngine,
} from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { getSparklesData } from "@/constants/sparklesData";

export const SparklesCore = ({
  background,
  minSize,
  maxSize,
  speed,
  particleColor,
  particleDensity,
}) => {
  const sparklesData = getSparklesData(
    background,
    minSize,
    maxSize,
    speed,
    particleColor,
    particleDensity
  );

  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const controls = useAnimation();

  const particlesLoaded = async (container) => {
    if (container) {
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };

  return (
    <motion.div
      animate={controls}
      className={cn("opacity-0", "w-full h-full")}
    >
      {init && (
        <Particles
          id="tsparticlesfullpage"
          className={cn("h-full w-full")}
          particlesLoaded={particlesLoaded}
          options={sparklesData}
        />
      )}
    </motion.div>
  );
};
