import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

export default function Version() {
  return (
    <section>
      <div>
        <div className='w-[67%] m-auto flex flex-col items-center'>
          <div className="h-[50px] mt-[64px]
          font-sans font-[600] text-[36px] leading-[50.4px] text-center text-[#000000]">
          各版本对比详情
          </div>
         <Table className=" mt-[24px]">
          <TableHeader className=" h-[81px]w
          font-sans font-[600] text-[24px] leading-[33.6px] text-[#000000]
          border-b-[1px] border-b-[#666666]"
          >
            <TableRow className="text-[#000000]">
              <TableHead></TableHead>
              <TableHead className=" text-[#000000] pl-[24px]">社区版</TableHead>
              <TableHead className=" text-[#000000] pl-[24px]">企业版</TableHead>
              <TableHead className=" text-[#000000] pl-[24px]">专属版</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            <TableRow className="h-[61px] bg-[#F4F4FA]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#E5E5F0]
              pl-[24px] mt-[15px]
              font-sans font-[600] text-[18px] leading-[24px] ">
              价格测算
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              单价（人民币元/年/CU）
              </TableCell>
              <TableCell className="pl-[24px]">
              2,000
              </TableCell>
              <TableCell className="pl-[24px]">
              6,800  
              </TableCell>
              <TableCell>
              合同约定
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              CU数/链路数
              </TableCell>
              <TableCell className="pl-[24px]">
              2
              </TableCell>
              <TableCell className="pl-[24px]">
              4
              </TableCell>
              <TableCell>
              合同约定
              </TableCell>
            </TableRow>
            <TableRow className="h-[61px]">
              <TableCell className="h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              时长（月）
              </TableCell>
              <TableCell className="pl-[24px]">
              12
              </TableCell>
              <TableCell className="pl-[24px]">
              12 
              </TableCell>
              <TableCell>
              合同约定
              </TableCell>
            </TableRow>
            <TableRow className="h-[61px]">
              <TableCell className="h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              小计
              </TableCell>
              <TableCell className="pl-[24px]">
              48,000
              </TableCell>
              <TableCell className="pl-[24px]">
              326,400
              </TableCell>
              <TableCell>
              合同约定
              </TableCell>
            </TableRow>



            <TableRow className="h-[61px] bg-[#F4F4FA]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#E5E5F0]
              pl-[24px] mt-[15px]
              font-sans font-[600] text-[18px] leading-[24px] ">
              基础能力
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              全增量融合
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="w-[133px] h-[32px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              Schema Evolution
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
              <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
              <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
               列裁减、列映射
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
               不限制速度率
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
            </TableRow>


            <TableRow className="h-[61px] bg-[#F4F4FA]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#E5E5F0]
              pl-[24px] mt-[15px]
              font-sans font-[600] text-[18px] leading-[24px] ">
              连接器
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>

            <TableRow className="h-[184px]
            font-sans font-[400] text-[16px] leading-[32px] text-[#000000]">
              <TableCell className="w-[112px] h-[32px] bg-[#F4F4FA]
              pl-[24px] pt-[15px] align-top">
              官方连接器
              </TableCell>
              <TableCell className="p-[0] pl-[24px]">
                <div className="w-[122px]
                flex flex-col">
                  <div className="inline-block">免费连接器</div>
                  <ul className="inline-block list-disc ml-[20px]">
                    <li>
                      MySQL
                    </li>
                    <li>
                      PostgresSQL
                    </li>
                    <li>
                      MongoDB
                    </li>
                    <li>
                      Hive
                    </li>
                  </ul>
                </div>
              </TableCell>
              <TableCell className="pl-[24px] pt-[15px] align-top">
              商业连接器
              </TableCell>
              <TableCell colSpan={2} className="pl-[24px] pt-[15px] align-top">
              合同约定
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="w-[133px] h-[32px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              私有连接器
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/null.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/null.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell colSpan={2} className="pl-[24px] pt-[15px] align-top">
              合同约定
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px] bg-[#F4F4FA]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#E5E5F0]
              pl-[24px] mt-[15px]
              font-sans font-[600] text-[18px] leading-[24px] ">
              资源与调度
              </TableCell>
              <TableCell className="p-[0]">
              </TableCell>
              <TableCell></TableCell>
              <TableCell className=""></TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              最大并发度
              </TableCell>
              <TableCell className="pl-[24px]">
              2
              </TableCell>
              <TableCell className="pl-[24px]">
              4 
              </TableCell>
              <TableCell className="pl-[24px]">
              合同约定
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              多节点容灾
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/null.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px] bg-[#F4F4FA]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#E5E5F0]
              pl-[24px] mt-[15px]
              font-sans font-[600] text-[18px] leading-[24px] ">
              安全与治理
              </TableCell>
              <TableCell className="p-[0]">
              </TableCell>
              <TableCell></TableCell>
              <TableCell className=""></TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              最大用户数
              </TableCell>
              <TableCell className="pl-[24px]">
                1
              </TableCell>
              <TableCell className="pl-[24px]">
              不限制
              </TableCell>
              <TableCell className="pl-[24px]">
              不限制
              </TableCell>
            </TableRow>
            <TableRow className="h-[61px]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              基于标准 OAuth 的 SSO
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/null.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
            </TableRow>
            <TableRow className="h-[61px]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              基于角色的权限控制
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/null.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
            </TableRow>
            <TableRow className="h-[61px]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              审计日志
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/null.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px] bg-[#F4F4FA]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#E5E5F0]
              pl-[24px] mt-[15px]
              font-sans font-[600] text-[18px] leading-[24px] ">
              扩展与集成
              </TableCell>
              <TableCell className="p-[0]">
              </TableCell>
              <TableCell></TableCell>
              <TableCell className=""></TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              API & SDK
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/null.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="w-[133px] h-[32px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              HTTP Hooks
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/null.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
              <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
              <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px] bg-[#F4F4FA]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#E5E5F0]
              pl-[24px] mt-[15px]
              font-sans font-[600] text-[18px] leading-[24px] ">
              品牌化
              </TableCell>
              <TableCell className="p-[0]">
              </TableCell>
              <TableCell></TableCell>
              <TableCell className=""></TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              
              </TableCell>
              <TableCell className="p-[0]">
                <Image className="ml-[24px]" src={'/icons/null.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/null.svg'} alt="" width={20} height={20} />
              </TableCell>
              <TableCell>
                <Image className="ml-[24px]" src={'/icons/right.svg'} alt="" width={20} height={20} />
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px] bg-[#F4F4FA]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#E5E5F0]
              pl-[24px] mt-[15px]
              font-sans font-[600] text-[18px] leading-[24px] ">
              服务与支持
              </TableCell>
              <TableCell className="p-[0]">
              </TableCell>
              <TableCell></TableCell>
              <TableCell className=""></TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="w-[212.8px] h-[60.97px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              远程答疑
              </TableCell>
              <TableCell className="pl-[24px]">
              5*8社区支持
              </TableCell>
              <TableCell className="pl-[24px]">
              7 * 24专家支持
              </TableCell>
              <TableCell className="pl-[24px]">
              7*24 专家支持
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px]">
              <TableCell className="w-[133px] h-[32px] bg-[#F4F4FA]
              pl-[24px] mt-[15px]
              font-sans font-[400] text-[16px] leading-[32px] ">
              应急响应
              </TableCell>
              <TableCell className="pl-[24px]">
              0
              </TableCell>
              <TableCell className="pl-[24px]">
              2 次/年
              </TableCell>
              <TableCell className="pl-[24px]">
              合同约定
              </TableCell>
            </TableRow>

            <TableRow className="h-[61px]
            font-sans font-[400] text-[16px] leading-[32px] text-[#000000]">
              <TableCell className="w-[112px] h-[32px] bg-[#F4F4FA]
              pl-[24px] pt-[15px] align-top">
              远程培训
              </TableCell>
              <TableCell className="pl-[24px]">
              0
              </TableCell>
              <TableCell className="pl-[24px]">
              1 次/年
              </TableCell>
              <TableCell className="pl-[24px] pt-[15px] align-top">
              合同约定
              </TableCell>
            </TableRow>

          </TableBody>
         </Table>
        </div>
      </div>
    </section>
  )
}

