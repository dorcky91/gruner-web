import ContactoConversationSection from "../components/contacto/ContactoConversationSection";
import ContactoHero from "../components/contacto/ContactoHero";
import ContactoLocationSection from "../components/contacto/ContactoLocationSection";
import Footer from "../components/layout/Footer";

function ContactoPage() {
  return (
    <main>
      <ContactoHero />
      <ContactoConversationSection />
      <ContactoLocationSection />
      <Footer />
    </main>
  );
}

export default ContactoPage;
