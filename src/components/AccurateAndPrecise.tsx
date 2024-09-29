import Image from 'next/image'
import React from 'react'
import ArrowButton from './ui/ArrowButton'

export default function AccurateAndPrecise() {
  return (
    <section className='bg-[#F2F7FE]'>
      <div className='w-[1680px] bg-[#F2F7FE] m-auto h-[776px]'>
        <div className='w-[1120px] m-auto flex flex-col items-center justify-center'>
            <div className='w-[352px] h-[17px] mt-[64px]
            font-sans font-[400] text-[12px] leading-[16.8px] text-center text-bp-blue-1'>
              准确无误
            </div>
            <div className='w-[396px] h-[50px] mt-[16px]
            font-sans font-[600] text-[36px] leading-[50.4px] text-center text-[#000000]'>
              可信赖的数据交付
            </div>
            <div className='w-[762px] h-[48px] mt-[8px] font-sans font-[400] text-[18px] leading-[24px] text-center text-[#000000]'>
            Bluepipe致力于确保您的数据迁移过程不仅准确无误，而且高效可靠。采用先进的Exactly Once一致性保证语义，让您的数据交付过程透明、可追踪，从而实现真正的数据安全和业务连续性
            </div>
            <div className='mt-[32px]'>
              <ArrowButton>了解更多</ArrowButton>
            </div>
          <Image className='mt-[40px]' src="/accurate.svg" width={928} height={389} alt="fast" />
        </div>
      </div>
    </section>
  )
}