/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: "default",
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
