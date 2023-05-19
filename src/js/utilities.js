function isElementInViewport(el, inCB, outCB, rootMargin) {
  var margin = rootMargin || "-10%";
  function handleIntersect(entries, observer) {
    var entry = entries[0];
    if (entry.isIntersecting) {
      if (inCB && typeof inCB === "function") inCB(el, entry);
    } else {
      if (outCB && typeof outCB === "function") outCB(el, entry);
    }
  }
  var observer = new IntersectionObserver(handleIntersect, {
    rootMargin: margin,
  });
  el ? observer.observe(el) : "";
}

function getElementTop(element) {
  var top = element.offsetTop;
  var parent = element.offsetParent;
  while (parent != null) {
    top += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return top;
}

export { isElementInViewport, getElementTop }