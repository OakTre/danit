import { disableScroll, enableScroll } from "../helpers/disableScroll";

export default () => {
  const btn = document.querySelector(".js-menu-btn");
  const btnClose = document.querySelector(".js-menu-btn-close");
  const menu = document.querySelector(".js-menu")

  btn.addEventListener("click", () => {
    menu.classList.add("is-active");
    disableScroll();
  });

  btnClose.addEventListener("click", () => {
    menu.classList.remove("is-active");
    enableScroll();
  });
};
