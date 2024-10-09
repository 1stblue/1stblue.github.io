import Image from 'next/image'
import React from 'react'
import Fast from '../../public/fast.svg';

export default function FastAndEfficient() {
  return (
      <section>
        <div className='w-[67%] m-auto flex justify-between'>
          <div className='w-[45%] mt-[120px] flex flex-col'>
            <div className='
            font-sans font-[400] text-[12px] leading-[16.8px] text-bp-blue-1'>
              极速高效
            </div>
            <div className='mt-[24px]
            font-sans font-[600] text-[36px] leading-[50.4px] text-[#000000]'>
              开箱即用<br/>
              让您的团队事半功倍
            </div>
            <div className='mt-[32px]
            font-sans font-[400] text-[18px] leading-[25.2px] space-y-[12px] text-[#000000]'>
              <p>基于数据特征的自动调优技术，可以智能识别和优化系统配置，节省大量维护成本，调优时间从几天缩减到5分钟。</p>
              <p>该技术还降低了手动操作的复杂性，让您的系统始终保持最佳性能，减少了运维的工作量。</p>
            </div>
          </div>
          <div className='w-[45%] flex flex-row-reverse'>
             <Image className='mr-0 my-[87px]' src={Fast} alt="fast" />
          </div>
        </div>
      </section>
  )
}
