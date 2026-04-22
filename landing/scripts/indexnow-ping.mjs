import { readFile } from "node:fs/promises";

const configPath = new URL("../indexnow.config.json", import.meta.url);

function buildUrls({ siteUrl, locales, pages }) {
  const urls = new Set([`${siteUrl}/`]);

  for (const locale of locales) {
    for (const page of pages) {
      urls.add(`${siteUrl}/${locale}${page}`);
    }
  }

  return [...urls];
}

async function main() {
  if (process.env.VERCEL !== "1") {
    console.log("IndexNow ping skipped outside Vercel.");
    return;
  }

  const config = JSON.parse(await readFile(configPath, "utf8"));
  const urlList = buildUrls(config);
  const payload = {
    host: new URL(config.siteUrl).host,
    key: config.key,
    keyLocation: `${config.siteUrl}/${config.key}.txt`,
    urlList,
  };

  const response = await fetch("https://www.bing.com/indexnow", {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    console.warn(
      `IndexNow ping failed with ${response.status} ${response.statusText}${body ? `: ${body}` : ""}`,
    );
    return;
  }

  console.log(`IndexNow ping sent for ${urlList.length} URLs.`);
}

main().catch((error) => {
  console.warn("IndexNow ping script failed:", error);
});
