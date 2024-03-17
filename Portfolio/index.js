

const tl = gsap.timeline()

tl.from(".Header .links-box .logo, .Header .links-box .links-box-child .links-item, .Header .social-media-links .social-media-links-box .social-links", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.2
})

tl.from(".center-box-leftchild-content", {
  x: -100,
  opacity: 0,
})

tl.from(".center-box-rightchild .circle-main", {
  y: 100,
  opacity: 0,
})

tl.from(".center-box-rightchild .main-img", {
  y: 100,
  opacity: 0,
  // scale: 0,
  delay: 0.5
})

tl.from(".center-box-rightchild .circle-1, .center-box-rightchild .circle-2,.center-box-rightchild .circle-3",{
  rotate: 360,
  scale: 0,
  opacity: 0,
  stagger: 0.5
})


tl.from(".work-box-rightchid .introduction", {
  x: -100,
  opacity:0,
  stagger: 0.2,
  delay: 2,
  scrollTrigger: {
      trigger: "#works",
      start: "0% 35%",
      end: "10% 20%",
      scrub: 3,
      // markers: true,
  }
})

tl.from(".work-box-rightchid .main-intro-name", {
  y: 100,
  opacity:0,
  stagger: 0.2,
  scrollTrigger: {
      trigger: "#works",
      start: "10% 35%",
      end: "15% 20%",
      scrub: 3,
      // markers: true,
  }
})

tl.from(".work-box-rightchid .center-box-slogan", {
  x: 100,
  opacity:0,
  stagger: 0.2,
  scrollTrigger: {
      trigger: "#works",
      start: "20% 35%",
      end: "25% 20%",
      scrub: 3,
      // markers: true,
  }
})

tl.from(".work-box-rightchid .center-box-prg ", {
  y: 100,
  opacity:0,
  stagger: 0.2,
  scrollTrigger: {
      trigger: ".brand-txt",
      start: "30% 35%",
      end: "35% 20%",
      scrub: 1,
      // markers: true,
      // pin: true,
  }
})