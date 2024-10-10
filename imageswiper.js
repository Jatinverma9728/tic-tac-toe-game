const swiper = new Swiper(".slider-wrapper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false, // Enable looping
  watchOverflow: false,
  // grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
