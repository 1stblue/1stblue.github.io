import React from 'react'
import Package from './Package'
import Version from './Version'
import FAQ from './FAQ'
import Navbar from '../Navbar/Navbar'
import CTA from '../CTA'
import Footer from '../Footer'

export default function PricePage() {
  return (
    <div>
      <section className="w-[1680px] m-auto px-[280px]">
        <Navbar />
     </section>
     <Package />
     <Version />
     <FAQ />
     <CTA />
     <Footer />
    </div>
  )
}
