const baseUrl = process.env.BASE_URL || "http://localhost:3000";

const pagesToTest = [
  "/",
  "/about",
  "/contact",
  "/products",
  "/products/smart-trash-bin",
  "/products/massage-slipper",
  "/products/mini-washing-machine",
  "/products/portable-dryer",
];

const waNumber = "6285182783688";

const internalStatuses = new Map();
const waLinks = new Set();
const visitedLinks = new Set();
const errors = [];

function extractHrefs(html) {
  const hrefs = [];
  const re = /<a\b[^>]*href="([^"]+)"/gi;
  let match;
  while ((match = re.exec(html)) !== null) {
    hrefs.push(match[1]);
  }
  return hrefs;
}

function countButtons(html) {
  const match = html.match(/<button\b/gi);
  return match ? match.length : 0;
}

async function fetchStatus(pathOrUrl) {
  const url = pathOrUrl.startsWith("http") ? pathOrUrl : `${baseUrl}${pathOrUrl}`;
  const res = await fetch(url, { redirect: "follow" });
  const text = await res.text();
  return { url, status: res.status, ok: res.ok, text };
}

async function main() {
  console.log("=== LIVE BUTTON/LINK TEST ===");

  for (const page of pagesToTest) {
    try {
      const pageRes = await fetchStatus(page);
      const buttonCount = countButtons(pageRes.text);
      internalStatuses.set(page, pageRes.status);
      console.log(`PAGE ${page} -> ${pageRes.status} | buttons in SSR HTML: ${buttonCount}`);

      if (!pageRes.ok) {
        errors.push(`Page failed: ${page} -> ${pageRes.status}`);
        continue;
      }

      const hrefs = extractHrefs(pageRes.text);
      for (const href of hrefs) {
        if (visitedLinks.has(href)) continue;
        visitedLinks.add(href);

        if (href.startsWith("/")) {
          const linkRes = await fetchStatus(href);
          internalStatuses.set(href, linkRes.status);
          console.log(`  LINK ${href} -> ${linkRes.status}`);
          if (!linkRes.ok) {
            errors.push(`Internal link failed: ${href} -> ${linkRes.status}`);
          }
        }

        if (href.startsWith("https://wa.me/")) {
          waLinks.add(href);
          const isCorrectNumber = href.startsWith(`https://wa.me/${waNumber}`);
          console.log(`  WA   ${href} -> ${isCorrectNumber ? "OK" : "WRONG NUMBER"}`);
          if (!isCorrectNumber) {
            errors.push(`WhatsApp link uses wrong number: ${href}`);
          }
        }
      }
    } catch (err) {
      errors.push(`Error testing page ${page}: ${err.message}`);
    }
  }

  if (waLinks.size === 0) {
    errors.push("No WhatsApp links detected in rendered pages.");
  }

  console.log("=== SUMMARY ===");
  console.log(`Pages tested: ${pagesToTest.length}`);
  console.log(`Unique links tested: ${visitedLinks.size}`);
  console.log(`WhatsApp links detected: ${waLinks.size}`);

  if (errors.length) {
    console.log("RESULT: FAIL");
    for (const e of errors) {
      console.log(`- ${e}`);
    }
    process.exit(1);
  }

  console.log("RESULT: PASS");
}

main();
