import { useEffect, useRef, useState } from 'react';

// A single React progress value drives line, dot and stage highlights together.
export default function useJourneyAnimation(containerRef, paused) {
  const elapsed = useRef(0);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0, lastTime = null, lastPaint = 0, visible = false;
    function tick(time) {
      if (lastTime !== null) elapsed.current += Math.min(time - lastTime, 100);
      lastTime = time;
      if (time - lastPaint >= 1000 / 30) {
        setProgress(Math.min((elapsed.current % 20000) / 18000, 1));
        lastPaint = time;
      }
      frame = window.requestAnimationFrame(tick);
    }
    function sync() {
      window.cancelAnimationFrame(frame);
      lastTime = null;
      if (preference.matches) frame = window.requestAnimationFrame(() => setProgress(1));
      else if (!paused && visible && !document.hidden) frame = window.requestAnimationFrame(tick);
    }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, {threshold: .05});
    observer.observe(containerRef.current);
    preference.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      preference.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
    };
  }, [containerRef, paused]);
  return progress;
}
