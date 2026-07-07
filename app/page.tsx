import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import {
  Approach,
  Challenges,
  ContactCTA,
  ImpactOS,
  Industries,
  Products,
  Services,
  TrustedPartner,
  WhyRoyaviators,
} from "@/components/HomeSections";

export default function Home() {
  return (
    <main id="main-content">
      <Header />
      <Hero />
      <TrustedPartner />
      <Challenges />
      <Services />
      <ImpactOS />
      <Industries />
      <Approach />
      <WhyRoyaviators />
      <Products />
      <ContactCTA />
      <Footer />
    </main>
  );
}
