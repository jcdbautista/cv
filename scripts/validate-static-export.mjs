import { existsSync, readFileSync, readdirSync } from "node:fs";
import { extname, join, relative, resolve } from "node:path";

const outputDirectory = resolve("out");
const basePath = "/cv";

if (!existsSync(outputDirectory)) {
  throw new Error("Static export not found. Run `pnpm build` first.");
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function routeTarget(href) {
  const pathname = href.split(/[?#]/, 1)[0];
  if (!pathname.startsWith("/")) return null;
  if (pathname !== basePath && !pathname.startsWith(`${basePath}/`)) {
    return null;
  }

  const route = pathname.slice(basePath.length).replace(/^\//, "");
  if (!route) return join(outputDirectory, "index.html");
  if (extname(route)) return join(outputDirectory, route);
  return join(outputDirectory, route, "index.html");
}

const frameworkFallbacks = new Set(["404.html", "404/index.html", "_not-found/index.html"]);
const htmlFiles = walk(outputDirectory).filter(
  (path) =>
    path.endsWith(".html") &&
    !frameworkFallbacks.has(relative(outputDirectory, path)),
);
const failures = [];

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const label = relative(outputDirectory, file);

  const requiredPatterns = [
    [/<html\b[^>]*\blang=["'][^"']+["']/i, "an html language"],
    [/<title>[^<]+<\/title>/i, "a non-empty title"],
    [/<meta\b[^>]*\bname=["']description["'][^>]*\bcontent=["'][^"']+["']/i, "a meta description"],
    [/<main\b/i, "a main landmark"],
    [/<h1\b/i, "an h1 heading"],
  ];

  for (const [pattern, description] of requiredPatterns) {
    if (!pattern.test(html)) failures.push(`${label}: missing ${description}`);
  }

  if (/<img\b(?![^>]*\balt=)[^>]*>/i.test(html)) {
    failures.push(`${label}: image missing alt text`);
  }

  const hrefs = [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']*)["']/gi)].map(
    (match) => match[1],
  );

  for (const href of hrefs) {
    if (!href.trim()) {
      failures.push(`${label}: empty link destination`);
      continue;
    }

    const target = routeTarget(href);
    if (target && !existsSync(target)) {
      failures.push(`${label}: internal link ${href} has no exported target`);
    }
  }
}

if (htmlFiles.length === 0) failures.push("No exported HTML files found.");

if (failures.length > 0) {
  throw new Error(`Static export validation failed:\n- ${failures.join("\n- ")}`);
}

console.log(
  `Validated ${htmlFiles.length} exported HTML file(s): metadata, landmarks, image alternatives, and internal links.`,
);
