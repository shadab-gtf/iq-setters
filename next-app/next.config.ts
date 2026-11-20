import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Next 16 writes an AGENTS.md on dev runs; this project does not need it.
  agentRules: false,
};

export default nextConfig;
