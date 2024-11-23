import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dkh8odl7j/**', // Substitua pelo seu path específico do Cloudinary, se aplicável
      },
    ],
  },
};

export default nextConfig;
