/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx"],
  experimental: {
    transpilePackages: ["@demo/page-form"],
  },
};

module.exports = nextConfig;
