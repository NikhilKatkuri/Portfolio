import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev", "192.168.31.8","192.168.56.1"],

  // React Strict Mode
  reactStrictMode: true,

  // SEO & Performance Optimizations
  poweredByHeader: false, // Remove "Powered by Next.js"
  compress: true, // Enable Gzip compression

  // Image Optimization
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sitename.com",
      },
      {
        protocol: "https",
        hostname: "*.vercel.app",
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // Security & SEO Headers
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|png|webp|avif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [];
  },

  // Turbopack configuration
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
