import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Ensures local images work in production
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows images from any remote source
      },
    ],
  },
};

export default nextConfig;
