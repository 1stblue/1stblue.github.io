import Image from 'next/image'
import React from 'react'
import ArrowButton from './ui/ArrowButton'
import { LEARN_BUTTON_TXT } from '@/constant'

export default function AccurateAndPrecise() {
  return (
    <section className='bg-[#F2F7FE]'>
      <div className="max-w-[1920px] m-auto bg-[#F2F7FE]">
        <div className='w-[1120px] m-auto h-[776px] bg-[#F2F7FE]'>
          <div className='flex-1 m-auto flex flex-col items-center justify-center'>
              <div className=' mt-[64px]
              font-sans font-[400] text-[12px] leading-[16.8px] text-center text-bp-blue-1'>
                精确可靠
              </div>
              <div className=' mt-[16px]
              font-sans font-[600] text-[36px] leading-[50.4px] text-center text-[#000000]'>
                可信赖的数据交付
              </div>
              <div className='mt-[8px] font-sans font-[400] text-[18px] leading-[24px] text-center text-[#000000]'>
              Bluepipe 致力于确保您的数据高效、准确地在各个系统之间流转。我们采用 Exactly Once 一致性保证语义，并且采用极高性价比的数据比对和延迟控制技术，让您无后顾之忧
              </div>
              <div className='mt-[32px]'>
                <ArrowButton className='rounded-[100px] border-[1px] border-[#000000]'>{LEARN_BUTTON_TXT}</ArrowButton>
              </div>
            <Image className='mt-[40px]' src="/accurate.svg" width={928} height={389} alt="fast" />
          </div>
        </div>
      </div>
    </section>
  )
}
