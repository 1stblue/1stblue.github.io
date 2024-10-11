'use client'

import Image from 'next/image'
import React from 'react'
import ArrowButton from './ui/ArrowButton'
import { APPLY_BUTTON_TXT } from '@/constant'
import { mailto } from '@/lib/mailto'

export default function Hero() {
  
  const list = [
    {
      icon: '/icons/连接器.svg',
      title: '20+优质连接器',
      desc: '覆盖主流关系型数据库、NoSQL和大数据系统，在边界值、鲁棒性和性能等方面均经过了严格测试和生产验证'
    },
    {
      icon: '/icons/同步.svg',
      title: '全、增量融合',
      desc: '根据上下文动态调整数据复制策略，融合使用全量复制和增量复制算法，无需繁杂的人工干预'
    },
    {
      icon: '/icons/schema.svg',
      title: 'Schema Evolution',
      desc: '自动跟踪数据结构的变化并应用到写入端，保证两侧“表”结构一致，我们抹平了异构数据库之间的差异'
    }
  ]
  return (
    <div className='w-[1120px] m-auto pb-[69px] flex flex-col gap-[88px]'>
      <div className='flex justify-between items-center pt-[60px]'>
        <div className='w-[40%] flex flex-col'>
          <div className='font-sans font-[600] text-[48px] leading-[57.6px] text-[#000000]'>
          数据因自由流动<br />而价值无限
          </div>
          <div className=' mt-[16px] mb-[24px] font-sans, font-[400px] text-[18px] leading-[28.8px] text-[#000000]'>
            借助Bluepipe，您可以在不同数据库、API、甚至SaaS产品之间自由地流转数据；我们保证数据的一致性。就这么简单
          </div>
          <div onClick={() => mailto()}>
            <ArrowButton
             className='w-[144px] h-[52px] rounded-[8px] bg-[linear-gradient(276.85deg,_#C7E9F5_-25.73%,_#1EABF4_10.58%,_#0165FF_53.63%,_#0028F3_112.96%)]
             flex justify-center items-center font-[600]'
             textWhite
             textClassName='text-[16px] leading-[22.4px]'
             imgClassName='right-[35px]'
            >
              {APPLY_BUTTON_TXT}
            </ArrowButton>
          </div>
        </div>
        <div className='w-[60%] flex flex-row-reverse'>
          <Image
            src="/Hero-image.svg"
            alt="hero-image"
            width={720}
            height={400}
            layout='fixed'
          />
        </div>
      </div>
      <div className='flex gap-[32px] justify-between'>
        {list.map((item, index) => (
          <div key={index} className='border-solid border-[1px] border-[#7A91C0] rounded-[16px]
           bg-[#FFFFFF]
          pt-[20px] pb-[32px] px-[32px]
          flex-1
          '>
            <Image src={item.icon} alt={item.title} width={48} height={48} className='bg-[#D3D7EE] rounded-[8px]'></Image>
            <div className='
            font-sans font-[600] text-[16px] leading-[22.4px] text-[#000000]
            mt-[24px] mb-[8px]
            '>{item.title}</div>
            <div className=' font-sans font-[400] text-[14px] leading-[19.6px] text-[#000000]'>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
