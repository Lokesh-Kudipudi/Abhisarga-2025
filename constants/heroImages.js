import { useEffect, useState } from "react";

export const heroImages = [
  {
    title: "Ahisarga - 2024",
    key: "one",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/Abhisarga1.jpg",
  },
  {
    title: "Cultural Events",
    key: "two",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/CulturalEvents1.jpg",
  },
  {
    title: "Pro Shows",
    key: "three",

    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/ProShow1.jpg",
  },

  {
    title: "Cultural Events",
    key: "four",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/CulturalEvents2.jpg",
  },
  {
    title: "Ahisarga - 2024",
    key: "five",

    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/Abhisarga2.jpg",
  },
  {
    title: "Ahisarga - 2024",
    key: "six",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/Abhisarga3.jpg",
  },

  {
    title: "Cultural Events",
    key: "seven",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/CulturalEvents3.jpg",
  },
  {
    title: "CEO of Geek for Geeks - 2024",
    key: "eight",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/CEO.jpg",
  },
  {
    title: "Cultural Events",
    key: "nine",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/CulturalEvents4.jpg",
  },
  {
    title: "Pro Shows",
    key: "ten",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/ProShow2.jpg",
  },
  {
    title: "Exciting Prizes",
    key: "eleven",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/ExicitingPrizes1.jpg",
  },

  {
    title: "Exiciting Prizes",
    key: "twelve",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/ExicitingPrizes2.jpg",
  },
  {
    title: "Pro Shows",
    key: "thirteen",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/ProShow3.jpg",
  },
  {
    title: "Ahisarga - 2024",
    key: "fourteen",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/Abhisarga5.jpg",
  },
  {
    title: "Ahisarga - 2024",
    key: "fifteen",
    thumbnail:
      "https://raw.githubusercontent.com/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/Abhisarga4.jpg",
  },
];

export const usePreloadImages = () => {
  const [loadedImages, setLoadedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const preloadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
      });
    };

    const loadImages = async () => {
      try {
        const loadedSrcs = await Promise.all(
          heroImages.map((image) =>
            preloadImage(image.thumbnail)
          )
        );
        setLoadedImages(
          heroImages.filter((image) =>
            loadedSrcs.includes(image.thumbnail)
          )
        );
        setIsLoading(false);
      } catch (error) {
        const failedImages = heroImages.filter(
          (image) =>
            !loadedImages.some(
              (loaded) => loaded.thumbnail === image.thumbnail
            )
        );
        setErrors(failedImages);
        setIsLoading(false);
      }
    };

    loadImages();
  }, [heroImages]);

  return { loadedImages, isLoading, errors };
};
