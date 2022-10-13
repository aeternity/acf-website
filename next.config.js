/** @type {import('next').NextConfig} */
var withContentlayer = require("next-contentlayer").withContentlayer;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
