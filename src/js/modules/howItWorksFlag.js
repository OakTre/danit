import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default () => {
  const flag = document.querySelector("._flag");

  if (!flag) return;

  gsap.to(flag, {
    y: "80rem",
    scrollTrigger: {
      trigger: flag,
      start: "top 70%",
      endTrigger: ".howitworks__content ul li:last-child",
      scrub: true,
    }
  })
};
