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
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
      {
        protocol: "https",
        hostname: "ecdn.codemasters.com",
      },
      {
        protocol: "https",
        hostname: "media.contentapi.ea.com",
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);
