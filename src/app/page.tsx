import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import KeyHighlights from "@/components/KeyHighlights";
import AboutMe from "@/components/AboutMe";
import FeaturedProjects from "@/components/FeaturedProjects";
import AdditionalProjects from "@/components/AdditionalProjects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Intelligence from "@/components/Intelligence";

export default function Home() {
  return (
    <div className="portfolio-layout">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <div id="about">
          <AboutMe />
        </div>
        <KeyHighlights />
        <div id="skills">
          <Intelligence />
        </div>
        <div id="projects">
          <FeaturedProjects />
        </div>
        <AdditionalProjects />
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}
