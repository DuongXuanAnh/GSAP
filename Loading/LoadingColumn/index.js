TweenMax.staggerFrom(
  ".block",
  0.8,
  {
    width: "0%",
    ease: Power1.easeIn,
    delay: 2,
  },
  0.04
);

TweenMax.to(".loader", 1, {
  x: 2,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1.5,
});

TweenMax.staggerFrom(
  ".nav > a, .about p, sub-header > a",
  2,
  {
    opacity: 0,
    y: 30,
    ease: Expo.easeInOut,
    delay: 3,
  },
  0.06
);

TweenMax.to(".box", 0.2, {
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 3.8,
});

TweenMax.to(".img", 0.2, {
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 4,
});

TweenMax.to(".box", 2.4, {
  y: "-100%",
  ease: Expo.easeInOut,
  delay: 4,
});
