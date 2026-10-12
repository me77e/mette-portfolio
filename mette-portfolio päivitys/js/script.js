const portfolioLinks = {
  websivusto: "https://me77e.github.io/Websivuston_kehittaminen_syksy_2025/Ws07_projekti/",
  figma: "https://www.figma.com/proto/Uyqt47PkV9EQf3n2AGcBfE/Ravintola-varaus--Web?node-id=9-498&p=f&viewport=16%2C110%2C0.14&t=wiVcBKC5v0L1gE8X-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=9%3A498&show-proto-sidebar=1&page-id=0%3A1",
  linkedin: "https://www.linkedin.com/in/mette-holmström-3308ab381",
  cv: "cv.pdf"
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const address = portfolioLinks[link.dataset.link];
  if (!address) return;
  link.href = address;
  link.removeAttribute("aria-disabled");
  link.removeAttribute("role");
  link.removeAttribute("title");
});
