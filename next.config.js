/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export static HTML for GitHub Pages
  output: 'export',

  // Allow an optional base path via env var for GitHub Pages subpaths
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  // Keep URLs consistent
  trailingSlash: false,
};

module.exports = nextConfig;
