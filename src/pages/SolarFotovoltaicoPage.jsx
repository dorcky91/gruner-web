import SolarApplicationsSection from "../components/solar/SolarApplicationsSection";
import SolarBenefitsSection from "../components/solar/SolarBenefitsSection";
import SolarCapabilitiesSection from "../components/solar/SolarCapabilitiesSection";
import SolarContactSection from "../components/solar/SolarContactSection";
import SolarHero from "../components/solar/SolarHero";
import SolarProcessSection from "../components/solar/SolarProcessSection";
import SolarProjectsSection from "../components/solar/SolarProjectsSection";
import SolarSystemSection from "../components/solar/SolarSystemSection";
import Footer from "../components/layout/Footer";
import SolarInvestmentSection from "../components/solar/SolarInvestmentSection";

function SolarPage() {
  return (
    <main>
      <SolarHero />

      <SolarCapabilitiesSection />

      <SolarSystemSection />

      <SolarBenefitsSection />

      <SolarApplicationsSection />

      <SolarProcessSection />

      <SolarProjectsSection />

      <SolarInvestmentSection />

      <SolarContactSection />

      <Footer />
    </main>
  );
}

export default SolarPage;
