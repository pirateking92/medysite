import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Services } from "@/components/Services";
import SmokeFadeIn from "@/components/SmokeFadeIn";

export default function HomePage() {
  return (
    <div className="">
      <HeroSection />

      <Services />
    </div>
  );
}
