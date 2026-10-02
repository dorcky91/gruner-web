import Footer from "../components/layout/Footer";
import NosotrosAffiliationsSection from "../components/nosotros/NosotrosAffiliationsSection";
import NosotrosClientsSection from "../components/nosotros/NosotrosClientsSection";
import NosotrosCTASection from "../components/nosotros/NosotrosCTASection";
import NosotrosHero from "../components/nosotros/NosotrosHero";
import NosotrosManifestoSection from "../components/nosotros/NosotrosManifestoSection";
import NosotrosPillarsSection from "../components/nosotros/NosotrosPillarsSection";

function NosotrosPage() {
  return (
    <main>
      <NosotrosHero />
      <NosotrosManifestoSection />
      <NosotrosPillarsSection />
      <NosotrosClientsSection />
      <NosotrosAffiliationsSection />
      <NosotrosCTASection />
      <Footer />
    </main>
  );
}

export default NosotrosPage;
