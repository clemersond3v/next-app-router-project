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
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "sass-loader",
          options: {
            implementation: require("sass"),
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;


