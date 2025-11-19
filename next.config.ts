import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "creativecodermm.com",
      },
    ],
  },
  // ✅ Ignore TypeScript errors for builds
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Ignore ESLint errors for builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
