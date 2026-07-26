/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages
  output: "export",

  // Published as a GitHub Pages *project* site under /cv.
  // Keep in sync with BASE_PATH/SITE_URL in src/lib/site.ts.
  basePath: "/cv",
  assetPrefix: "/cv",

  // GitHub Pages serves static files, so paths need trailing slashes
  trailingSlash: true,

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // next/image optimization is a server feature; disable it for static export
  images: {
    unoptimized: true,
  },

  // Reduce bundle size by excluding source maps in production
  productionBrowserSourceMaps: false,

  // PoweredByHeader removes the X-Powered-By header
  poweredByHeader: false,
};

module.exports = nextConfig;
