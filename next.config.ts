import type { NextConfig } from "next";
import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "traxion.gg",
      },
      {
        protocol: "https",
        hostname: "cdn1.epicgames.com",
      },
      {
        protocol: "https",
        hostname: "supercars.net",
      },
      {
        protocol: "https",
        hostname: "group4racing.com",
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);