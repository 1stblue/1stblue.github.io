import AccurateAndPrecise from "./AccurateAndPrecise";
import Blog from "./Blog";
import ConsistentExperience from "./ConsistentExperience";
import CTA from "./CTA";
import Customer from "./Customer";
import FastAndEfficient from "./FastAndEfficient";
import Footer from "./Footer";
import Hero from "./Hero";
import HighAdaptability from "./HighAdaptability";
import Navbar from "./Navbar/Navbar";

export default function Landing() {
  return (
    <div className="w-[1680px] m-auto">
     <section className="h-[830px] px-[280px] bg-[url('/bg-mid.svg')]">
        <Navbar />
        <Hero />
     </section>
     <FastAndEfficient />
     <section className="bg-[#F2F7FE]">
       <AccurateAndPrecise />
     </section>
     <HighAdaptability />
     <ConsistentExperience />
     <Customer />
     <Blog />
     <CTA />
     <section>
       <Footer />
     </section>
    </div>
  )
}
