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

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const navbarNav = document.querySelector('.navigasi');
const hamburger = document.querySelector('#hamburger-menu');

hamburger.addEventListener('click', () => {
  navbarNav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
feather.replace();


