import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";
import Image from "next/image";

export default function Version() {
  const tableData = [
    {
      type: "header",
      title: "基础能力",
    },
    {
      type: "row",
      title: "全、增量融合",
      data: [true, true, true],
    },
    {
      type: "row",
      title: "Schema Evolution",
      data: [true, true, true],
    },
    {
      type: "row",
      title: "列裁减、列映射",
      data: [true, true, true],
    },
    {
      type: "row",
      title: "不限制速率",
      data: [true, true, true],
    },
    {
      type: "header",
      title: "连接器",
    },
    {
      type: "row",
      title: "免费连接器",
      data: [true, true, true],
    },
    {
      type: "row",
      title: "商业连接器",
      data: [false, true, true],
    },
    {
      type: "row",
      title: "私有连接器",
      data: [false, false, "按约定"],
    },
    {
      type: "header",
      title: "性能与容灾",
    },
    {
      type: "row",
      title: "最大链路数",
      data: ["2", "按订单", "按约定"],
    },
    {
      type: "row",
      title: "数据库保护",
      data: [false, true, true],
    },
    {
      type: "row",
      title: "多节点容灾（分布式）",
      data: [false, true, true],
    },
    {
      type: "row",
      title: "架构咨询",
      data: [false, false, true],
    },
    {
      type: "header",
      title: "安全与合规",
    },
    {
      type: "row",
      title: "最大用户数",
      data: ['1', '不限制', '不限制'],
    },
    {
      type: "row",
      title: "单点登录（SSO）",
      data: [false, 'OAuth 2.0', '按约定'],
    },
    {
      type: "row",
      title: "权限控制",
      data: [false, 'RBAC', 'RBAC'],
    },
    {
      type: "row",
      title: "审计日志",
      data: [false, true, true],
    },
    {
      type: "header",
      title: "扩展与集成",
    },
    {
      type: "row",
      title: "API & SDK",
      data: [false, true, true],
    },
    {
      type: "row",
      title: "可观测性",
      data: [false, 'Prometheus', 'Prometheus'],
    },
    {
      type: "row",
      title: "HTTP Hooks",
      data: [false, false, true],
    },
    {
      type: "header",
      title: "品牌化",
    },
    {
      type: "row",
      title: "Logo和名称",
      data: [false, false, true],
    },
    {
      type: "row",
      title: "深度集成支持",
      data: [false, false, true],
    },
    {
      type: "header",
      title: "服务与支持",
    },
    {
      type: "row",
      title: "远程诊断",
      data: ['5 * 8 社区支持', '7 * 24 专家支持', '7 * 24 专家支持'],
    },
    {
      type: "row",
      title: "应急响应",
      data: [false, '2 次/年', '按约定'],
    },
    {
      type: "row",
      title: "远程培训",
      data: [false, '1 次/年', '按约定'],
    },
  ];
  return (
    <section>
      <div>
        <div className='w-[1120px] m-auto pb-[128px] flex flex-col items-center'>
          <div className="h-[50px] mt-[64px]
          font-sans font-[600] text-[36px] leading-[50.4px] text-center text-[#000000]">
          各版本对比详情
          </div>
         <Table className=" mt-[24px]">
          <TableHeader className=" h-[81px]
          font-sans font-[600] text-[24px] leading-[33.6px] text-[#000000]
          border-b-[1px] border-b-[#666666]"
          >
            <TableRow className="text-[#000000]">
              <TableHead></TableHead>
              <TableHead className=" text-[#000000] text-center">社区版</TableHead>
              <TableHead className=" text-[#000000] text-center">企业版</TableHead>
              <TableHead className=" text-[#000000] text-center">专属版</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData?.map((item, index) => (
              <TableRow key={index} className={clsx("h-[61px] font-sans",
               item?.type === 'header' ? 'font-[600] text-[18px] leading-[24px] bg-[#F4F4FA]'
                : 'font-[400] text-[16px] leading-[32px]')}>
                <TableCell className={clsx("w-[213px] h-[61px]  pl-[24px] mt-[15px] ",
                  item?.type === 'header' ? 'bg-[#E5E5F0]' : 'bg-[#F4F4FA]', )}>
                {item?.title}
                </TableCell>
                 {
                  item?.type === 'header' ? <>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell></> :
                    item?.data?.map((n, index) => {
                      if (typeof n === 'boolean') {
                        return  <TableCell key={index}>
                          <Image className="block mx-auto" src={`/icons/${n === true ? 'right' : 'null'}.svg`} alt="" width={20} height={20} />
                        </TableCell>
                      } else {
                        return <TableCell key={index} className="text-center align-middle">
                          <span>{n}</span>
                        </TableCell>
                      }
                    })
                 }
              </TableRow>
            ))}
          </TableBody>
         </Table>
        </div>
      </div>
    </section>
  )
}

