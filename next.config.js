/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  experimental: {
    // appDir: true,
  },
  env: {
    BASE_URL: "https://opitdev.foraware.forcit.cloud/",
  },
};

module.exports = nextConfig;
