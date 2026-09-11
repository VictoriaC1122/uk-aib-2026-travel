import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const basePath = "/uk-aib-2026-travel/";
const htmlPages = [
  "index.html",
  "conference.html",
  "flights.html",
  "transport.html",
  "stay.html",
  "itinerary.html",
  "shopping.html",
  "souvenirs.html",
  "budget.html",
  "reminders.html",
  "first-time.html",
  "map.html",
  "links.html"
];

const requiredAssets = [
  "styles.css",
  "handbook-data.js",
  "script.js",
  "robots.txt",
  "sitemap.xml",
  "assets/favicon.svg",
  "assets/favicon.png",
  "assets/apple-touch-icon.png",
  "assets/frankfurt-roemerberg.jpg",
  "assets/innside-manchester.jpg",
  "assets/london-westminster.jpg",
  "assets/paris-arc-de-triomphe.jpg",
  "assets/paris-louvre.jpg",
  "assets/paris-montmartre.jpg"
];

const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

function fileExists(relativePath) {
  return existsSync(resolve(root, relativePath));
}

requiredAssets.forEach((relativePath) => {
  assert(fileExists(relativePath), `Missing required asset: ${relativePath}`);
});

const htmlHrefPattern = /href="(\.\/[^"]+\.html(?:#[^"]*)?)"/g;
const assetHrefPattern = /href="(\/uk-aib-2026-travel\/assets\/[^"]+)"/g;
const dataPagePattern = /<body[^>]*data-page="([^"]+)"/;
const stylesheetPattern = /<link rel="stylesheet" href="\.\/*styles\.css(?:\?[^"]*)?" \/>/;
const dataScriptPattern = /<script src="\.\/*handbook-data\.js(?:\?[^"]*)?"><\/script>/;
const scriptPattern = /<script src="\.\/*script\.js(?:\?[^"]*)?"><\/script>/;

htmlPages.forEach((page) => {
  const fullPath = resolve(root, page);
  assert(fileExists(page), `Missing page: ${page}`);
  if (!fileExists(page)) return;

  const html = readFileSync(fullPath, "utf8");
  assert(stylesheetPattern.test(html), `${page} is missing ./styles.css`);
  assert(dataScriptPattern.test(html), `${page} is missing ./handbook-data.js`);
  assert(scriptPattern.test(html), `${page} is missing ./script.js`);
  assert(html.includes(basePath), `${page} is missing the GitHub Pages base path ${basePath}`);
  assert(dataPagePattern.test(html), `${page} is missing a body data-page attribute`);
  assert(html.includes('<meta name="robots"'), `${page} is missing robots metadata`);
  assert(html.includes('<link rel="canonical"'), `${page} is missing a canonical URL`);
  assert(html.includes('class="skip-link"'), `${page} is missing a skip link`);

  for (const match of html.matchAll(htmlHrefPattern)) {
    const href = match[1];
    const target = href.replace(/^\.\//, "").split("#")[0];
    assert(fileExists(target), `${page} links to a missing page: ${href}`);
  }

  for (const match of html.matchAll(assetHrefPattern)) {
    const assetPath = match[1].replace(basePath, "");
    assert(fileExists(assetPath), `${page} references a missing asset: ${match[1]}`);
  }
});

const script = readFileSync(resolve(root, "script.js"), "utf8");
for (const match of script.matchAll(/"\.\/([^"]+\.html(?:#[^"]*)?)"/g)) {
  const target = match[1].split("#")[0];
  assert(fileExists(target), `script.js references a missing page: ./${match[1]}`);
}

const indexHtml = readFileSync(resolve(root, "index.html"), "utf8");
assert(indexHtml.includes("data-home-tabs"), "index.html is missing the primary handbook tabs");
assert(indexHtml.includes('type="application/ld+json"'), "index.html is missing structured data");

if (failures.length) {
  console.error("Build validation failed:\n");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Build validation passed for ${htmlPages.length} pages.`);
console.log(`Confirmed base path: ${basePath}`);
