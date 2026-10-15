// Reference interaction preserved with lifecycle-scoped browser APIs.
export default function contactForm({
  $,
  listen
}) {
  var chips = $("chips");
  listen(chips, "click", function (e) {
    if (e.target.tagName === "BUTTON") e.target.classList.toggle("on");
  });
  document.querySelectorAll("[data-pre]").forEach(function (bt) {
    listen(bt, "click", function () {
      $("m").value = "I am interested in: " + bt.dataset.pre + ".\n";
      chips.querySelectorAll("button").forEach(function (c) {
        c.classList.toggle("on", bt.dataset.pre.indexOf("Redesign") === 0 && c.textContent === "Redesign");
      });
      document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  $("send").onclick = function () {
    $("ok").textContent = $("n").value.trim() && $("e").value.trim() ? "Thank you! This is a demo form, so nothing was sent yet." : "Please add your name and email or WhatsApp number.";
  };
}
