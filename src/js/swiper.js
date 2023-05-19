import Swiper from "swiper/swiper-bundle.esm.js";
import "swiper/swiper-bundle.min.css";

var initSwiper = function () {
  var home_banner_swiper = new Swiper(".home-banner-swiper", {
    speed: 400,
    loop: true,
    slidesPerView: 1,
    // spaceBetween: 10,
    parallax: true,
    observer: true,
    observeParents: true,
    autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.home-banner-swiper-button-next',
      prevEl: '.home-banner-swiper-button-prev',
    },
    pagination: {
      el: ".home-banner-swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1280: {
        speed: 1000,
      },
    }
  });
}

export default initSwiper;