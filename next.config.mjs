/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static site generation
    images: {
      unoptimized: true, // Allows use of <Image> in static export
    },
  };
  
  export default nextConfig;
  