"use strict";

const fs = require("fs");
const path = require("path");

const THEME_LAZYLOAD = path.join(
  hexo.base_dir,
  "source/js/layouts/lazyload.js",
);

const BOLTP_URL = /https?:\/\/(a[12])\.boltp\.com\/([^"'?\s)#]+)/gi;
const PLACEHOLDER =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10"><rect width="16" height="10" fill="#ececec"/></svg>',
  );

const localExistsCache = new Map();

function localBoltpPath(url) {
  const match = /^https?:\/\/(a[12])\.boltp\.com\/([^?#]+)/i.exec(url);
  if (!match) return null;
  const host = match[1].toLowerCase();
  let rel;
  try {
    rel = decodeURIComponent(match[2]);
  } catch {
    rel = match[2];
  }
  rel = rel.replace(/\.[^.]+$/, ".webp");
  const key = host + "/" + rel;
  if (!localExistsCache.has(key)) {
    const file = path.join(hexo.source_dir, "images/boltp", host, rel);
    localExistsCache.set(key, fs.existsSync(file));
  }
  if (!localExistsCache.get(key)) return null;
  return "/images/boltp/" + host + "/" + rel;
}

function rewriteBoltpUrls(html) {
  return html.replace(BOLTP_URL, (url) => localBoltpPath(url) || url);
}

function isArticlePhoto(url) {
  return (
    url.startsWith("/images/boltp/") ||
    /^https?:\/\/a[12]\.boltp\.com\//i.test(url)
  );
}

function skipThemeImage(url) {
  if (!url || url.startsWith("data:")) return true;
  if (url.includes("/images/loading.svg")) return true;
  if (url.includes("/images/image.webp")) return true;
  if (url.includes("/images/background.")) return true;
  return false;
}

// After markdown render, point at local WebP mirrors before the theme lazyload filter.
hexo.extend.filter.register(
  "after_post_render",
  (data) => {
    if (!data.content) return data;
    data.content = rewriteBoltpUrls(data.content);
    return data;
  },
  0,
);

// After theme lazyload wrapping: eager-load the first article photo, drop extra spinner requests.
hexo.extend.filter.register(
  "after_post_render",
  (data) => {
    if (!data.content) return data;
    let first = true;
    data.content = data.content.replace(/<img([^>]*)>/gim, (tag, attrs) => {
      const dataSrc = /data-src="([^"]+)"/.exec(attrs);
      const src = /src="([^"]+)"/.exec(attrs);
      const real = (dataSrc && dataSrc[1]) || (src && src[1]);
      if (skipThemeImage(real) || !isArticlePhoto(real)) return tag;

      const alt = (/alt="([^"]*)"/.exec(attrs) || ["", ""])[1];
      if (first) {
        first = false;
        return `<img src="${real}" alt="${alt}" decoding="async" fetchpriority="high" loading="eager">`;
      }
      return `<img src="${PLACEHOLDER}" data-src="${real}" alt="${alt}" lazyload decoding="async" loading="lazy">`;
    });
    return data;
  },
  5,
);

hexo.extend.filter.register("after_render:html", (html) => {
  if (!html.includes("<head")) return html;

  html = rewriteBoltpUrls(html);

  const leftoverRemote = /https?:\/\/a[12]\.boltp\.com\//i.test(html);
  const firstPhoto = /<img[^>]*fetchpriority="high"[^>]*src="([^"]+)"|<img[^>]*src="([^"]+)"[^>]*fetchpriority="high"/.exec(
    html,
  );
  const preloadHref = firstPhoto && (firstPhoto[1] || firstPhoto[2]);

  if (!html.includes("data-image-perf")) {
    const extras = [];
    if (leftoverRemote) {
      extras.push(
        `<link rel="preconnect" href="https://a1.boltp.com" crossorigin data-dns-prefetch-boltp>
    <link rel="preconnect" href="https://a2.boltp.com" crossorigin>
    <link rel="dns-prefetch" href="//a1.boltp.com">
    <link rel="dns-prefetch" href="//a2.boltp.com">`,
      );
    }
    if (preloadHref && preloadHref.startsWith("/images/boltp/")) {
      extras.push(
        `<link rel="preload" as="image" href="${preloadHref}" fetchpriority="high" data-image-perf-preload>`,
      );
    }
    extras.push(`<style data-image-perf>
      .markdown-body img[lazyload]{min-height:10rem;background:#ececec}
    </style>`);
    html = html.replace(
      '<link rel="preconnect" href="https://fonts.googleapis.com">',
      extras.join("\n    ") +
        `\n    <link rel="preconnect" href="https://fonts.googleapis.com">`,
    );
  }
  return html;
});

// Override theme lazyload: start fetching ~800px before the image enters the viewport.
hexo.extend.generator.register("image-perf-lazyload", () => {
  if (!fs.existsSync(THEME_LAZYLOAD)) return [];
  return {
    path: "js/layouts/lazyload.js",
    data: fs.readFileSync(THEME_LAZYLOAD),
  };
});
