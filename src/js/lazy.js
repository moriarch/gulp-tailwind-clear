var lazyImages = [].slice.call(document.querySelectorAll("[data-lazy]"));
let observe = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let lazyImage = entry.target;
      lazyImage.src = lazyImage.dataset.lazy;
      observer.unobserve(lazyImage);
    }
  });
};

if ("IntersectionObserver" in window) {
  let lazyImageObserver = new IntersectionObserver(observe, {
    rootMargin: "100px",
  });
  lazyImages.forEach(function (lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
} else {
  lazyImages.forEach((el) => (el.src = el.dataset.src));
}
