import type { NextConfig } from "next";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPages = repoName.endsWith(".github.io");
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubActions && !isUserOrOrgPages && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
