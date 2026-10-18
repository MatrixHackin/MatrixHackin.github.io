"use strict";

// GitHub Pages: skip Jekyll. Hexo ignores empty hidden files in source/.
hexo.extend.generator.register("nojekyll", () => ({
  path: ".nojekyll",
  data: "",
}));

// Keep tag/category order deterministic across rebuilds.
hexo.extend.filter.register("template_locals", (locals) => {
  if (locals.site.tags) {
    locals.site.tags = locals.site.tags.sort("name");
  }
  if (locals.site.categories) {
    locals.site.categories = locals.site.categories.sort("name");
  }
  return locals;
});

function readRoute(route, routePath) {
  return new Promise((resolve, reject) => {
    const stream = route.get(routePath);
    if (!stream) {
      resolve(null);
      return;
    }
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    stream.on("error", reject);
  });
}

function sortSearchXml(xml) {
  const start = xml.indexOf("<search>");
  const end = xml.lastIndexOf("</search>");
  if (start === -1 || end === -1) return xml;

  const inner = xml.slice(start + "<search>".length, end);
  const entries = inner
    .split("<entry>")
    .slice(1)
    .map((chunk) => "<entry>" + chunk);
  entries.sort((a, b) => {
    const urlA = (a.match(/<url>(.*?)<\/url>/) || ["", ""])[1];
    const urlB = (b.match(/<url>(.*?)<\/url>/) || ["", ""])[1];
    return urlA.localeCompare(urlB);
  });

  return xml.slice(0, start) + "<search>\n" + entries.join("") + xml.slice(end);
}

// hexo-generator-searchdb iterates posts in unstable warehouse order.
// after_generate runs before files are written, so rewrite the in-memory route.
hexo.extend.filter.register("after_generate", async function () {
  const xml = await readRoute(this.route, "search.xml");
  if (!xml) return;
  this.route.set("search.xml", sortSearchXml(xml));
});
