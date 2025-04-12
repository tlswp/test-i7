import BenefitsSection from './_sections/benefits';
import Header from './_sections/header';
import HeroSection from './_sections/hero';
import RealTimeDataSection from './_sections/real-time-data';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <BenefitsSection />
      <RealTimeDataSection />
    </>
  );
}
