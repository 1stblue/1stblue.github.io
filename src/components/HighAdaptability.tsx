import Image from 'next/image'
import React from 'react'
import Adaptability from '../../public/high-adaptability.svg';

export default function HighAdaptability() {
  return (
    <section>
      <div className='w-[67%] m-auto flex justify-between'>
        <div className='w-[45%] py-[150px] flex flex-col'>
          <div className='
          font-sans font-[600] text-[12px] leading-[16.8px] text-bp-blue-1'>
            高适应性
          </div>
          <div className=' mt-[24px]
          font-sans font-[600] text-[36px] leading-[50.4px] text-[#000000]'>
            轻量灵活<br />
            可以跑在任何地方
          </div>
          <div className=' mt-[32px]
          font-sans font-[400] text-[18px] leading-[25.2px] space-y-[12px] text-[#000000]'>
            <p>核心代码仅1w行</p>
            <p>可以运行在任何 x86/arm 架构的设备上，只需 4 核 8GB 内存即可启动</p>
            <p>没有供应商锁定</p>
          </div>
        </div>
       <div className='w-[45%] py-[123px] flex flex-row-reverse'>
        <Image className="mr-0" src={Adaptability} alt="high-adopter" />
       </div>
    </div>
    </section>
  )
}
