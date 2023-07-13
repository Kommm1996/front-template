function isElementInViewport(el, inCB, outCB, rootMargin) {
  const margin = rootMargin || '-10%';
  function handleIntersect(entries) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      if (inCB && typeof inCB === 'function') inCB(el, entry);
    } else if (outCB && typeof outCB === 'function') outCB(el, entry);
  }
  const observer = new IntersectionObserver(handleIntersect, {
    rootMargin: margin,
  });
  if (el) {
    observer.observe(el);
  }
}

function getElementTop(element) {
  let top = element.offsetTop;
  let parent = element.offsetParent;
  while (parent != null) {
    top += parent.offsetTop;
    parent = parent.offsetParent;
  }
  return top;
}

export { isElementInViewport, getElementTop };
