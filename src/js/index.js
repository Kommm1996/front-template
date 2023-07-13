// vue
import { createApp } from 'petite-vue';
// fancyapps
import '@fancyapps/ui/dist/fancybox.esm';
import '@fancyapps/ui/dist/fancybox.css';
// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// smoothscroll
import SmoothScroll from 'smoothscroll-for-websites';
// countUp
import initCountUp from './countUp';
// gsap
import initGSAP from './gsap';
// swiper
import initSwiper from './swiper';
// tailwindcss
import '../css/input.css';

createApp({
  // data
  loadingToggle: true,
  sidebarToggle: false,
  contactToggle: false,
  searchToggle: false,
  videoToggle: false,
  videoSrc: '',
  mobileMenuToggle: false,
  toPosi: Function,
  zoomIn: Function,
  zoomOut: Function,
  x: '50%',
  y: '50%',
  // methods
  docToggleFn(val) {
    if (val) {
      document.querySelector('body').classList.add('doc--active');
    } else {
      document.querySelector('body').classList.remove('doc--active');
    }
  },
  mobileMenuToggleFn(e, toggle) {
    this.popAnimationFn(e, toggle, '#mobile-menu', 'mobile_menu', 'left');
  },
  parentActiveToggleFn(e) {
    e.currentTarget.parentElement.classList.toggle('active');
  },
  selfActiveToggleFn(e) {
    e.currentTarget.classList.toggle('active');
  },
  contactToggleFn(e, toggle) {
    this.popAnimationFn(e, toggle, '#pop-form', 'contact');
  },
  searchToggleFn(e, toggle) {
    this.popAnimationFn(e, toggle, '#pop-search', 'search');
  },
  videoToggleFn(e, toggle) {
    this.popAnimationFn(e, toggle, '#pop-video', 'video');
  },
  popAnimationFn(e, toggle, selector, state, posi) {
    if (e) {
      this.x = e.clientX;
      this.y = e.clientY;
    }
    if (toggle) {
      if (selector === '#pop-video') {
        this.videoSrc = e.currentTarget.dataset.src;
      }
      this.docToggleFn(toggle);
      this[`${state}Toggle`] = toggle;
      this.zoomIn(selector, this.x, this.y, posi);
    } else {
      if (selector === '#pop-video') {
        this.videoSrc = '';
      }
      this.zoomOut(selector, this.x, this.y, posi);
      const timeId = setTimeout(() => {
        this.docToggleFn(toggle);
        this[`${state}Toggle`] = toggle;
        this.x = '50%';
        this.y = '50%';
        clearTimeout(timeId);
      }, 280);
    }
  },
  // mounted
  mounted() {
    this.loadingToggle = false;
    // initSwiper
    initSwiper();
    // initCountUp
    initCountUp();
    // initGSAP
    const gsapObj = initGSAP();
    this.toPosi = gsapObj.scrollTo;
    this.zoomIn = gsapObj.zoomIn;
    this.zoomOut = gsapObj.zoomOut;
    // SmoothScroll
    SmoothScroll({ animationTime: 600 });
    // console.info
    // eslint-disable-next-line no-console
    console.info('Design by HQT huaqiutong.com');
    // scroll
    let ticking = false;
    let { scrollY } = window;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // do something...
          if (scrollY > 50) {
            this.sidebarToggle = true;
          } else {
            this.sidebarToggle = false;
          }
          scrollY = window.scrollY;
          ticking = false;
        });
        ticking = true;
      }
    });
  },
}).mount('#app');
