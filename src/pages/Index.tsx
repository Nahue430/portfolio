import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16 lg:pt-20 fhd:pt-24 2k:pt-28">
        <About />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
