/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  basePath: "/modern-portfolio",
  assetPrefix: "/modern-portfolio/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
