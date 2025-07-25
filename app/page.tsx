import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <HeroSection />
      </div>
    </div>
  );
}
