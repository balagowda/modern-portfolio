/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default nextConfig;