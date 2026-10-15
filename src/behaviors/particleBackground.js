// Reference interaction preserved with lifecycle-scoped browser APIs.
export default function particleBackground({
  $,
  col,
  addEventListener,
  requestAnimationFrame
}) {
  var cv = $("cv"),
    x = cv.getContext("2d"),
    W,
    H,
    P = [],
    m = {
      x: -999,
      y: -999
    },
    c1 = col("--b"),
    c2 = col("--v"),
    fr = 0;
  function rs() {
    W = cv.width = cv.clientWidth;
    H = cv.height = cv.clientHeight;
    P = [];
    for (var i = 0; i < Math.min(80, W * H / 16000 | 0); i++) P.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      c: i % 3 ? 1 : 2,
      r: 1.2 + Math.random() * 1.8
    });
  }
  rs();
  addEventListener("resize", rs);
  addEventListener("pointermove", function (e) {
    m.x = e.clientX;
    m.y = e.clientY;
  });
  (function f() {
    if (fr++ % 40 == 0) {
      c1 = col("--b");
      c2 = col("--v");
    }
    x.clearRect(0, 0, W, H);
    for (var i = 0; i < P.length; i++) {
      var p = P[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      var dx = p.x - m.x,
        dy = p.y - m.y,
        d = Math.hypot(dx, dy) || 1;
      if (d < 120) {
        p.x += dx / d * 1.3;
        p.y += dy / d * 1.3;
      }
      x.fillStyle = p.c == 1 ? c1 : c2;
      x.beginPath();
      x.arc(p.x, p.y, p.r, 0, 7);
      x.fill();
      for (var j = i + 1; j < P.length; j++) {
        var q = P[j],
          a = p.x - q.x,
          bb = p.y - q.y,
          dd = a * a + bb * bb;
        if (dd < 16000) {
          x.globalAlpha = (1 - dd / 16000) * 0.7;
          x.strokeStyle = p.c == 1 ? c1 : c2;
          x.lineWidth = 0.7;
          x.beginPath();
          x.moveTo(p.x, p.y);
          x.lineTo(q.x, q.y);
          x.stroke();
          x.globalAlpha = 1;
        }
      }
    }
    requestAnimationFrame(f);
  })();
}
