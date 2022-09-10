import Swiper, {
  Autoplay
} from 'swiper/swiper-bundle';

Swiper.use([Autoplay]);

export default () => {
  const slider = document.querySelector('.js-companies-slider');
  const slider2 = document.querySelector('.js-companies-slider2');

  if (!slider) return;

  let sliderInstance = new Swiper(slider, {
    slidesPerView: "auto",
    spaceBetween: 7,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    loopAdditionalSlides: 17,
    allowTouchMove: false,
    speed: 8000,
    autoplay: {
      delay: 1,
    },
    breakpoints: {
      280: {
        spaceBetween: 3,
      },
      767: {
        spaceBetween: 7,
      },
    }
  });

  let sliderInstance2 = new Swiper(slider2, {
    slidesPerView: "auto",
    spaceBetween: 7,
    centeredSlides: true,
    initialSlide: 2,
    loop: true,
    loopAdditionalSlides: 17,
    allowTouchMove: false,
    speed: 8000,
    autoplay: {
      delay: 1,
    },
    breakpoints: {
      280: {
        spaceBetween: 3,
      },
      767: {
        spaceBetween: 7,
      },
    }
  });
};
