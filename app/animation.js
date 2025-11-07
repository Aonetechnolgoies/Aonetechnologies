"use client";

/**
 * useReveal: adds a 'reveal-in' class when elements enter viewport (only once)
 * useSmoothScroll: offsets anchor scrolling so content isn't hidden behind the sticky navbar
 */
import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Smooth scroll with offset for sticky nav */
export function useSmoothScroll(offset = 80) {
  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest("[data-scroll]");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href?.startsWith("#")) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      const top =
        el.getBoundingClientRect().top + window.scrollY - Number(offset);
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [offset]);
}

