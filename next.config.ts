// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'res.cloudinary.com',
//         pathname: '/dkh8odl7j/**', // Substitua pelo seu path específico do Cloudinary, se aplicável
//       },
//     ],
//   },
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    // Habilita o Code Splitting
    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 20000, // Mínimo de 20KB para um novo chunk
      maxSize: 250000, // Máximo de 250KB para evitar arquivos grandes
      maxInitialRequests: 10, // Número máximo de requests simultâneos
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          priority: 10,
          enforce: true,
        },
        commons: {
          test: /[\\/]src[\\/]components[\\/]/,
          name: "commons",
          minChunks: 2,
          priority: 5,
          enforce: true,
        },
      },
    };

    // Configuração específica para otimizar build no cliente e servidor
    if (!isServer) {
      config.optimization.runtimeChunk = "single";
    }

    return config;
  },
};

export default nextConfig;



