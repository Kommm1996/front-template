import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin,
} from "gsap/all";

var initGSAP = function () {
  // don't forget to register plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.matchMedia().add("(min-width: 1280px)", () => {
    // scroll fade
    document.querySelectorAll(".scrollFadeInUp")?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: "top bottom",
          end: "top 50%",
          scrub: 1,
        },
        y: "100",
        autoAlpha: 0,
        duration: 1,
      });
    });
    document.querySelectorAll(".scrollFadeInLeft")?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: "top bottom",
          end: "top 50%",
          scrub: 1,
        },
        x: "100",
        autoAlpha: 0,
        duration: 1,
      });
    });
    document.querySelectorAll(".scrollFadeInRight")?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: "top bottom",
          end: "top 50%",
          scrub: 1,
        },
        x: "-100",
        autoAlpha: 0,
        duration: 1,
      });
    });
    document.querySelectorAll(".scrollFadeZoomIn")?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: "top bottom",
          end: "top 50%",
          scrub: 1,
        },
        scale: 0.8,
        autoAlpha: 0,
        duration: 1,
      });
    });
    document.querySelectorAll(".scrollFadeZoomOut")?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: "top bottom",
          end: "top 50%",
          scrub: 1,
        },
        scale: 1.2,
        autoAlpha: 0,
        duration: 1,
      });
    });
  });

  let zoomIn = function (e, x, y, option) {
    gsap.from(e, {
      ...option,
      scale: 0,
      left: x,
      top: y,
      duration: .6,
      ease: "power3.out",
    });
  }

  let scrollTo = function (top) {
    gsap.to("html", {
      scrollTo: top || 0,
      duration: 1,
      ease: "power3.out",
    });
  };

  let scroll_posi = function (e, start, end, start_callback) {
    ScrollTrigger.create({
      trigger: e,
      start: start,
      end: end,
      onToggle: start_callback,
    })
  };

  return { scrollTo, scroll_posi, zoomIn };
};

export default initGSAP;