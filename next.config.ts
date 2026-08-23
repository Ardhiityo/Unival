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
        protocol: "http",
        hostname: "https://panel.unival-cilegon.ac.id",
        port: "",
        pathname: "/api/news/**",
      },
      {
        protocol: "http",
        hostname: "https://panel.unival-cilegon.ac.id/api",
        port: "",
        pathname: "/api/faculties/**",
      },
    ],
  }
};

export default nextConfig;
