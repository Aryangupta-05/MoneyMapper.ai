/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
    // 👇 this is the important line
    serverSourceMaps: false,
  },

  // no browser source maps in production
  productionBrowserSourceMaps: false,
};

export default nextConfig;
