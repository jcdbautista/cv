/**
 * Deployment-wide constants.
 *
 * The site is published as a GitHub Pages *project* site under the curated
 * public account `jcdbautista`, so it lives under a sub-path (`/cv`).
 * BASE_PATH must match `basePath` in next.config.js. To move it to a user
 * site (root of jcdbautista.github.io) set BASE_PATH to "" and SITE_URL to
 * "https://jcdbautista.github.io", and update next.config.js.
 */
export const BASE_PATH = "/cv";
export const SITE_URL = "https://jcdbautista.github.io/cv";

/** Prefix an absolute-from-root asset path with the deployment base path. */
export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
