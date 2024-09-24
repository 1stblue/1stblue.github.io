import Image from 'next/image'
import React from 'react'

export default function FastAndEfficient() {
  return (
      <section className='w-[1680px] m-auto'>
        <div className='w-[1120px] m-auto h-[550px] flex'>
          <div className='w-[378px] h-auto mt-[120px] flex flex-col'>
            <div className='w-[352px] h-[17px]
            font-sans font-[400] text-[12px] leading-[16.8px] text-bp-blue-1'>
              极速高效
            </div>
            <div className='w-[352px] h-[100px] mt-[24px]
            font-sans font-[600] text-[36px] leading-[50.4px] text-[#000000]'>
              开箱即用<br/>
              让您的团队事半功倍
            </div>
            <div className='w-[378px] h-[137px] mt-[32px]
            font-sans font-[400] text-[18px] leading-[25.2px] space-y-[12px] text-[#000000]'>
              <p>基于数据特征的自动调优技术，可以智能识别和优化系统配置，节省大量维护成本，调优时间从几天缩减到5分钟。</p>
              <p>该技术还降低了手动操作的复杂性，让您的系统始终保持最佳性能，减少了运维的工作量。</p>
            </div>
          </div>
          <Image className='my-[87px] ml-[166px]' src="/fast.svg" width={576} height={376} alt="fast" />
        </div>
      </section>
  )
}
