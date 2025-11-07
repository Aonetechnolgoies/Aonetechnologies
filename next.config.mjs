/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // disables server optimization for Netlify
  },
  output: 'export', // makes static export use /out folder
  reactStrictMode: true,
};

export default nextConfig;
