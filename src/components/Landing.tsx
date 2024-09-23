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
    <div className="w-full px-[280px]">
        <header className="w-[1120px] h-[56px]">
            <Navbar />
        </header>
        <main>
            <Hero />
            <FastAndEfficient />
            <AccurateAndPrecise />
            <HighAdaptability />
            <ConsistentExperience />
            <Customer />
            <Blog />
            <CTA />
        </main>
        <Footer />
    </div>
  )
}
