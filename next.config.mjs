/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't auto-generate AGENTS.md / CLAUDE.md on every dev run.
  agentRules: false,
};

export default nextConfig;
