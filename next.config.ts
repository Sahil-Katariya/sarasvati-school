import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/sarasvati-school', 
  trailingSlash: true, 
};

export default nextConfig;
