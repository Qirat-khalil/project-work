import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Footer from "./components/Footer";
import Recentworksec from "./components/Recentworksec";
import StorySection from "./components/StorySection";
import TechSection from "./components/TechSection";
import ProcessSection from "./components/ProcessSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
// import CtaSection from "./components/CTASection";
// import CtaSection from "./components/CTASection";
// import ServiceCard from "./components/ServicesCard";
// import ServicesSection from "./components/ServicesSection";
// import Benifits from "./components/Benefits";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Hero/>
   <ProcessSection/>
   <ProjectsSection/>
   {/* <Recentworksec/> */}
   <StorySection/>
   <TechSection/>
   <TestimonialsSection/>
   {/* <CtaSection/> */}
   {/* <Benifits/> */}
   <Footer/>
   </>
  );
}
