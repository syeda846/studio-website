// Reference interaction preserved with lifecycle-scoped browser APIs.
export default function scrollReveal({
  setTimeout,
  IntersectionObserver
}) {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var t = e.target;
      t.style.transitionDelay = (t.dataset.d || 0) + "ms";
      t.classList.add("in");
      setTimeout(function () {
        t.style.transitionDelay = "";
      }, 1400);
      io.unobserve(t);
    });
  }, {
    threshold: 0.15
  });
  document.querySelectorAll("[data-r],.sh").forEach(function (el) {
    io.observe(el);
  });
}
