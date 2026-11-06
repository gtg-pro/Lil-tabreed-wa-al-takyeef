"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    AOS.init({
      once: true,
      duration: 650,
      offset: 72,
      easing: "ease-out-cubic",
      disable: reducedMotion,
    });

    document.documentElement.setAttribute("data-aos-enabled", "");
    AOS.refreshHard();

    return () => {
      document.documentElement.removeAttribute("data-aos-enabled");
    };
  }, []);

  return null;
}
