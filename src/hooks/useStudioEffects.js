import { useEffect } from 'react';
import scrollProgress from "../behaviors/scrollProgress";
import scrollReveal from "../behaviors/scrollReveal";
import cardEffects from "../behaviors/cardEffects";
import heroEffects from "../behaviors/heroEffects";
import particleBackground from "../behaviors/particleBackground";
import chatDemo from "../behaviors/chatDemo";
import faqAccordion from "../behaviors/faqAccordion";
import contactForm from "../behaviors/contactForm";

// Dispose every observer, listener, timer and animation frame on unmount,
// including React StrictMode's development setup/cleanup cycle.
export default function useStudioEffects() {
  useEffect(() => {
    const controller = new AbortController();
    const timers = new Set();
    const frames = new Set();
    const observers = [];
    const r = document.documentElement;
    const messages = document.getElementById("msgs");
    const context = {
      r,
      listen: (element, type, handler, options = {}) => element.addEventListener(type, handler, {
        ...options,
        signal: controller.signal
      }),
      $: id => document.getElementById(id),
      col: name => getComputedStyle(r).getPropertyValue(name).trim(),
      addEventListener: (type, handler, options = {}) => window.addEventListener(type, handler, {
        ...options,
        signal: controller.signal
      }),
      setTimeout: (callback, delay) => {
        const id = window.setTimeout(() => {
          timers.delete(id);
          callback();
        }, delay);
        timers.add(id);
        return id;
      },
      requestAnimationFrame: callback => {
        const id = window.requestAnimationFrame(time => {
          frames.delete(id);
          callback(time);
        });
        frames.add(id);
        return id;
      },
      IntersectionObserver: class extends window.IntersectionObserver {
        constructor(callback, options) {
          super(callback, options);
          observers.push(this);
        }
      }
    };
    scrollProgress(context);
    scrollReveal(context);
    cardEffects(context);
    heroEffects(context);
    particleBackground(context);
    chatDemo(context);
    faqAccordion(context);
    contactForm(context);
    return () => {
      controller.abort();
      timers.forEach(window.clearTimeout);
      frames.forEach(window.cancelAnimationFrame);
      observers.forEach(observer => observer.disconnect());
      messages.replaceChildren();
    };
  }, []);
}
