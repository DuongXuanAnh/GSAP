gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 1400,
  //   durtion: 5,
  scrollTrigger: {
    trigger: ".square",
    // start, end fixed depending on the screen
    start: "top 60%",
    end: "top 40%",

    scrub: 1, // scrub is true, it will scroll the animation as the user scrolls
    // toggleActions: "play none none none", // OnEnter, OnLeave, OnEnterBack, OnLeaveBack
    // play, reverse, pause, resume, restart, complete, none
    // pin: true,
    markers: true,
  },
});
