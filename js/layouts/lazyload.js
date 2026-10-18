export default function initLazyLoad() {
  const imgs = document.querySelectorAll("img[lazyload][data-src], img[data-src]");

  const load = (img) => {
    const src = img.getAttribute("data-src");
    if (!src) return;
    img.src = src;
    img.removeAttribute("data-src");
    img.removeAttribute("lazyload");
  };

  if (!("IntersectionObserver" in window)) {
    imgs.forEach(load);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        load(entry.target);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "800px 0px",
      threshold: 0,
    },
  );

  imgs.forEach((img) => observer.observe(img));
}
