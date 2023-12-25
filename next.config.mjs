/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
};

export default {
  // other configurations...
  output: "export",
  ...nextConfig,
};
