gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    end: "top 50%",
    markers: true,
    scrub: 1,
    toggleClass: "box-red",
    onUpdate: (self) => {
      console.log(self);
    },
  },
});
