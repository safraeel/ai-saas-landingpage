/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  // Export static HTML for GitHub Pages
  output: 'export',

  // Allow an optional base path via env var for GitHub Pages subpaths
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  // Keep URLs consistent
  trailingSlash: false,

  // Webpack aliases to ensure a single React instance and avoid circular vendor imports
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      react: path.resolve(__dirname, 'node_modules/react'),
      'react/jsx-runtime': path.resolve(
        __dirname,
        'node_modules/react/jsx-runtime'
      ),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    };
    return config;
  },
};

module.exports = nextConfig;
