import ProyectosHero from "../components/proyectos/ProyectosHero";
import ProyectosFeaturedSection from "../components/proyectos/ProyectosFeaturedSection";
import ProyectosPortfolioSection from "../components/proyectos/ProyectosPortfolioSection";
import ProyectosCapabilitiesSection from "../components/proyectos/ProyectosCapabilitiesSection";
import ProyectosCTASection from "../components/proyectos/ProyectosCTASection";
import Footer from "../components/layout/Footer";

function ProyectosPage() {
  return (
    <>
      <ProyectosHero />

      <ProyectosFeaturedSection />

      <ProyectosPortfolioSection />

      <ProyectosCapabilitiesSection />

      <ProyectosCTASection />

      <Footer />
    </>
  );
}

export default ProyectosPage;
