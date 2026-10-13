const portfolioLinks = {
  websivusto: "https://me77e.github.io/Websivuston_kehittaminen_syksy_2025/Ws07_projekti/",
  figma: "https://www.figma.com/proto/Uyqt47PkV9EQf3n2AGcBfE/Ravintola-varaus--Web?node-id=1-2&t=1EPfFLpC65Qg4VO7-1",
  linkedin: "https://www.linkedin.com/in/mette-holmström-3308ab381",
  cv: "cv.pdf"
};

document.querySelectorAll("[data-link]").forEach((link) => {
  const address = portfolioLinks[link.dataset.link];
  if (!address) return;

  link.href = address;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.removeAttribute("aria-disabled");
  link.removeAttribute("role");
  link.removeAttribute("title");
});

const certificateDialog = document.querySelector("#certificateDialog");
const largeCertificate = document.querySelector("#largeCertificate");
let certificateScrollPosition = 0;

document.querySelectorAll(".certificate-button").forEach((button) => {
  button.addEventListener("click", () => {
    certificateScrollPosition = window.scrollY;

    const image = button.querySelector("img");
    largeCertificate.src = image.src;
    largeCertificate.alt = image.alt;
    certificateDialog.showModal();
  });
});

document.querySelector(".certificate-close").addEventListener("click", () => {
  certificateDialog.close();
});

certificateDialog.addEventListener("click", (event) => {
  if (event.target === certificateDialog) {
    certificateDialog.close();
  }
});

certificateDialog.addEventListener("close", () => {
  window.scrollTo(0, certificateScrollPosition);
});


