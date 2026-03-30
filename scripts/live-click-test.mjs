import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const srcRoot = path.join(projectRoot, "src");
const baseUrl = process.env.BASE_URL || "http://localhost:3000";

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (/\.(ts|tsx)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function extractAll(regex, text, group = 1) {
  const result = [];
  let match;
  while ((match = regex.exec(text)) !== null) {
    result.push(match[group]);
  }
  return result;
}

async function fetchStatus(urlPath) {
  const target = urlPath.startsWith("http") ? urlPath : `${baseUrl}${urlPath}`;
  const res = await fetch(target, { redirect: "follow" });
  const body = await res.text();
  return { target, status: res.status, ok: res.ok, body };
}

async function main() {
  const files = walk(srcRoot);

  const internalTargets = new Set(["/"]);
  const waMessages = new Set();

  for (const file of files) {
    const content = read(file);

    for (const href of extractAll(/<Link\s+[^>]*href=\"([^\"]+)\"/g, content)) {
      if (href.startsWith("/")) {
        internalTargets.add(href);
      }
    }

    for (const navHref of extractAll(/href:\s*\"([^\"]+)\"/g, content)) {
      if (navHref.startsWith("/")) {
        internalTargets.add(navHref);
      }
    }

    for (const message of extractAll(/buildWhatsAppUrl\(\"([^\"]+)\"\)/g, content)) {
      waMessages.add(message);
    }
  }

  const productData = read(path.join(srcRoot, "data", "products.ts"));
  const productSlugs = extractAll(/slug:\s*\"([^\"]+)\"/g, productData);
  const productTitles = extractAll(/title:\s*\"([^\"]+)\"/g, productData);
  for (const slug of productSlugs) {
    internalTargets.add(`/products/${slug}`);
  }

  const oldNumberUsed = files.some((file) => read(file).includes("6281914787866"));

  console.log("=== LIVE CLICKABLE TEST ===");
  console.log(`Base URL: ${baseUrl}`);

  const failed = [];

  const sortedTargets = [...internalTargets].sort();
  console.log(`Internal targets to test: ${sortedTargets.length}`);
  for (const target of sortedTargets) {
    try {
      const res = await fetchStatus(target);
      console.log(`ROUTE ${target} -> ${res.status}`);
      if (!res.ok) {
        failed.push(`Route failed: ${target} -> ${res.status}`);
      }

      if (target === "/") {
        for (const title of productTitles) {
          if (!res.body.includes(title)) {
            failed.push(`Homepage missing product title: ${title}`);
          }
        }
      }
    } catch (err) {
      failed.push(`Route error: ${target} -> ${err.message}`);
    }
  }

  const waNumber = "6285182783688";
  const waLinks = [...waMessages].map((msg) => `https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`);

  console.log(`WhatsApp CTA messages detected: ${waMessages.size}`);
  for (const link of waLinks) {
    const ok = link.startsWith("https://wa.me/6285182783688");
    console.log(`WA ${link} -> ${ok ? "OK" : "INVALID"}`);
    if (!ok) {
      failed.push(`Invalid WhatsApp link: ${link}`);
    }
  }

  if (oldNumberUsed) {
    failed.push("Old WhatsApp number 6281914787866 is still present in src files.");
  }

  console.log("=== RESULT ===");
  if (failed.length > 0) {
    console.log("FAIL");
    for (const item of failed) {
      console.log(`- ${item}`);
    }
    process.exit(1);
  }

  console.log("PASS");
}

main();
