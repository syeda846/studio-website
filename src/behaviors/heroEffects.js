// Reference interaction preserved with lifecycle-scoped browser APIs.
export default function heroEffects({
  $,
  addEventListener,
  setTimeout
}) {
  var L = ["Hi! Need a website or an app?", "I can help with AI tools too.", "Tell us your idea. We'll plan it."],
    bub = $("bub"),
    li = 0,
    ci = 0,
    del = false;
  (function ty() {
    var t = L[li];
    ci += del ? -1 : 1;
    if (bub.firstChild) bub.removeChild(bub.firstChild);
    bub.insertBefore(document.createTextNode(t.slice(0, ci)), bub.firstChild);
    var d = del ? 25 : 55;
    if (!del && ci === t.length) {
      del = true;
      d = 2200;
    } else if (del && ci === 0) {
      del = false;
      li = (li + 1) % L.length;
      d = 300;
    }
    setTimeout(ty, d);
  })();
  var bot = $("bot"),
    stg = $("stg");
  addEventListener("pointermove", function (e) {
    if (e.pointerType !== "mouse") return;
    var k = stg.getBoundingClientRect(),
      dx = (e.clientX - (k.left + k.width / 2)) / innerWidth;
    bot.style.setProperty("--tx", Math.max(-14, Math.min(14, dx * 34)) + "px");
    bot.style.setProperty("--r", Math.max(-4, Math.min(4, dx * 9)) + "deg");
  });
  $("face").src = $("rb").src;
}
