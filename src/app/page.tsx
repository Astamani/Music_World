import { FeaturedSection } from "./courses/components/FeaturedSection";
import HeroSection from "./courses/components/HeroSection";
import WhytoChoose from "./courses/components/WhytoChoose";
import { MusicTestimonalCards } from "./courses/components/Testimonalcard";
import { UpComingWebinar } from "./courses/components/UpComingWebinar";
import Image from "next/image";
import { MeetOurInstructors } from "./courses/components/MeetOurInstructors";
import { Footer } from "./courses/components/Footer";

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
