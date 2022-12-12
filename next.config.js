/** @type {import("next").NextConfig} */

const isProd = process.env.NODE_ENV === "production";

var withContentlayer = require("next-contentlayer").withContentlayer;

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: { unoptimized: true },
  basePath: isProd ? "/acf-website" : "",
  assetPrefix: isProd ? "/acf-website/" : "",
};

module.exports = withContentlayer(withMDX(nextConfig));
