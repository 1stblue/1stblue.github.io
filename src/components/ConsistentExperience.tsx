import Image from 'next/image'
import React from 'react'

export default function ConsistentExperience() {
  return (
    <section className='w-[1680px] m-auto'>
      <div className='w-[1120px] m-auto h-[628px] flex'>
        <Image className='mt-[20px] ml-[36px]' src="/consistent.svg" width={548} height={548} alt="consistent" />
        <div className='mt-[147px] ml-[88px] flex flex-col'>
          <div className='w-[352] h-[17px]
          font-sans font-[600] text-[12px] leading-[16.8px] text-bp-blue-1'>
            一致体验
          </div>
          <div className='w-[396px] h-[100px] mt-[24px]
          font-sans font-[600] text-[36px] leading-[50.4px] text-[#000000]'>
           通过 API 和 SDK 与您的现有系统无缝集成
          </div>
          <div className='w-[364px] h-[44px] mt-[32px]
          font-sans font-[400] text-[16px] leading-[22.4px] text-[#000000]'>
            我们提供了声明式的 API 和 SDK，可以方便地与您的现有系统进行集成，无需忍受割裂的用户体验
          </div>
        </div>
    </div>
    </section>
  )
}
