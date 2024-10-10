(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1037],{3085:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2023-12-29-v2023-released",function(){return i(5575)}])},5575:function(e,n,i){"use strict";i.r(n),i.d(n,{useTOC:function(){return r}});var s=i(2676),d=i(8051),l=i(4906),c=i(3459);function r(e){let n={code:"code",...(0,c.a)()};return[{value:"背景",id:"背景",depth:2},{value:"主要变化",id:"主要变化",depth:2},{value:"全新交互",id:"全新交互",depth:3},{value:"流批融合",id:"流批融合",depth:3},{value:"游标列",id:"游标列",depth:3},{value:"筛选与重命名",id:"筛选与重命名",depth:3},{value:"连接器",id:"连接器",depth:2},{value:(0,s.jsxs)(s.Fragment,{children:["新增",(0,s.jsx)(n.code,{children:"ClickZetta"})]}),id:"新增clickzetta",depth:3},{value:(0,s.jsxs)(s.Fragment,{children:["新增",(0,s.jsx)(n.code,{children:"InterSystems"})]}),id:"新增intersystems",depth:3},{value:(0,s.jsxs)(s.Fragment,{children:["优化",(0,s.jsx)(n.code,{children:"Apache Hive"})]}),id:"优化apache-hive",depth:3},{value:"遗留问题",id:"遗留问题",depth:2},{value:"错误率控制",id:"错误率控制",depth:3},{value:"CDC模式下表之间的耦合",id:"cdc模式下表之间的耦合",depth:3}]}n.default=(0,d.c)(function(e){let{toc:n=r(e)}=e,i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{children:"Release Notes (v2023)"}),"\n",(0,s.jsxs)(i.p,{children:["2024年来临之际，我很荣幸地代表团队向大家宣布",(0,s.jsx)(i.code,{children:"bluepipe"}),"2023年度版本的诞生。"]}),"\n",(0,s.jsx)(i.h2,{id:n[0].id,children:n[0].value}),"\n",(0,s.jsxs)(i.p,{children:["我们花费了几个月的时间构建出",(0,s.jsx)(i.code,{children:"bluepipe"}),"第一个原型版本的时候，团队的成就感斐然。\n即便只有一个单机版的程序，在几个早期客户现场验证的时候，也不乏溢美之词，比如",(0,s.jsx)(i.strong,{children:"性能炸裂"}),"、",(0,s.jsx)(i.strong,{children:"靠谱"}),"、",(0,s.jsx)(i.strong,{children:"很智能"}),"等。"]}),"\n",(0,s.jsx)(i.p,{children:"但更值得我们关注的，却是客户用起来有点别扭、却没说出来甚至意识不到这是问题的地方。\n做产品调研最高效的方法，就是站在背后看用户怎么使用你的产品。"}),"\n",(0,s.jsx)(i.p,{children:"我们通过远程演示、或者辅助用户跑通第一个作业（Aha moment），惭愧地看到，将后台程序的接口，包装成一个个表单直接展现给用户，\n是多么地懒惰和缺乏想象力。比如："}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"以任务为操作客体"}),"，用户需要创建一个个任务来完成他的业务目标。这是一种",(0,s.jsx)(i.strong,{children:"面向过程"}),"的设计，用户需要非常理解底层的技术细节，才可能在实际使用中得心应手。"]}),"\n",(0,s.jsxs)(i.li,{children:["操作层面，",(0,s.jsx)(i.strong,{children:"缺少场景封装"}),"。比如用户需要快速完成某张表从来源库重新同步（数据修复），那么他需要先停止CDC任务，再启动一个跑批的任务，然后再将CDC任务拉起来。步骤繁多且没有辅助校验，极易出错引发业务故障。"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["出于",(0,s.jsx)(i.strong,{children:"以用户为中心，将麻烦留给自己"}),"的团队价值观，我们推出了此次版本更新。"]}),"\n",(0,s.jsx)(i.h2,{id:n[1].id,children:n[1].value}),"\n",(0,s.jsx)(i.h3,{id:n[2].id,children:n[2].value}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["面向",(0,s.jsx)(i.strong,{children:"数据交付"}),"的全新交互，您只需要关注数据表的复制状态，而不用考虑怎么配置任务。"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:n[3].id,children:n[3].value}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"优先使用CDC方式来持续地复制增量数据（需要来源库支持CDC能力）；"}),"\n",(0,s.jsxs)(i.li,{children:["对同一张数据表而言，基于SQL查询的",(0,s.jsx)(i.code,{children:"批量复制"}),"与基于CDC技术的",(0,s.jsx)(i.code,{children:"流式复制"}),"无缝衔接；"]}),"\n",(0,s.jsxs)(i.li,{children:["一键封装",(0,s.jsx)(i.code,{children:"重刷数据"}),"的功能；确保",(0,s.jsx)(i.strong,{children:"应急响应"}),"场景下，无需人工思考流批冲突的问题。"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:n[4].id,children:n[4].value}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["支持为每张表单独设置",(0,s.jsx)(i.strong,{children:"时间类型"}),"的",(0,s.jsx)(i.code,{children:"游标列"}),"以实现批量复制模式下的",(0,s.jsx)(i.strong,{children:"增量同步"}),"能力。"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[":::caution 限制\n",(0,s.jsx)(i.code,{children:"游标列"}),"本质上是一个业务字段，依赖您的应用程序正确地维护它。\n因此，如果某行数据被物理删除（DELETE），或者",(0,s.jsx)(i.code,{children:"游标列"}),"没有被正确地更新，都有可能导致基于它的数据同步不能正确工作。"]}),"\n",(0,s.jsxs)(i.p,{children:["此风险",(0,s.jsx)(i.code,{children:"bluepipe"}),"无法识别，您需要谨慎评估使用此功能。\n:::"]}),"\n",(0,s.jsx)(i.h3,{id:n[5].id,children:n[5].value}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["数据复制到目标库时，支持",(0,s.jsx)(i.code,{children:"表"}),"和",(0,s.jsx)(i.code,{children:"列（字段）"}),"裁剪；"]}),"\n",(0,s.jsxs)(i.li,{children:["数据复制到目标库时，支持",(0,s.jsx)(i.code,{children:"表"}),"和",(0,s.jsx)(i.code,{children:"列（字段）"}),"重命名。"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:":::tip 提示\n表或者列重新进行筛选或者重命名不会影响正在运行或者运行结束的任务，新的配置会在任务下次启动时生效。\n您有可能您需要做完相关修改后人工进行数据重刷。\n:::"}),"\n",(0,s.jsx)(i.h2,{id:n[6].id,children:n[6].value}),"\n",(0,s.jsx)(i.h3,{id:n[7].id,children:n[7].value}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"ClickZetta"}),"是",(0,s.jsx)(i.a,{href:"https://www.yunqi.tech",children:"云器科技"}),"研发的下一代Single-Engine为核心理念的湖仓平台。"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"支持自动建表（Create Table）和修改表结构（Alter Table）；"}),"\n",(0,s.jsxs)(i.li,{children:["支持数据实时写入，支持基于",(0,s.jsx)(i.code,{children:"Primary Key"}),"进行数据更新；"]}),"\n",(0,s.jsx)(i.li,{children:"暂未支持数据读取（含BATCH和CDC）。"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[":::caution 限制\n受",(0,s.jsx)(i.code,{children:"ClickZetta"}),"当前版本限制，对于含 ",(0,s.jsx)(i.code,{children:"Primary Key"}),"的表，目前仅支持单线程写入。",(0,s.jsx)(i.code,{children:"bluepipe"}),"自动进行了适配，无",(0,s.jsx)(i.code,{children:"Primary Key"}),"\n的表仍然可以多线程大吞吐写入。\n:::"]}),"\n",(0,s.jsx)(i.h3,{id:n[8].id,children:n[8].value}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"InterSystems"}),"是一家提供数据管理和医疗信息系统的公司，为医疗健康、金融服务、供应链和物流等行业提供数据解决方案。\n",(0,s.jsx)(i.code,{children:"InterSystems"}),"在2022 Gartner:copyright: 云数据库管理系统魔力象限:tm:中被评为“远见者（Visionary）”。"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["兼容",(0,s.jsx)(i.a,{href:"https://www.intersystems.com/data-platform/",children:(0,s.jsx)(i.code,{children:"InterSystems IRIS"})})," 和",(0,s.jsx)(i.a,{href:"https://www.intersystems.com/cache/",children:(0,s.jsx)(i.code,{children:"InterSystems Cach\xe9"})}),"两套引擎；"]}),"\n",(0,s.jsx)(i.li,{children:"支持通过批量方式读取数据；"}),"\n",(0,s.jsx)(i.li,{children:"暂未支持基于日志订阅的 CDC 能力；"}),"\n",(0,s.jsx)(i.li,{children:"暂未支持数据写入能力。"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:n[9].id,children:n[9].value}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["接入时支持",(0,s.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/hive/hiveserver2+clients#HiveServer2Clients-ConnectionURLWhenZooKeeperServiceDiscoveryIsEnabled",children:(0,s.jsx)(i.code,{children:"Zookeeper Service Discovery"})}),"配置；"]}),"\n",(0,s.jsxs)(i.li,{children:["CDC数据以",(0,s.jsx)(i.code,{children:"APPEND"}),"模式写入临时表，定期",(0,s.jsx)(i.code,{children:"MERGE"}),"到主表。"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:n[10].id,children:n[10].value}),"\n",(0,s.jsx)(i.h3,{id:n[11].id,children:n[11].value}),"\n",(0,s.jsxs)(i.p,{children:["复制过程中的",(0,s.jsx)(i.code,{children:"错误率控制"}),"尚未支持。\n因此，在当前版本中，如果某行数据因为字段类型不兼容、或者字符超长等原因而无法写入，则会导致整个任务失败。"]}),"\n",(0,s.jsx)(i.h3,{id:n[12].id,children:n[12].value}),"\n",(0,s.jsx)(i.p,{children:"由于CDC技术的特殊性，出于数据库资源考虑，我们限制了一个作业最多启用一条CDC流来复制数据，这必然导致不同表之间互相耦合。\n即某张表无法写入，或者写入性能变慢，会导致同一个作业内其他表的复制也被阻塞。"}),"\n",(0,s.jsx)(i.p,{children:"考虑解决此问题而带来的技术复杂度急剧上升，短期内我们不会着手去解决。您可基于业务优先级，将一个作业拆分成多个作业来规避这一问题。"})]})},"/blog/2023-12-29-v2023-released",{filePath:"pages/blog/2023-12-29-v2023-released.md",timestamp:172853319e4,pageMap:l.v,frontMatter:{slug:"v2023-release-notes",authors:["aleafs"],image:"/img/v2023-cover.jpeg",tags:["Release Notes","v2023"]},title:"Release Notes (v2023)"},"undefined"==typeof RemoteContent?r:RemoteContent.useTOC)}},function(e){e.O(0,[9882,5982,2888,9774,179],function(){return e(e.s=3085)}),_N_E=e.O()}]);