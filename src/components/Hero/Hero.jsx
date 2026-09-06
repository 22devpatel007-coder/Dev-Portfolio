import Navbar from "@/components/Navbar/Navbar";
import HeroStats from "./HeroStats";
import ProductShowcase from "@/components/ProductShowcase/ProductShowcase";
import HeroBackground from "@/components/ProductShowcase/HeroBackground";

export default function Hero() {
  return (
    
    <section className="relative w-full bg-[#050505] text-white overflow-hidden">
      <HeroBackground />
      {/* subtle background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#1F1F1F 1px, transparent 1px), linear-gradient(90deg, #1F1F1F 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-[60%_40%] gap-12 items-start">
          {/* Left: copy + CTAs + stats */}
          <div className="motion-safe:animate-[heroFadeIn_500ms_ease-out]">
            <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight tracking-tight">
              Turning Ideas
              <br />
              Into{" "}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(135deg,#8B5CF6_0%,#A78BFA_100%)]">
                Real Products
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-[#A1A1AA] max-w-md">
              I build web applications, automation tools, and digital
              products from concept to launch.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="min-h-[44px] px-6 flex items-center justify-center rounded-full bg-white text-black text-sm font-medium hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="min-h-[44px] px-6 flex items-center justify-center rounded-full border border-[#1F1F1F] text-sm font-medium hover:border-[#8B5CF6] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(139,92,246,0.25)] transition-all"
              >
                Let's Talk
              </a>
            </div>

            <div className="mt-10 motion-safe:animate-[heroFadeIn_600ms_ease-out_150ms_both]">
              <HeroStats />
            </div>
          </div>

          {/* Showcase: last in mobile stack (per design.md), right column on desktop */}
          <div className="flex items-center justify-center motion-safe:animate-[heroFadeIn_600ms_ease-out_150ms_both]">
            <div className="w-full max-w-[260px] md:max-w-[340px] mx-auto md:mx-0">
              <ProductShowcase />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}