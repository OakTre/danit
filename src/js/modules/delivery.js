import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  const slider = document.querySelector('.js-delivery-slide');
  const media = window.matchMedia("(max-width: 767px)");

  if (!slider) return;

  if (!media.matches) {
    let sliderInstance = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 0,
      centeredSlides: true,
      // loop: true,
      // loopAdditionalSlides: 5,
      initialSlide: 1,
      navigation: {
        nextEl: '.delivery-nav-next',
        prevEl: '.delivery-nav-prev',
      },
    });
  }
};
