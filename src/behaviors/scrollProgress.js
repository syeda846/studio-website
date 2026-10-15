// Reference interaction preserved with lifecycle-scoped browser APIs.
export default function scrollProgress({
  $,
  addEventListener
}) {
  var page = document.scrollingElement || document.documentElement,
    tl = $("tl"),
    lis = tl.querySelectorAll("li");
  function sc() {
    var p = Math.max(0, Math.min(1,
      page.scrollTop / (page.scrollHeight - page.clientHeight || 1)));
    $("pg").style.width = p * 100 + "%";
    $("nav").classList.toggle("sc", page.scrollTop > 10);
    var k = tl.getBoundingClientRect(),
      q = Math.max(0, Math.min(1, (innerHeight * 0.65 - k.top) / k.height));
    tl.style.setProperty("--f", q * 100 + "%");
    lis.forEach(function (x) {
      x.classList.toggle("on", x.getBoundingClientRect().top < innerHeight * 0.66);
    });
  }
  addEventListener("scroll", sc, {
    passive: true
  });
  addEventListener("resize", sc);
  sc();
}
