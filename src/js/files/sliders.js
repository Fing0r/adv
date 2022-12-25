import Swiper, {
  Navigation,
  EffectFade,
  Pagination
} from 'swiper';

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

function initSliders() {
  if (document.querySelector('.swiper')) {
    new Swiper('.swiper', {
      modules: [Navigation, EffectFade, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      speed: 500,
      loop: true,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Брейкпоинты
      /*
      breakpoints: {
      	320: {
      		slidesPerView: 1,
      		spaceBetween: 0,
      		autoHeight: true,
      	},
      	768: {
      		slidesPerView: 2,
      		spaceBetween: 20,
      	},
      	992: {
      		slidesPerView: 3,
      		spaceBetween: 20,
      	},
      	1268: {
      		slidesPerView: 4,
      		spaceBetween: 30,
      	},
      },
      */
    });
  }
}

window.addEventListener("load", function (e) {
  initSliders();
});