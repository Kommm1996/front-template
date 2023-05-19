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
  // methods
  doc_toggle_fn(val) {
    if (val) {
      document.querySelector("body").classList.add("doc--active");
    } else {
      document.querySelector("body").classList.remove("doc--active");
    }
  },
  mobile_menu_toggle_fn(toggle) {
    this.doc_toggle_fn(toggle);
    this.mobile_menu_toggle = toggle;
  },
  parent_active_toggle(e) {
    e.currentTarget.parentElement.classList.toggle("active");
  },
  contact_toggle_fn(toggle) {
    this.doc_toggle_fn(toggle);
    this.contact_toggle = toggle;
  },
  search_toggle_fn(toggle) {
    this.doc_toggle_fn(toggle);
    this.search_toggle = toggle;
  },
  video_toggle_fn(e, toggle) {
    if (toggle) {
      this.video_src = e.currentTarget.dataset.src;
    }
    this.doc_toggle_fn(toggle);
    this.video_toggle = toggle;
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
