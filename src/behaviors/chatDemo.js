// Reference interaction preserved with lifecycle-scoped browser APIs.
export default function chatDemo({
  $,
  setTimeout,
  IntersectionObserver
}) {
  var S = [["u", "Hi! Where is my order #482?"], ["b", "Order #482 left our warehouse and arrives today."], ["u", "Can I change the delivery address?"], ["b", "Yes. I have sent you a secure link to update it."], ["u", "Perfect, thank you!"], ["b", "Happy to help. Anything else?"]],
    msgs = $("msgs"),
    si = 0,
    started = false;
  function add(t, c) {
    var d = document.createElement("div");
    d.className = "mg " + c;
    d.textContent = t;
    msgs.appendChild(d);
    msgs.scrollTop = msgs.scrollHeight;
    return d;
  }
  function step() {
    if (si >= S.length) {
      setTimeout(function () {
        msgs.innerHTML = "";
        si = 0;
        step();
      }, 3500);
      return;
    }
    var s = S[si++];
    if (s[0] === "b") {
      var t = document.createElement("div");
      t.className = "mg t b";
      t.innerHTML = "<i></i><i></i><i></i>";
      msgs.appendChild(t);
      msgs.scrollTop = msgs.scrollHeight;
      setTimeout(function () {
        t.remove();
        add(s[1], "b");
        setTimeout(step, 1300);
      }, 1100);
    } else {
      add(s[1], "u");
      setTimeout(step, 900);
    }
  }
  new IntersectionObserver(function (e, o) {
    if (e[0].isIntersecting && !started) {
      started = true;
      step();
      o.disconnect();
    }
  }, {
    threshold: 0.3
  }).observe(msgs);
}
