import MovilidadContactSection from "../components/movilidad/MovilidadContactSection";
import MovilidadDeploymentSection from "../components/movilidad/MovilidadDeploymentSection";
import MovilidadEnergyStackSection from "../components/movilidad/MovilidadEnergyStackSection";
import MovilidadHero from "../components/movilidad/MovilidadHero";
import MovilidadInfrastructureSection from "../components/movilidad/MovilidadInfrastructureSection";
import MovilidadPerformanceSection from "../components/movilidad/MovilidadPerformanceSection";
import MovilidadScaleSection from "../components/movilidad/MovilidadScaleSection";
import MovilidadScenariosSection from "../components/movilidad/MovilidadScenariosSection";

import Footer from "../components/layout/Footer";

function MovilidadPage() {
  return (
    <main>
      <MovilidadHero />

      <MovilidadInfrastructureSection />

      <MovilidadScenariosSection />

      <MovilidadPerformanceSection />

      <MovilidadEnergyStackSection />

      <MovilidadScaleSection />

      <MovilidadDeploymentSection />

      <MovilidadContactSection />

      <Footer />
    </main>
  );
}

export default MovilidadPage;
