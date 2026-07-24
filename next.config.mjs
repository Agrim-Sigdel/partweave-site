import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Silence the workspace-root inference warning caused by a stray lockfile
  // above this monorepo (this repo's own root is authoritative).
  outputFileTracingRoot: path.join(__dirname, "..", ".."),
};

export default nextConfig;
