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
  // ✅ Ignore TS errors during `next build`
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ (Optional) Skip ESLint during `next build`
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
