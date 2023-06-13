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
  zoomOut: Function,
  x: '50%',
  y: '50%',
  // methods
  doc_toggle_fn(val) {
    if (val) {
      document.querySelector("body").classList.add("doc--active");
    } else {
      document.querySelector("body").classList.remove("doc--active");
    }
  },
  mobile_menu_toggle_fn(e, toggle) {
    this.pop_animation_fn(e, toggle, '#mobile-menu', 'mobile_menu', 'left')
  },
  parent_active_toggle(e) {
    e.currentTarget.parentElement.classList.toggle("active");
  },
  self_active_toggle(e) {
    e.currentTarget.classList.toggle("active");
  },
  contact_toggle_fn(e, toggle) {
    this.pop_animation_fn(e, toggle, '#pop-form', 'contact')
  },
  search_toggle_fn(e, toggle) {
    this.pop_animation_fn(e, toggle, '#pop-search', 'search')
  },
  video_toggle_fn(e, toggle) {
    this.pop_animation_fn(e, toggle, '#pop-video', 'video')
  },
  pop_animation_fn(e, toggle, selector, state, posi) {
    if (e) {
      this.x = e.clientX;
      this.y = e.clientY;
    }
    if (toggle) {
      if (selector === "#pop-video") {
        this.video_src = e.currentTarget.dataset.src;
      }
      this.doc_toggle_fn(toggle);
      this[state + '_toggle'] = toggle;
      this.zoomIn(selector, this.x, this.y, posi);
    } else {
      if (selector === "#pop-video") {
        this.video_src = '';
      }
      this.zoomOut(selector, this.x, this.y, posi);
      let time_id = setTimeout(() => {
        this.doc_toggle_fn(toggle);
        this[state + '_toggle'] = toggle;
        this.x = '50%';
        this.y = '50%';
        clearTimeout(time_id)
      }, 280)
    }
  },
  // mounted
  mounted() {
    this.loading_toggle = false;
    // initSwiper
    initSwiper();
    // initCountUp
    initCountUp();
    // initGSAP
    let gsap_obj = initGSAP();
    this.to_posi = gsap_obj.scrollTo;
    this.zoomIn = gsap_obj.zoomIn;
    this.zoomOut = gsap_obj.zoomOut;
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
