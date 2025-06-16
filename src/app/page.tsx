import AboutUs from "@/sections/AboutUs";
import CallToAction from "@/sections/CallToAction";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import TrustedBy from "@/sections/TrustedBy";
import WhyChooseUs from "@/sections/WhyChooseUs";


export default function Home() {
  return (
    <>
    <Hero/>
    <TrustedBy/>
    <AboutUs/>
    <WhyChooseUs/>
    <Services/>
    <CallToAction/>
    <Testimonials/>
    </>
  );
}
