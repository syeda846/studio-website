// Reference interaction preserved with lifecycle-scoped browser APIs.
export default function scrollProgress({
  $,
  addEventListener
}) {
  var page = document.scrollingElement || document.documentElement;
  function sc() {
    var p = Math.max(0, Math.min(1,
      page.scrollTop / (page.scrollHeight - page.clientHeight || 1)));
    $("pg").style.width = p * 100 + "%";
    $("nav").classList.toggle("sc", page.scrollTop > 10);
  }
  addEventListener("scroll", sc, {
    passive: true
  });
  addEventListener("resize", sc);
  sc();
}
