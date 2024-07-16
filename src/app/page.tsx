import { FeaturedSection } from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import WhytoChoose from "@/components/WhytoChoose";
import { MusicTestimonalCards } from "@/components/Testimonalcard";
import { UpComingWebinar } from "@/components/UpComingWebinar";
import Image from "next/image";
import { MeetOurInstructors } from "@/components/MeetOurInstructors";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedSection/>
      <WhytoChoose/>
      <MusicTestimonalCards/>
      <UpComingWebinar/>
      <MeetOurInstructors/>
      <Footer/>
    </main>
    
    
  );
}
