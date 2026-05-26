import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '192.168.31.253','192.168.43.115'],
  turbopack: {
    root: __dirname
  }
};

export default nextConfig;
