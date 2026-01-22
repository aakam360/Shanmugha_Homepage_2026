/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  turbopack: {
    root: '.', // Relative path to the workspace root
  },
};

export default nextConfig;