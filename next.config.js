/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["62.72.26.118", "localhost:3000"],
      allowedForwardedHosts: ["62.72.26.118", "localhost:3000"],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.jp",
      },
    ],
  },
};

module.exports = nextConfig;
