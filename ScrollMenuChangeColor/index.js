gsap.registerPlugin(ScrollTrigger);

const panelHeight = document.querySelector("nav").offsetHeight;

ScrollTrigger.create({
  trigger: ".panel",
  start: `top ${panelHeight}px`,
  markers: true,
  toggleClass: {
    targets: "nav",
    className: "nav-active",
  },
});
