"use client";
import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768; // Tailwind `md`

export default function useViewport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return { isMobile };
}