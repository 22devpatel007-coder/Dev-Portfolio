import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#050505] px-6 md:px-12 py-24 md:py-32 border-t border-[#1F1F1F]"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-white">
          Have an idea?
        </h2>
        <p className="mt-3 text-lg text-[#A1A1AA]">
          Let&apos;s build it together.
        </p>

        <div className="mt-8">
          <Button href="mailto:devpatel160271@gamil.com" variant="primary">
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}