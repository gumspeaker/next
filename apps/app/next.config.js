/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts"],
  experimental: {
    transpilePackages: ["@demo/page-form"],
  },
};

module.exports = nextConfig;
