export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#050505] px-6 md:px-12 py-20 md:py-28 border-t border-[#1F1F1F]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
          About
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-heading font-semibold text-lg text-white">
              Who I Am
            </h3>
            <p className="mt-3 text-[#A1A1AA] leading-relaxed">
              I&apos;m Dev, a BCA 3rd year student who builds real products,
              not just class assignments.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg text-white">
              What I Build
            </h3>
            <p className="mt-3 text-[#A1A1AA] leading-relaxed">
              Web applications and tools that solve real problems — testing
              ideas, shipping them, and learning from what actually works.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg text-white">
              Current Focus
            </h3>
            <p className="mt-3 text-[#A1A1AA] leading-relaxed">
              Turning ideas into working software — sharpening the path from
              problem to product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}