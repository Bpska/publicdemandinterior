import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Allow local static images from public folder
    localPatterns: [
      {
        pathname: "/images/**",
      },
    ],
  },
  turbopack: {
    resolveAlias: {
      // Force Turbopack to use the ESM build so all named exports resolve correctly
      "lucide-react": "lucide-react/dist/esm/lucide-react.mjs",
    },
  },
};

export default nextConfig;
