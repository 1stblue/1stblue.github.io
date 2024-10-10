'use client'

import React from 'react'
import ArrowButton from './ui/ArrowButton'
import { APPLY_BUTTON_TXT } from '@/constant'
import { useMailto } from '@/hooks/useMailto'

export default function CTA() {
  return (
    <section className="mt-[128px] bg-[url('/bg-blue.svg')] bg-repeat">
      <div className=" m-auto py-[96px]">
        <div className='w-[32%] m-auto  flex'>
          <div className=' m-auto text-[#FFFFFF]
          flex flex-col items-center'>
            <div className='
            font-sans font-[600] text-[36px] leading-[50.4px] text-center'>
            数据因自由流动，而价值无限
            </div>
            <div className=' mt-[16px]
            font-sans font-[400] text-[16px] leading-[22.4px] text-center'>
             借助 Bluepipe，您可以在不同数据库、API、甚至SaaS产品之间自由地流转数据。我们保证数据的一致性。就这么简单
            </div>
            <div onClick={() => useMailto()}>
              <ArrowButton
                className='w-[144px] h-[52px] rounded-[8px] bg-white mt-[40px] font-[600]'
                textClassName='text-[16px] leading-[22.4px]'
                imgClassName='right-[35px]'
              >
                 {APPLY_BUTTON_TXT}
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
