
// var swiper = new Swiper(".mySwiper", {
//   effect: "cards",
//   grabCursor: true,
//   rewind:true,
//   // loop:true,
//   pagination: {
//     el: ".pagination",
//     clickable: true,
//   },
//     navigation: {
//       nextEl: ".swiper-button-next1",
//       prevEl: ".swiper-button-prev1",
//     },
// });

var swiper1 = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 5,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  pagination: {
    el: ".swiper-pagination1",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    800: {
      loop: true,
      slidesPerView: 4,
      spaceBetween: 0,
    }
  }
})

var swiper1 = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 5,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination2",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  breakpoints: {
    800: {
      loop: true,
      slidesPerView: 2,
      spaceBetween: 0,
    }
  }
})