import Image from 'next/image'
import React from 'react'

export default function Customer() {
  return (
    <section>
      <div className="w-[1120px] m-auto mt-[40px] h-[790px] flex flex-col justify-center items-center">
        <div className="w-[100%] h-[320px] rounded-[16px]
        bg-[url('/mask-group.svg')] bg-cover bg-center flex justify-center">
          <div className=' h-[110px] mt-[56px] flex flex-col items-center'>
            <div className=' h-[50px]
            font-sans font-[600] text-[36px] leading-[50.4px] text-center'>
            Bluepipe 获得客户的深度信赖
            </div>
            <div className=' h-[44px] mt-[16px]
            font-sans font-[400] text-[16px] leading-[22.4px] text-center text-[#000000]'>
            通过我们尊贵合作伙伴的第一手反馈，了解 Bluepipe 对全球企业的影<br />响。探索我们的创新解决方案和对卓越的坚定承诺。
            </div>
          </div>
        </div>
        <div className='w-[90%] m-auto flex gap-[32px] mt-[-106px]'>
          <div className='flex-1 rounded-[8px] border-[1px] border-[#00000033]
          px-[32px] pt-[32px] pb-[48px]
          bg-[#E8E9FB] flex flex-col items-center'>
            <div className=' h-[22px]
            font-sans font-[600] text-[14px] 
            leading-[22.4px] text-center text-[#000000]'>
              Jesse
            </div>
            <div className=' h-[22px] mt-[4px]
            font-sans font-[400] text-[16px] text-center text-[#000000]'>
              湖南**医院信息部部长
            </div>
            <div>
            <Image className="mt-[24px] rounded-[100px]" src="/Avatar1.svg" width={56} height={56} alt='avatar1' />
            </div>
            <div className='mt-[24px]
            font-sans font-[400] text-[16px] leading-[25.6px] text-[#000000]'>
              原来需要几周时间完成的数据汇聚工作，现在两天就搞定了…… (InterSystem)Cache 数据库市面资料少，在适配上面做了非常多的努力...抽取调度服务日臻完善。
            </div>
          </div>
          <div className='flex-1 rounded-[8px] border-[1px] border-[#00000033]
          px-[32px] pt-[32px] pb-[48px]
          bg-[#F0F8F9] flex flex-col items-center'>
            <div className=' h-[22px]
            font-sans font-[600] text-[14px] 
            leading-[22.4px] text-center text-[#000000]'>
              霍华德
            </div>
            <div className=' h-[22px] mt-[4px]
            font-sans font-[400] text-[16px] leading-[22.4px] text-center text-[#000000] '>
            中信证券
              </div>
            <div>
            <Image className="mt-[24px] rounded-[100px]" src="/Avatar2.svg" width={56} height={56} alt='avatar2' />
            </div>
            <div className='mt-[24px]
            font-sans font-[400] text-[16px] leading-[25.6px] text-[#000000]'>
              Bluepipe 效率非常高……我们 Oracle 里 9000 张表，120GB 左右；它一台机器，连带自动建表和数据校验，一小时多一点就全复制过去了，比原来 OMS 快了两倍还多
            </div>
          </div>
          <div className='flex-1 rounded-[8px] border-[1px] border-[#00000033]
          px-[32px] pt-[32px] pb-[48px]
          bg-[#F8F9F4] flex flex-col items-center'>
            <div className=' h-[22px]
            font-sans font-[600] text-[14px] leading-[22.4px] text-center text-[#000000]'>吴迪艾伦</div>
            <div className=' h-[22px] mt-[4px]
            font-sans font-[400] text-[16px] leading-[22.4px] text-center text-[#000000]'>安德玛中国区市场总监</div>
            <div>
            <Image className="mt-[24px] rounded-[100px]" src="/Avatar3.svg" width={56} height={56} alt='avatar3' />
            </div>
            <div className='mt-[24px]
            font-sans font-[400] text-[16px] leading-[25.6px] text-[#000000]'>
              在操作体验上， Bluepipe 的界面简洁直观，用户上手非常容易。无论是技术团队还是非技术团队成员，都能迅速掌握其操作方式，降低了学习成本。同时，由于效率和准确度的提升，我们的运营成本也明显降低，整体体验非常满意。
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
