import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
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
    <main>
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
    </main>
  );
}
