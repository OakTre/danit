import Swiper, {
  Navigation,
  Pagination,
  Controller
} from 'swiper/swiper-bundle';

Swiper.use([Navigation, Pagination, Controller]);

export default () => {
  const slider = document.querySelector(".js-about-slider");
  const slider2 = document.querySelector(".js-about-slider2");

  console.log(slider, slider2);

  // if (!slider) return;

  let sliderAbout = new Swiper(slider2, {
    slidesPerView: 'auto',
    spaceBetween: 0,
    allowTouchMove: false,
    pagination: {
      el: '.js-about-slider-pagination',
      type: 'bullets',
    },
  });

  let sliderAbout2 = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.js-about-btn-next',
      prevEl: '.js-about-btn-prev',
    }
  });

  sliderAbout.controller.control = sliderAbout2;
  sliderAbout2.controller.control = sliderAbout;
};
