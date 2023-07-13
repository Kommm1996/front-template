import { CountUp } from 'countup.js';
// utilities
import { isElementInViewport } from './utilities';

const initCountUp = () => {
  const countUpFn = (trigger, stati) => {
    const statiEl = document.querySelectorAll(stati);
    const numAnim = [];
    for (let i = 0; i < statiEl.length; i += 1) {
      const e = statiEl[i];
      const num = parseInt(e.getAttribute('data-num'), 10);
      numAnim.push(
        new CountUp(e, num, {
          duration: 3,
        }),
      );
    }
    const statiTiggerEl = document.querySelector(trigger);
    if (statiTiggerEl) {
      isElementInViewport(
        statiTiggerEl,
        () => {
          numAnim.forEach((e) => {
            e.start();
          });
        },
        () => {
          numAnim.forEach((e) => {
            e.reset();
          });
        },
        '0%',
      );
    }
  };
  countUpFn('#countUpTrigger-0', '.countUpTrigger-0-item');
};

export default initCountUp;
