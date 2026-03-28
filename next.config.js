/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Server-deploy configuration (for SSR platforms like Vercel)
  // NOTE: remove `output: 'export'` so Next operates in SSR/SSG mode.
  trailingSlash: false,

  // Optional: re-enable webpack aliases to dedupe React across packages.
  // Uncomment the block below if you need to force a single React instance.
  // webpack: (config) => {
  //   config.resolve = config.resolve || {};
  //   config.resolve.alias = {
  //     ...(config.resolve.alias || {}),
  //     react: path.resolve(__dirname, 'node_modules/react'),
  //     'react/jsx-runtime': path.resolve(
  //       __dirname,
  //       'node_modules/react/jsx-runtime'
  //     ),
  //     'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
  //   };
  //   return config;
  // },
};

module.exports = nextConfig;
