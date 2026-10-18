"use strict";

const GITHUB_IO = "https://matrixhackin.github.io/";
const CUSTOM = "https://dylanliublog.com/";

// Same static files are served on dylanliublog.com and (as a GitHub Pages
// entry point) matrixhackin.github.io. Keep links host-relative at runtime.
hexo.extend.filter.register("after_render:html", (html) => {
  if (!html.includes("<head")) return html;

  if (!html.includes("data-dual-host-https-upgrade")) {
    html = html.replace(
      "<head>",
      `<head>
    <script data-dual-host-https-upgrade>
(function () {
  var host = location.hostname;
  var allowed =
    host === "dylanliublog.com" ||
    host === "www.dylanliublog.com" ||
    host === "matrixhackin.github.io";
  if (location.protocol === "http:" && allowed) {
    location.replace(
      "https://" + location.host + location.pathname + location.search + location.hash
    );
  }
})();
    </script>`,
    );
  }

  html = html.replace(
    '"hostname":"dylanliublog.com"',
    '"hostname":(location.hostname||"dylanliublog.com")',
  );

  if (!html.includes('rel="alternate" href="' + GITHUB_IO)) {
    html = html.replace(
      /<link rel="canonical" href="https:\/\/dylanliublog\.com\/([^"]*)"\s*\/>/g,
      `<link rel="canonical" href="${CUSTOM}$1"/>
    <link rel="alternate" href="${GITHUB_IO}$1"/>`,
    );
  }

  return html;
});
