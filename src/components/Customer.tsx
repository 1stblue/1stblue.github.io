import Image from 'next/image'
import React from 'react'

export default function Customer() {
  return (
    <section className='w-[1680px] m-auto'>
      <div className="w-[1120px] m-auto h-[790px] flex flex-col items-center">
        <div className="w-[1120px] h-[320px]
        bg-[url('/mask-group.svg')] bg-cover bg-center">
          <div className='w-[522px] h-[110px] mt-[56px] ml-[295px] flex flex-col items-center'>
            <div className='w-[486px] h-[50px]
            font-sans font-[600] text-[36px] leading-[50.4px] text-center'>
            Bluepipe 获得客户的深度信赖
            </div>
            <div className='w-[522px] h-[44px] mt-[16px]
            font-sans font-[400] text-[16px] leading-[22.4px] text-center text-[#000000]'>
            通过我们尊贵合作伙伴的第一手反馈，了解 Bluepipe 对全球企业的影响。探索我们的创新解决方案和对卓越的坚定承诺。
            </div>
          </div>
        </div>
        <div className='flex gap-[32px] mt-[-106px]'>
          <div className='w-[288px] h-[414px] rounded-[8px] border-[1px] border-[#00000033]
          px-[32px] pt-[32px] pb-[48px]
          bg-[#E8E9FB] flex flex-col items-center'>
            <div className='w-[42px] h-[22px]
            font-sans font-[600] text-[14px] 
            leading-[22.4px] text-center text-[#000000]'>
              爱德华
            </div>
            <div className='w-[88px] h-[22px] mt-[4px]
            font-sans font-[400] text-[16px] text-center text-[#000000]'>
              Airbnb CEO
            </div>
            <div>
            <Image className="mt-[24px] rounded-[100px]" src="/Avatar1.svg" width={56} height={56} alt='avatar1' />
            </div>
            <div className='w-[224px] h-[182px] mt-[24px]
            font-sans font-[400] text-[16px] leading-[25.6px] text-[#000000]'>
              Bluepipe的数据迁移效率令人印象深刻。我们公司需要处理大量数据，从不同的数据库和系统中进行整合，Bluepipe的迁移速度远超我们的预期，在短时间内顺利完成了大规模的数据转移。这让我们的业务
            </div>
          </div>
          <div className='w-[288px] h-[388px] rounded-[8px] border-[1px] border-[#00000033]
          px-[32px] pt-[32px] pb-[48px]
          bg-[#F0F8F9] flex flex-col items-center'>
            <div className='w-[42px] h-[22px]
            font-sans font-[600] text-[14px] 
            leading-[22.4px] text-center text-[#000000]'>
              霍华德
            </div>
            <div className='w-[144px] h-[22px] mt-[4px]
            font-sans font-[400] text-[16px] leading-[22.4px] text-center text-[#000000] '>
            大疆大中华区副总裁
              </div>
            <div>
            <Image className="mt-[24px] rounded-[100px]" src="/Avatar2.svg" width={56} height={56} alt='avatar2' />
            </div>
            <div className='mt-[24px]
            font-sans font-[400] text-[16px] leading-[25.6px] text-[#000000]'>除了效率，数据的准确度也是我们非常关注的一个方面。使用Bluepipe后，我们没有遇到任何数据丢失或错位的情况，所有迁移的数据都能准确无误地映射到新的系统中。</div>
          </div>
          <div className='w-[288px] h-[440px] rounded-[8px] border-[1px] border-[#00000033]
          px-[32px] pt-[32px] pb-[48px]
          bg-[#F8F9F4] flex flex-col items-center'>
            <div className='w-[56px] h-[22px]
            font-sans font-[600] text-[14px] leading-[22.4px] text-center text-[#000000]'>吴迪艾伦</div>
            <div className='w-[160px] h-[22px] mt-[4px]
            font-sans font-[400] text-[16px] leading-[22.4px] text-center text-[#000000]'>安德玛中国区市场总监</div>
            <div>
            <Image className="mt-[24px] rounded-[100px]" src="/Avatar3.svg" width={56} height={56} alt='avatar3' />
            </div>
            <div className='w-[224px] h-[208px] mt-[24px]
            font-sans font-[400] text-[16px] leading-[25.6px] text-[#000000]'>
            在操作体验上，Bluepipe的界面简洁直观，用户上手非常容易。无论是技术团队还是非技术团队成员，都能迅速掌握其操作方式，降低了学习成本。同时，由于效率和准确度的提升，我们的运营成本也明显降低，整体体验非常满意。
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
