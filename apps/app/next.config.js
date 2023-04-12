/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    transpilePackages: ["@demo/page-form"],
    appDir: true,
  },
};

module.exports = nextConfig;
