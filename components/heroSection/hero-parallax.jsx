"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = {
    stiffness: 300,
    damping: 30,
    bounce: 100,
  };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1500]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1500]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  // Add opacity effect specifically for images
  const imageOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0, 1]),
    springConfig
  );

  // Enable hover only when images are fully visible
  const hoverEnabled = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [0, 1]
  );

  console.log(hoverEnabled.get());

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              imageOpacity={imageOpacity}
              hoverEnabled={hoverEnabled}
              key={product.key}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              imageOpacity={imageOpacity}
              hoverEnabled={hoverEnabled}
              key={product.key}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              imageOpacity={imageOpacity}
              hoverEnabled={hoverEnabled}
              key={product.key}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white"
      >
        WELCOME TO <br />
        ABHISARGA 2025
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          delay: 0.2,
        }}
        className="max-w-full sm:max-w-2xl text-sm sm:text-base md:text-xl mt-4 sm:mt-8 text-neutral-200"
      >
        A Techno-Cultural fest of IIIT Sricity
      </motion.p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  imageOpacity,
  hoverEnabled,
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{ y: -20, opacity: 0.4 }}
      key={product.title}
      className="group/product h-[18rem] w-[32rem] md:h-96 md:w-[36rem] relative flex-shrink-0"
    >
      <motion.div
        style={{ opacity: imageOpacity }}
        className="absolute h-full w-full inset-0"
      >
        <Image
          src={product.thumbnail}
          style={{
            objectFit: "cover",
          }}
          fill
          className="rounded-2xl object-left-top"
          alt={product.title}
        />
      </motion.div>
    </motion.div>
  );
};
