import ConsultoriaContactSection from "../components/consultoria/ConsultoriaContactSection";
import ConsultoriaHero from "../components/consultoria/ConsultoriaHero";
import ConsultoriaIntelligenceSection from "../components/consultoria/ConsultoriaIntelligenceSection";
import ConsultoriaIntroSection from "../components/consultoria/ConsultoriaIntroSection";
import ConsultoriaSectorsSection from "../components/consultoria/ConsultoriaSectorsSection";
import ConsultoriaSolutionsSection from "../components/consultoria/ConsultoriaSolutionsSection";
import Footer from "../components/layout/Footer";

function ConsultoriaPage() {
  return (
    <main className="overflow-x-hidden">
      <ConsultoriaHero />

      <ConsultoriaIntroSection />

      <ConsultoriaSolutionsSection />

      <ConsultoriaSectorsSection />

      <ConsultoriaIntelligenceSection />

      <ConsultoriaContactSection />

      <Footer />
    </main>
  );
}

export default ConsultoriaPage;
