document.addEventListener("DOMContentLoaded", function () {
  const fasilitasRow = document.querySelector(".fasilitas-row");

  if (fasilitasRow) {
    fasilitasRow.addEventListener(
      "wheel",
      function (evt) {
        evt.preventDefault();
        const scrollAmount = evt.deltaY * 2;
        fasilitasRow.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      },
      { passive: false }
    );
  }
});