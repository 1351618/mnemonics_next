/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  // experimental: {
  //   // Required: for next 13
  //   appDir: true
  // }
  webpack: (config, options) => {
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "../src/components"
    );

    config.resolve;
    return config;
  },
};

module.exports = nextConfig;
