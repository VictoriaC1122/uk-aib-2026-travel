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
  "script.js",
  "assets/favicon.svg",
  "assets/favicon.png",
  "assets/apple-touch-icon.png"
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
const scriptPattern = /<script src="\.\/*script\.js(?:\?[^"]*)?"><\/script>/;

htmlPages.forEach((page) => {
  const fullPath = resolve(root, page);
  assert(fileExists(page), `Missing page: ${page}`);
  if (!fileExists(page)) return;

  const html = readFileSync(fullPath, "utf8");
  assert(stylesheetPattern.test(html), `${page} is missing ./styles.css`);
  assert(scriptPattern.test(html), `${page} is missing ./script.js`);
  assert(html.includes(basePath), `${page} is missing the GitHub Pages base path ${basePath}`);
  assert(dataPagePattern.test(html), `${page} is missing a body data-page attribute`);

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

if (failures.length) {
  console.error("Build validation failed:\n");
  failures.forEach((message) => console.error(`- ${message}`));
  process.exit(1);
}

console.log(`Build validation passed for ${htmlPages.length} pages.`);
console.log(`Confirmed base path: ${basePath}`);
