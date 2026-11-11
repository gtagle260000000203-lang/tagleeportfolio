const themeBtn = document.getElementById("theme-btn");

const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

themeBtn.addEventListener("click", () => {
  const isLightMode = document.body.classList.toggle("light-mode");
  themeBtn.setAttribute("aria-pressed", String(isLightMode));
  themeBtn.setAttribute("aria-label", isLightMode ? "Switch to dark theme" : "Switch to light theme");
});

document.querySelectorAll(".image-slot img").forEach((image) => {
  const imageSlot = image.closest(".image-slot");
  const showImage = () => imageSlot.classList.add("has-image");

  image.addEventListener("load", showImage);
  image.addEventListener("error", () => imageSlot.classList.remove("has-image"));

  if (image.complete && image.naturalWidth > 0) {
    showImage();
  }
});
