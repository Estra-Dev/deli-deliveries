import BecomeOne from "@/components/BecomeOne";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <HeroSection />
        <BecomeOne />
        <WhyChooseUs />
      </div>
    </div>
  );
}
