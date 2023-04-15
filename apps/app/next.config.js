/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["@demo/page-form"],
  },
};

module.exports = nextConfig;
