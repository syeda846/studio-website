// Reference interaction preserved with lifecycle-scoped browser APIs.
export default function faqAccordion({
  $,
  listen
}) {
  listen($("faqs"), "click", function (e) {
    var bt = e.target.closest("button");
    if (!bt) return;
    var f = bt.parentNode,
      was = f.classList.contains("open");
    document.querySelectorAll(".fq").forEach(function (q) {
      q.classList.remove("open");
    });
    if (!was) f.classList.add("open");
  });
}
