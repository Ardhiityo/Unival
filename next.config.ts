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
        hostname: "backend-unival.test",
        port: "",
        pathname: "/news/**",
      },
    ],
  }
};

export default nextConfig;
