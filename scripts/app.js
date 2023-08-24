window.addEventListener("scroll", function () {
  const header = document.querySelector(".navbar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const openBtn = document.querySelector(".hum-btn");
const openMenu = document.querySelector(".menu-mobile");
let navOpen = false;
openBtn.addEventListener("click", function () {
  if (navOpen) {
    openBtn.classList.remove("hum-btn--open");
    openMenu.classList.remove("menu-mobile--open");
    navOpen = false;
  } else {
    openBtn.classList.add("hum-btn--open");
    openMenu.classList.add("menu-mobile--open");
    navOpen = true;
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


