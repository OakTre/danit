import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  const slider = document.querySelector('.js-wetake-slider');
  const media = window.matchMedia("(max-width: 993px)");

  if (!slider) return;

  let sliderInstance = new Swiper(slider, {
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    // loop: true,
    // loopAdditionalSlides: 5,
    initialSlide: 2,
    navigation: {
      nextEl: '.we-take-nav-next',
      prevEl: '.we-take-nav-prev',
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 50,
        centeredSlides: false,
      },
      765: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 'auto',
        spaceBetween: 0,
      }
    }
  });
};
