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
    <div>
      <section className=" mx-auto bg-[url('/bg-mid.svg')]">
        <div className="max-w-[1920px] m-auto">
          <Navbar />
          <Hero />
        </div>
      </section>
      <div className="max-w-[1920px] m-auto">
        <FastAndEfficient />
      </div>
      <AccurateAndPrecise />
      <div className="max-w-[1920px] m-auto">
      <HighAdaptability />
      <ConsistentExperience />
      <Customer />
      {/* <Blog /> */}
      </div>
     <CTA />
     <Footer />
    </div>
  )
}
