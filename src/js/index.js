// vue
import { createApp } from "petite-vue";
//fancyapps
import "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";
// bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
// smoothscroll
import SmoothScroll from "smoothscroll-for-websites";
// utilities
import { getElementTop } from "./utilities";
// countUp
import initCountUp from "./countUp";
// gsap
import initGSAP from "./gsap";
// swiper
import initSwiper from "./swiper";
// tailwindcss
import "../css/input.css";

createApp({
  // data
  loading_toggle: true,
  sidebar_toggle: false,
  contact_toggle: false,
  search_toggle: false,
  video_toggle: false,
  video_src: "",
  mobile_menu_toggle: false,
  to_posi: Function,
  zoomIn: Function,
  // methods
  doc_toggle_fn(val) {
    if (val) {
      document.querySelector("body").classList.add("doc--active");
    } else {
      document.querySelector("body").classList.remove("doc--active");
    }
  },
  mobile_menu_toggle_fn(e, toggle) {
    this.doc_toggle_fn(toggle);
    this.mobile_menu_toggle = toggle;
    if (e) {
      let x = e.clientX;
      let y = e.clientY;
      this.zoomIn("#mobile-menu", x, y, { xPercent: -50, yPercent: -50 });
    }
  },
  parent_active_toggle(e) {
    e.currentTarget.parentElement.classList.toggle("active");
  },
  self_active_toggle(e) {
    e.currentTarget.classList.toggle("active");
  },
  contact_toggle_fn(e, toggle) {
    this.doc_toggle_fn(toggle);
    this.contact_toggle = toggle;
    if (e) {
      let x = e.clientX;
      let y = e.clientY;
      this.zoomIn("#pop-form", x, y);
    }
  },
  search_toggle_fn(e, toggle) {
    this.doc_toggle_fn(toggle);
    this.search_toggle = toggle;
    if (e) {
      let x = e.clientX;
      let y = e.clientY;
      this.zoomIn("#pop-search", x, y);
    }
  },
  video_toggle_fn(e, toggle) {
    if (toggle) {
      this.video_src = e.currentTarget.dataset.src;
    }
    this.doc_toggle_fn(toggle);
    this.video_toggle = toggle;
    if (e) {
      let x = e.clientX;
      let y = e.clientY;
      this.zoomIn("#pop-video", x, y);
    }
  },
  // mounted
  mounted() {
    this.loading_toggle = false;
    // init swiper
    initSwiper();
    // initCountUp
    initCountUp();
    // initGSAP
    let gsap_obj = initGSAP();
    this.to_posi = gsap_obj.scrollTo;
    this.zoomIn = gsap_obj.zoomIn;
    // SmoothScroll
    SmoothScroll({ animationTime: 600 });
    // console.info
    console.info("Design by HQT huaqiutong.com");
    // scroll
    let ticking = false;
    let scrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // do something...
          if (scrollY > 50) {
            this.sidebar_toggle = true;
          } else {
            this.sidebar_toggle = false;
          }
          scrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    });
  }
}).mount("#app");
