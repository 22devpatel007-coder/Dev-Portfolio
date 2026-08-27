"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // lock body scroll + close on Escape while menu is open
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#1F1F1F]">
      <a href="/" className="shrink-0" aria-label="Home">
        <img
          src="/images/avatar.jpg"
          alt="Dev Patel"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover border border-[#1F1F1F] hover:border-[#8B5CF6] transition-colors"
        />
      </a>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8 text-sm text-[#A1A1AA]">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="hidden sm:flex text-sm font-medium px-4 py-2 rounded-full border border-[#1F1F1F] hover:border-[#8B5CF6] transition-colors min-h-[44px] items-center"
        >
          Hire Me
        </a>

        {/* Hamburger — mobile only */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-full border border-[#1F1F1F] hover:border-[#8B5CF6] transition-colors"
        >
          <span className="relative w-5 h-4 flex flex-col justify-between">
            <span
              className={`h-[1.5px] w-full bg-white transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-white transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[1.5px] w-full bg-white transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-40 bg-[#050505] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* subtle diagonal grid, matches hero background language */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #1F1F1F 1px, transparent 1px), linear-gradient(-45deg, #1F1F1F 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
          aria-hidden="true"
        />

        <div className="relative h-full flex flex-col justify-center px-8">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline gap-4 py-4 border-b border-[#1F1F1F] motion-safe:transition-all motion-safe:duration-300 ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              <span className="font-mono text-xs text-[#8B5CF6]">
                0{i + 1}
              </span>
              <span className="font-heading text-3xl font-bold group-hover:text-[#A78BFA] transition-colors">
                {link.label}
              </span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-10 min-h-[44px] w-fit px-6 flex items-center justify-center rounded-full bg-white text-black text-sm font-medium"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}