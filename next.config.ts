import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '192.168.2.100'],
  experimental:{
      turbopackFileSystemCacheForDev: true,
  }
};

export default nextConfig;
