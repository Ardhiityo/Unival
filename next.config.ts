import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "linkedin.com",
      },
      {
        protocol: "https",
        hostname: "panel.unival-cilegon.ac.id",
        pathname: "/storage/faculties/**",
      },
      {
        protocol: "http",
        hostname: "backend-unival.test",
        pathname: "/storage/**",
      },
    ],
  }
};

export default nextConfig;
