import { CountUp } from "countup.js";
// utilities
import { isElementInViewport } from "./utilities";
let initCountUp = function () {
  let countUpFn = function (trigger, stati) {
    let statiEl = document.querySelectorAll(stati);
    let numAnim = new Array();
    for (let i = 0; i < statiEl.length; i++) {
      const e = statiEl[i];
      const num = parseInt(e.getAttribute("data-num"));
      numAnim.push(
        new CountUp(e, num, {
          duration: 3,
        })
      );
    }
    let statiTiggerEl = document.querySelector(trigger);
    if (statiTiggerEl) {
      isElementInViewport(
        statiTiggerEl,
        function () {
          numAnim.forEach((e) => {
            e.start();
          });
        },
        function () {
          numAnim.forEach((e) => {
            e.reset();
          });
        },
        "0%"
      );
    }
  };
  countUpFn("#countUpTrigger-0", ".countUpTrigger-0-item");
};

export default initCountUp;