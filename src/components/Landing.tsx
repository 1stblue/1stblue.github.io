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
    <div className="w-full">
     <section className="w-[1680px] h-[830px] px-[280px] bg-[url('/bg-mid.svg')]">
        <Navbar />
        <Hero />
     </section>
     <section>
        <FastAndEfficient />
        <AccurateAndPrecise />
        <HighAdaptability />
        <ConsistentExperience />
        <Customer />
        <Blog />
        <CTA />
     </section>
     <section>
       <Footer />
     </section>
    </div>
  )
}
