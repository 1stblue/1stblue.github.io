import Image from "next/image"

export default function Blog() {
  const list = [
    {
      img: '/img/image.png',
      title: 'AWS Glue Studio Visual ETL 新增了 5 种视觉转换',
      description: 'AWS Glue Studio 现在提供 5 种新的视觉转换：记录匹配、移除空行、从正则表达式中提取字符串片段。解析 JSON 列和其他',
    },
    {
      img: '/img/image-3.png',
      title: 'AWS Glue Studio Visual ETL 新增了 5 种视觉转换',
      description: 'AWS Glue Studio 现在提供 5 种新的视觉转换：记录匹配、移除空行、从正则表达式中提取字符串片段。解析 JSON 列和其他',
    },
    {
      img: '/img/image-2.png',
      title: 'AWS Glue Studio Visual ETL 新增了 5 种视觉转换',
      description: 'AWS Glue Studio 现在提供 5 种新的视觉转换：记录匹配、移除空行、从正则表达式中提取字符串片段。解析 JSON 列和其他',
    },
    {
      img: '/img/image-1.png',
      title: 'AWS Glue Studio Visual ETL 新增了 5 种视觉转换',
      description: 'AWS Glue Studio 现在提供 5 种新的视觉转换：记录匹配、移除空行、从正则表达式中提取字符串片段。解析 JSON 列和其他',
    }
  ]
  return (
    <section>
      <div className='w-[1120px] pb-[128px] m-auto  flex justify-center items-center'>
        <div className="mt-[64px] flex flex-col items-center">
          <div className="
          font-sans font-[600] text-[36px] leading-[50.4px] text-[#000000]">
          探索新的技术
          </div>
          <div className="grid grid-cols-2 gap-[32px] mt-[64px]">
            {
              list.map((item, index) => (
                <div key={index} className=" flex bg-[#F0F3FF] border-[1px]
                 border-[#00000033] rounded-[8px]">
                  <img src={item.img} width={172} height={172} alt={item.title?.slice(0, 6)} />
                  <div className="flex flex-col ml-[24px] mt-[24px] mr-[32px]">
                      <div className="
                      font-sans font-[600] text-[18px] leading-[24px] text-[#000000]">{item.title}</div>
                      <div className="font-sans font-[400] text-[14px] leading-[22.4px] text-[#666666]">{item.description}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
