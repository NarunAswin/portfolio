import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/ui/ScrollProgress";
import AmbientBackground from "@/components/ui/AmbientBackground";

export default function Home() {
  return (
    <main
      className="relative overflow-hidden"
      style={{ background: "#0b1326", minHeight: "100vh" }}
    >
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />
      <div className="pt-16 relative z-10">
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
