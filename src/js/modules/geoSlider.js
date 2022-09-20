import Swiper, {
  Navigation
} from 'swiper/swiper-bundle';

Swiper.use([Navigation]);

export default () => {
  const slider = document.querySelector('.js-geo-slider');
  const media = window.matchMedia("(max-width: 765px)");
  const btns = Array.from(document.querySelectorAll(".geo__thumb-btn"));
  const thumbs = Array.from(document.querySelectorAll(".geo__thumb-item"));
  const flag = document.querySelector(".geo__thumb-flag");

  if (!slider) return;

  let sliderInstance = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  if (media.matches) {
    btns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        sliderInstance.slideTo(index);

        if (index === 2) {
          flag.style.left = thumbs[index].offsetLeft + 1 + 'px';
        } else {
          flag.style.left = thumbs[index].offsetLeft + 1 + 'px';
        }
      });
    });

    sliderInstance.on("slideChange", (swiper) => {
      flag.style.left = thumbs[swiper.activeIndex].offsetLeft + 1 + 'px';
    });
  } else {
    btns.forEach((btn, index) => {
      btn.addEventListener("mouseenter", () => {
        sliderInstance.slideTo(index);

        flag.style.top = thumbs[index].offsetTop + 5 + 'px';
      });
    });

    sliderInstance.on("slideChange", (swiper) => {
      flag.style.top = thumbs[swiper.activeIndex].offsetTop + 5 + 'px';
    });
  }
};
