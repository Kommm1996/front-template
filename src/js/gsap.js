import {
  gsap,
  ScrollTrigger,
  ScrollToPlugin,
} from 'gsap/all';

const initGSAP = () => {
  // don't forget to register plugins
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  gsap.matchMedia().add('(min-width: 1280px)', () => {
    // scroll fade
    document.querySelectorAll('.scrollFadeInUp')?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: 'top bottom',
          end: 'top 50%',
          scrub: 1,
        },
        y: '100',
        autoAlpha: 0,
        duration: 1,
      });
    });
    document.querySelectorAll('.scrollFadeInLeft')?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: 'top bottom',
          end: 'top 50%',
          scrub: 1,
        },
        x: '100',
        autoAlpha: 0,
        duration: 1,
      });
    });
    document.querySelectorAll('.scrollFadeInRight')?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: 'top bottom',
          end: 'top 50%',
          scrub: 1,
        },
        x: '-100',
        autoAlpha: 0,
        duration: 1,
      });
    });
    document.querySelectorAll('.scrollFadeZoomIn')?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: 'top bottom',
          end: 'top 50%',
          scrub: 1,
        },
        scale: 0.8,
        autoAlpha: 0,
        duration: 1,
      });
    });
    document.querySelectorAll('.scrollFadeZoomOut')?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: 'top bottom',
          end: 'top 50%',
          scrub: 1,
        },
        scale: 1.2,
        autoAlpha: 0,
        duration: 1,
      });
    });
    // fade
    document.querySelectorAll('.fadeInUp')?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: 'top 80%',
        },
        y: '100',
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });
    document.querySelectorAll('.fadeInLeft')?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: 'top 80%',
        },
        x: '100',
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });
    document.querySelectorAll('.fadeInRight')?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: 'top 80%',
        },
        x: '-100',
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });
    document.querySelectorAll('.fadeZoomIn')?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: 'top 80%',
        },
        scale: 0.8,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });
    document.querySelectorAll('.fadeZoomOut')?.forEach((e) => {
      gsap.from(e, {
        scrollTrigger: {
          trigger: e,
          start: 'top 80%',
        },
        scale: 1.2,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
      });
    });
  });

  /**
 * 放大动画
 * @param {element} e - 要进行放大动画的元素.
 * @param {number} x - 中心点横坐标.
 * @param {number} y - 中心点纵坐标.
 * @param {string} [posi='center'] - 元素初始位置，默认为中心位置.
 */
  const zoomIn = (e, x, y, posi = 'center') => {
    const posiObj = (posi === 'left') ? {
      left: '0',
      top: '0',
      xPercent: 0,
      yPercent: 0,
    } : {
      left: '50%',
      top: '50%',
      xPercent: -50,
      yPercent: -50,
    };

    gsap.set(e, {
      ...posiObj,
      scale: 1,
    });

    gsap.from(e, {
      scale: 0,
      left: x,
      top: y,
      xPercent: -50,
      yPercent: -50,
      duration: 0.5,
      ease: 'easeOutExpo',
    });
  };

  /**
   * 缩小动画
   * @param {element} e - 要进行缩小动画的元素.
   * @param {number} x - 还原点横坐标.
   * @param {number} y - 还原点纵坐标.
   * @param {string} [posi='center'] - 元素还原位置，默认为中心位置.
   */
  const zoomOut = (e, x, y, posi = 'center') => {
    const posiObj = (posi === 'left') ? {
      left: '0',
      top: '0',
      xPercent: 0,
      yPercent: 0,
    } : {
      left: '50%',
      top: '50%',
      xPercent: -50,
      yPercent: -50,
    };

    gsap.to(e, {
      left: x,
      top: y,
      xPercent: -50,
      yPercent: -50,
      scale: 0,
      duration: 0.3,
      ease: 'easeOutExpo',
    }).eventCallback('onComplete', () => {
      gsap.set(e, {
        ...posiObj,
        scale: 1,
      });
    });
  };

  const scrollTo = (top) => {
    gsap.to('html', {
      scrollTo: top || 0,
      duration: 1,
      ease: 'easeOutQuad',
    });
  };

  const scrollPosi = (e, start, end, startCallback) => {
    ScrollTrigger.create({
      trigger: e,
      start,
      end,
      onToggle: startCallback,
    });
  };

  return {
    scrollTo, scrollPosi, zoomIn, zoomOut,
  };
};

export default initGSAP;
