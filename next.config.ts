import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/**",
      },
    ],
  },
  logging: {
    // درخواست های فرستاده شده توی هر صفحه رو می ده
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
