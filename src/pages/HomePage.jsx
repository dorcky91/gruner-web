import AboutSection from "../components/home/AboutSection";
import AnthesisSection from "../components/home/AnthesisSection";
import ContactSection from "../components/home/ContactSection";
import HeroSection from "../components/home/HeroSection";
import ProjectsSection from "../components/home/ProjectsSection";
import Footer from "../components/layout/Footer";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <AnthesisSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default HomePage;
