import Footer from "../components/layout/Footer";
import ResiduosCTASection from "../components/residuos/ResiduosCTASection";
import ResiduosDeliverySection from "../components/residuos/ResiduosDeliverySection";
import ResiduosFlowSection from "../components/residuos/ResiduosFlowSection";
import ResiduosHero from "../components/residuos/ResiduosHero";
import ResiduosStreamsSection from "../components/residuos/ResiduosStreamsSection";
import ResiduosValueStatementSection from "../components/residuos/ResiduosValueStatementSection";

function ResiduosPage() {
  return (
    <main>
      <ResiduosHero />

      <ResiduosFlowSection />

      <ResiduosStreamsSection />

      <ResiduosDeliverySection />

      <ResiduosValueStatementSection />

      <ResiduosCTASection />

      <Footer />
    </main>
  );
}

export default ResiduosPage;
