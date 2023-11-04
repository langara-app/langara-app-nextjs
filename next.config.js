const withImages = require("next-images");
/** @type {import('next').NextConfig} */
const nextConfig = withImages({
  images: {
    domains: ["api.langara-app.ca"],
  },
  reactStrictMode: true,
});

module.exports = nextConfig
