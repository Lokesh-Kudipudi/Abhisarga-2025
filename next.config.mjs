/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname:
          "/Lokesh-Kudipudi/Abhisarga-2025-Hero-Section/refs/heads/main/src/assets/heroImages/**",
      },
    ],
  },
};

export default nextConfig;
