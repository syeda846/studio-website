// Reference interaction preserved with lifecycle-scoped browser APIs.
export default function cardEffects({
  listen
}) {
  document.querySelectorAll(".card").forEach(function (c) {
    listen(c, "pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      var k = c.getBoundingClientRect(),
        x = Math.max(0, Math.min(1, (e.clientX - k.left) / k.width)),
        y = Math.max(0, Math.min(1, (e.clientY - k.top) / k.height));
      c.style.setProperty("--mx", x * 100 + "%");
      c.style.setProperty("--my", y * 100 + "%");
      if (!c.classList.contains("hot")) {
        c.style.setProperty("--ry", (x - 0.5) * 8 + "deg");
        c.style.setProperty("--rx", (0.5 - y) * 8 + "deg");
      }
    });
    listen(c, "pointerleave", function () {
      c.style.setProperty("--rx", "0deg");
      c.style.setProperty("--ry", "0deg");
    });
  });
}
