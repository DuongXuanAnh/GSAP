gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    end: "top 30%",
    markers: true,
    scrub: 1,
  },
});

tl.to(".box", { x: 500 });
tl.to(".box", { y: 200 });
tl.to(".box", { x: 0 });
