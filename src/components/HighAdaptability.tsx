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
            可持续发展
          </div>
          <div className=' mt-[24px]
          font-sans font-[600] text-[36px] leading-[50.4px] text-[#000000]'>
            运行在您的环境中<br />
            没有任何供应商锁定
          </div>
          <div className=' mt-[32px]
          font-sans font-[400] text-[18px] leading-[25.2px] space-y-[12px] text-[#000000]'>
            <p>您的机器、您的网络</p>
            <p>云也好，IDC 也好，笔记本电脑也行</p>
            <p>全自研引擎，自主知识产权，没有供应商锁定</p>
          </div>
        </div>
       <div className='w-[45%] py-[123px] flex flex-row-reverse'>
        <Image className="mr-0" src={Adaptability} alt="high-adopter" />
       </div>
    </div>
    </section>
  )
}
