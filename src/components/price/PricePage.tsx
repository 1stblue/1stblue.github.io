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
      <div className='max-w-[1920px] m-auto'>
        <section>
          <Navbar />
        </section>
      </div>
        <Package />
      <div className='max-w-[1920px] m-auto'>
        <Version />
        <FAQ />
      </div>
     <CTA />
     <Footer />
    </div>
  )
}
