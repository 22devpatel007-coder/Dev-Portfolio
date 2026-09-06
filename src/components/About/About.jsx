export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#050505] px-6 md:px-12 pt-12 md:pt-16 pb-20 md:pb-28 border-t border-[#1F1F1F]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-[3fr_2fr] gap-12 md:gap-16 items-start">
        {/* Bio */}
        <div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
            About
          </h2>

          <p className="mt-6 text-[#A1A1AA] leading-relaxed max-w-[65ch]">
            I enjoy building products rather than just completing projects.
            Over the past few years I&apos;ve built and deployed web
            applications including a music streaming platform, rental
            management websites, and reusable business templates using
            React, Node.js, Firebase, PHP, and MySQL.
          </p>

          <p className="mt-4 text-[#A1A1AA] leading-relaxed max-w-[65ch]">
            My focus is on creating responsive, user-friendly applications
            while continuously improving my skills in frontend and
            full-stack development. Currently looking for opportunities to
            contribute to real-world products and grow as a software
            developer.
          </p>
        </div>

        {/* Highlights rail */}
        <div className="flex flex-col gap-5 md:pt-16">
          <div className="border-l-2 border-[#8B5CF6] pl-4">
            <p className="text-white font-heading font-semibold">
              Full-stack development
            </p>
            <p className="mt-1 text-sm text-[#A1A1AA]">
              React, Node.js, Firebase, PHP, MySQL
            </p>
          </div>

          <div className="border-l-2 border-[#8B5CF6] pl-4">
            <p className="text-white font-heading font-semibold">
              Shipped, not just built
            </p>
            <p className="mt-1 text-sm text-[#A1A1AA]">
              Deployed platforms with real, active users
            </p>
          </div>

          <div className="border-l-2 border-[#8B5CF6] pl-4">
            <p className="text-white font-heading font-semibold">
              Open to opportunities
            </p>
            <p className="mt-1 text-sm text-[#A1A1AA]">
              Looking to contribute to real-world products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}