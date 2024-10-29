
import React from 'react'

export default function ConsistentExperience() {
  return (
    <section>
      <div className='w-[1120px] m-auto flex justify-between'>
        <div className='w-[45%] py-[60px] flex items-center'>
          <img src='/consistent.svg' alt="consistent" />
        </div>
        <div className='w-[45%] py-[167px] flex items-center'>
          <div className='flex flex-col'>
            <div className='
            font-sans font-[600] text-[12px] leading-[16.8px] text-bp-blue-1'>
              开放生态
            </div>
            <div className=' mt-[24px]
            font-sans font-[600] text-[36px] leading-[50.4px] text-[#000000]'>
            通过 API 和 SDK <br/>与您的现有系统无缝集成
            </div>
            <div className=' mt-[32px]
            font-sans font-[400] text-[16px] leading-[22.4px] text-[#000000]'>
              我们提供了声明式的 API 和 SDK，可以方便地与您的现有系统进行集成，无需忍受割裂的用户体验
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}
