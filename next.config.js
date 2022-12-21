/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.aljazeera.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
