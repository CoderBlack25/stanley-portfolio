import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
//import Projects from "@/components/projects/Projects";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Projects /> */}
      <ProjectsSection />
      <Footer />
    </main>
  );
};

export default page;
