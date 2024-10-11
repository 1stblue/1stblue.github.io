import Image from 'next/image'
import React from 'react'
import Fast from '../../public/fast.svg';

export default function FastAndEfficient() {
  return (
      <section>
        <div className='w-[1120px] m-auto flex justify-between'>
          <div className='w-[45%] py-[120px] flex flex-col'>
            <div className='
            font-sans font-[400] text-[12px] leading-[16.8px] text-bp-blue-1'>
              开箱即用
            </div>
            <div className='mt-[24px]
            font-sans font-[600] text-[36px] leading-[50.4px] text-[#000000]'>
              从数天到几分钟<br/>
              让您的团队事半功倍
            </div>
            <div className='mt-[32px]
            font-sans font-[400] text-[18px] leading-[25.2px] space-y-[12px] text-[#000000]'>
              <p>极低的硬件资源需求，丰富的环境适配技术，使您可以在几分钟内快速拉起一个全新服务。</p>
              <p>CBO 与 HBO 相结合的自动调优技术，使您的系统始终运行在最佳状态，无需繁杂的维护工作。</p>
            </div>
          </div>
          <div className='w-[45%] flex flex-row-reverse'>
             <Image className='mr-0 py-[87px]' src={Fast} alt="fast" />
          </div>
        </div>
      </section>
  )
}
