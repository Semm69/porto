// ==========================
// Script Baca Selengkapnya
// ==========================
const readMoreBtn = document.querySelector(".read-more-btn");
const moreText = document.querySelector("#tentang .more-text");
const dots = document.querySelector("#tentang .dots");

readMoreBtn.addEventListener("click", () => {
  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    dots.style.display = "inline";
    readMoreBtn.textContent = "Baca Selengkapnya";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    readMoreBtn.textContent = "Tutup";
  }
});
