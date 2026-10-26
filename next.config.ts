import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // static site, deployable anywhere
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
