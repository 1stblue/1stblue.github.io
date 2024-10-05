import React from 'react'
import { Button } from './ui/button'

export default function CTA() {
  return (
    <section className="w-full bg-[url('/bg-blue.svg')] bg-repeat">
      <div className="w-[1680px] bg-[url('/bg-blue.svg')] m-auto h-[394px]">
        <div className='w-[1120px] m-auto h-[394px] flex'>
          <div className='w-[600.83px] h-[202px] m-auto mt-[96px] text-[#FFFFFF]
          flex flex-col items-center'>
            <div className='w-[600.83px] h-[50px]
            font-sans font-[600] text-[36px] leading-[50.4px] text-center'>
            数据因自由流动，而价值无限
            </div>
            <div className='w-[481px] h-[44px] mt-[16px]
            font-sans font-[400] text-[16px] leading-[22.4px] text-center'>
             借助 Bluepipe，您可以在不同数据库、API、甚至SaaS产品之间自由地流转数据。我们保证数据的一致性。就这么简单
            </div>
            <div className=''>
              <Button variant="bp-primary-black" className='w-[144px] h-[52px] mt-[40px] text-[#000000] text-center'>
                即将邀测
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
