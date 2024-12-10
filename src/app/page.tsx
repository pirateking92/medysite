import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
    </div>
  );
}
