import Image from 'next/image'
import React from 'react'

export default function HighAdaptability() {
  return (
    <section className='w-[1680px] m-auto'>
      <div className='w-[1120px] m-auto h-[616px] flex'>
        <div className='mt-[150px] flex flex-col'>
          <div className='w-[352] h-[17px]
          font-sans font-[600] text-[12px] leading-[16.8px] text-bp-blue-1'>
            高适应性
          </div>
          <div className='w-[396px] h-[100px] mt-[24px]
          font-sans font-[600] text-[36px] leading-[50.4px] text-[#000000]'>
            轻量灵活<br />
            可以跑在任何地方
          </div>
          <div className='w-[364px] h-[124px] mt-[32px]
          font-sans font-[400] text-[18px] leading-[25.2px] space-y-[12px] text-[#000000]'>
            <p>核心代码仅1w行</p>
            <p>可以运行在任何 x86/arm 架构的设备上，只需 4 核 8GB 内存即可启动</p>
            <p>没有供应商锁定</p>
          </div>
        </div>
        <Image className='mt-[123px] ml-[180px]' src="/high-adaptability.svg" width={576} height={426.94} alt="high-adopter" />
    </div>
    </section>
  )
}
