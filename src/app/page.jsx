import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import About from "@/components/About/About";
import Stack from "@/components/Stack/Stack";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Stack />
      <Contact />
    </main>
  );
}