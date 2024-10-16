"use strict";(self.webpackChunk_1stblue_github_io=self.webpackChunk_1stblue_github_io||[]).push([[3964],{2525:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var l=s(4848),i=s(8453);const r={slug:"v2023-release-notes",authors:["aleafs"],image:"/img/v2023-cover.jpeg",tags:["Release Notes","v2023"]},c="Release Notes (v2023)",d={permalink:"/fr/blog/v2023-release-notes",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-29-v2023-released.md",source:"@site/blog/2023-12-29-v2023-released.md",title:"Release Notes (v2023)",description:"2024\u5e74\u6765\u4e34\u4e4b\u9645\uff0c\u6211\u5f88\u8363\u5e78\u5730\u4ee3\u8868\u56e2\u961f\u5411\u5927\u5bb6\u5ba3\u5e03bluepipe2023\u5e74\u5ea6\u7248\u672c\u7684\u8bde\u751f\u3002",date:"2023-12-29T00:00:00.000Z",tags:[{inline:!0,label:"Release Notes",permalink:"/fr/blog/tags/release-notes"},{inline:!0,label:"v2023",permalink:"/fr/blog/tags/v-2023"}],readingTime:6.675,hasTruncateMarker:!1,authors:[{name:"aleafs",title:"\u5927\u9f84\u7a0b\u5e8f\u5458",url:"https://github.com/aleafs",imageURL:"https://avatars.githubusercontent.com/u/535479",key:"aleafs",page:null}],frontMatter:{slug:"v2023-release-notes",authors:["aleafs"],image:"/img/v2023-cover.jpeg",tags:["Release Notes","v2023"]},unlisted:!1,prevItem:{title:"Release Notes (v0.9.5)",permalink:"/fr/blog/v095-release-notes"},nextItem:{title:"Oracle\u5927\u8868\u7684\u5e76\u884c\u8bfb\u53d6",permalink:"/fr/blog/oracle-split-read"}},t={authorsImageUrls:[void 0]},h=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u4e3b\u8981\u53d8\u5316",id:"\u4e3b\u8981\u53d8\u5316",level:2},{value:"\u5168\u65b0\u4ea4\u4e92",id:"\u5168\u65b0\u4ea4\u4e92",level:3},{value:"\u6d41\u6279\u878d\u5408",id:"\u6d41\u6279\u878d\u5408",level:3},{value:"\u6e38\u6807\u5217",id:"\u6e38\u6807\u5217",level:3},{value:"\u7b5b\u9009\u4e0e\u91cd\u547d\u540d",id:"\u7b5b\u9009\u4e0e\u91cd\u547d\u540d",level:3},{value:"\u8fde\u63a5\u5668",id:"\u8fde\u63a5\u5668",level:2},{value:"\u65b0\u589e<code>ClickZetta</code>",id:"\u65b0\u589eclickzetta",level:3},{value:"\u65b0\u589e<code>InterSystems</code>",id:"\u65b0\u589eintersystems",level:3},{value:"\u4f18\u5316<code>Apache Hive</code>",id:"\u4f18\u5316apache-hive",level:3},{value:"\u9057\u7559\u95ee\u9898",id:"\u9057\u7559\u95ee\u9898",level:2},{value:"\u9519\u8bef\u7387\u63a7\u5236",id:"\u9519\u8bef\u7387\u63a7\u5236",level:3},{value:"CDC\u6a21\u5f0f\u4e0b\u8868\u4e4b\u95f4\u7684\u8026\u5408",id:"cdc\u6a21\u5f0f\u4e0b\u8868\u4e4b\u95f4\u7684\u8026\u5408",level:3}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["2024\u5e74\u6765\u4e34\u4e4b\u9645\uff0c\u6211\u5f88\u8363\u5e78\u5730\u4ee3\u8868\u56e2\u961f\u5411\u5927\u5bb6\u5ba3\u5e03",(0,l.jsx)(n.code,{children:"bluepipe"}),"2023\u5e74\u5ea6\u7248\u672c\u7684\u8bde\u751f\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u80cc\u666f",children:"\u80cc\u666f"}),"\n",(0,l.jsxs)(n.p,{children:["\u6211\u4eec\u82b1\u8d39\u4e86\u51e0\u4e2a\u6708\u7684\u65f6\u95f4\u6784\u5efa\u51fa",(0,l.jsx)(n.code,{children:"bluepipe"}),"\u7b2c\u4e00\u4e2a\u539f\u578b\u7248\u672c\u7684\u65f6\u5019\uff0c\u56e2\u961f\u7684\u6210\u5c31\u611f\u6590\u7136\u3002\n\u5373\u4fbf\u53ea\u6709\u4e00\u4e2a\u5355\u673a\u7248\u7684\u7a0b\u5e8f\uff0c\u5728\u51e0\u4e2a\u65e9\u671f\u5ba2\u6237\u73b0\u573a\u9a8c\u8bc1\u7684\u65f6\u5019\uff0c\u4e5f\u4e0d\u4e4f\u6ea2\u7f8e\u4e4b\u8bcd\uff0c\u6bd4\u5982",(0,l.jsx)(n.strong,{children:"\u6027\u80fd\u70b8\u88c2"}),"\u3001",(0,l.jsx)(n.strong,{children:"\u9760\u8c31"}),"\u3001",(0,l.jsx)(n.strong,{children:"\u5f88\u667a\u80fd"}),"\u7b49\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u4f46\u66f4\u503c\u5f97\u6211\u4eec\u5173\u6ce8\u7684\uff0c\u5374\u662f\u5ba2\u6237\u7528\u8d77\u6765\u6709\u70b9\u522b\u626d\u3001\u5374\u6ca1\u8bf4\u51fa\u6765\u751a\u81f3\u610f\u8bc6\u4e0d\u5230\u8fd9\u662f\u95ee\u9898\u7684\u5730\u65b9\u3002\n\u505a\u4ea7\u54c1\u8c03\u7814\u6700\u9ad8\u6548\u7684\u65b9\u6cd5\uff0c\u5c31\u662f\u7ad9\u5728\u80cc\u540e\u770b\u7528\u6237\u600e\u4e48\u4f7f\u7528\u4f60\u7684\u4ea7\u54c1\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6211\u4eec\u901a\u8fc7\u8fdc\u7a0b\u6f14\u793a\u3001\u6216\u8005\u8f85\u52a9\u7528\u6237\u8dd1\u901a\u7b2c\u4e00\u4e2a\u4f5c\u4e1a\uff08Aha moment\uff09\uff0c\u60ed\u6127\u5730\u770b\u5230\uff0c\u5c06\u540e\u53f0\u7a0b\u5e8f\u7684\u63a5\u53e3\uff0c\u5305\u88c5\u6210\u4e00\u4e2a\u4e2a\u8868\u5355\u76f4\u63a5\u5c55\u73b0\u7ed9\u7528\u6237\uff0c\n\u662f\u591a\u4e48\u5730\u61d2\u60f0\u548c\u7f3a\u4e4f\u60f3\u8c61\u529b\u3002\u6bd4\u5982\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"\u4ee5\u4efb\u52a1\u4e3a\u64cd\u4f5c\u5ba2\u4f53"}),"\uff0c\u7528\u6237\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u4e2a\u4efb\u52a1\u6765\u5b8c\u6210\u4ed6\u7684\u4e1a\u52a1\u76ee\u6807\u3002\u8fd9\u662f\u4e00\u79cd",(0,l.jsx)(n.strong,{children:"\u9762\u5411\u8fc7\u7a0b"}),"\u7684\u8bbe\u8ba1\uff0c\u7528\u6237\u9700\u8981\u975e\u5e38\u7406\u89e3\u5e95\u5c42\u7684\u6280\u672f\u7ec6\u8282\uff0c\u624d\u53ef\u80fd\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u5f97\u5fc3\u5e94\u624b\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u64cd\u4f5c\u5c42\u9762\uff0c",(0,l.jsx)(n.strong,{children:"\u7f3a\u5c11\u573a\u666f\u5c01\u88c5"}),"\u3002\u6bd4\u5982\u7528\u6237\u9700\u8981\u5feb\u901f\u5b8c\u6210\u67d0\u5f20\u8868\u4ece\u6765\u6e90\u5e93\u91cd\u65b0\u540c\u6b65\uff08\u6570\u636e\u4fee\u590d\uff09\uff0c\u90a3\u4e48\u4ed6\u9700\u8981\u5148\u505c\u6b62CDC\u4efb\u52a1\uff0c\u518d\u542f\u52a8\u4e00\u4e2a\u8dd1\u6279\u7684\u4efb\u52a1\uff0c\u7136\u540e\u518d\u5c06CDC\u4efb\u52a1\u62c9\u8d77\u6765\u3002\u6b65\u9aa4\u7e41\u591a\u4e14\u6ca1\u6709\u8f85\u52a9\u6821\u9a8c\uff0c\u6781\u6613\u51fa\u9519\u5f15\u53d1\u4e1a\u52a1\u6545\u969c\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u51fa\u4e8e",(0,l.jsx)(n.strong,{children:"\u4ee5\u7528\u6237\u4e3a\u4e2d\u5fc3\uff0c\u5c06\u9ebb\u70e6\u7559\u7ed9\u81ea\u5df1"}),"\u7684\u56e2\u961f\u4ef7\u503c\u89c2\uff0c\u6211\u4eec\u63a8\u51fa\u4e86\u6b64\u6b21\u7248\u672c\u66f4\u65b0\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u4e3b\u8981\u53d8\u5316",children:"\u4e3b\u8981\u53d8\u5316"}),"\n",(0,l.jsx)(n.h3,{id:"\u5168\u65b0\u4ea4\u4e92",children:"\u5168\u65b0\u4ea4\u4e92"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u9762\u5411",(0,l.jsx)(n.strong,{children:"\u6570\u636e\u4ea4\u4ed8"}),"\u7684\u5168\u65b0\u4ea4\u4e92\uff0c\u60a8\u53ea\u9700\u8981\u5173\u6ce8\u6570\u636e\u8868\u7684\u590d\u5236\u72b6\u6001\uff0c\u800c\u4e0d\u7528\u8003\u8651\u600e\u4e48\u914d\u7f6e\u4efb\u52a1\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u6d41\u6279\u878d\u5408",children:"\u6d41\u6279\u878d\u5408"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u4f18\u5148\u4f7f\u7528CDC\u65b9\u5f0f\u6765\u6301\u7eed\u5730\u590d\u5236\u589e\u91cf\u6570\u636e\uff08\u9700\u8981\u6765\u6e90\u5e93\u652f\u6301CDC\u80fd\u529b\uff09\uff1b"}),"\n",(0,l.jsxs)(n.li,{children:["\u5bf9\u540c\u4e00\u5f20\u6570\u636e\u8868\u800c\u8a00\uff0c\u57fa\u4e8eSQL\u67e5\u8be2\u7684",(0,l.jsx)(n.code,{children:"\u6279\u91cf\u590d\u5236"}),"\u4e0e\u57fa\u4e8eCDC\u6280\u672f\u7684",(0,l.jsx)(n.code,{children:"\u6d41\u5f0f\u590d\u5236"}),"\u65e0\u7f1d\u8854\u63a5\uff1b"]}),"\n",(0,l.jsxs)(n.li,{children:["\u4e00\u952e\u5c01\u88c5",(0,l.jsx)(n.code,{children:"\u91cd\u5237\u6570\u636e"}),"\u7684\u529f\u80fd\uff1b\u786e\u4fdd",(0,l.jsx)(n.strong,{children:"\u5e94\u6025\u54cd\u5e94"}),"\u573a\u666f\u4e0b\uff0c\u65e0\u9700\u4eba\u5de5\u601d\u8003\u6d41\u6279\u51b2\u7a81\u7684\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u6e38\u6807\u5217",children:"\u6e38\u6807\u5217"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u652f\u6301\u4e3a\u6bcf\u5f20\u8868\u5355\u72ec\u8bbe\u7f6e",(0,l.jsx)(n.strong,{children:"\u65f6\u95f4\u7c7b\u578b"}),"\u7684",(0,l.jsx)(n.code,{children:"\u6e38\u6807\u5217"}),"\u4ee5\u5b9e\u73b0\u6279\u91cf\u590d\u5236\u6a21\u5f0f\u4e0b\u7684",(0,l.jsx)(n.strong,{children:"\u589e\u91cf\u540c\u6b65"}),"\u80fd\u529b\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.admonition,{title:"\u9650\u5236",type:"caution",children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"\u6e38\u6807\u5217"}),"\u672c\u8d28\u4e0a\u662f\u4e00\u4e2a\u4e1a\u52a1\u5b57\u6bb5\uff0c\u4f9d\u8d56\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u6b63\u786e\u5730\u7ef4\u62a4\u5b83\u3002\n\u56e0\u6b64\uff0c\u5982\u679c\u67d0\u884c\u6570\u636e\u88ab\u7269\u7406\u5220\u9664\uff08DELETE\uff09\uff0c\u6216\u8005",(0,l.jsx)(n.code,{children:"\u6e38\u6807\u5217"}),"\u6ca1\u6709\u88ab\u6b63\u786e\u5730\u66f4\u65b0\uff0c\u90fd\u6709\u53ef\u80fd\u5bfc\u81f4\u57fa\u4e8e\u5b83\u7684\u6570\u636e\u540c\u6b65\u4e0d\u80fd\u6b63\u786e\u5de5\u4f5c\u3002"]}),(0,l.jsxs)(n.p,{children:["\u6b64\u98ce\u9669",(0,l.jsx)(n.code,{children:"bluepipe"}),"\u65e0\u6cd5\u8bc6\u522b\uff0c\u60a8\u9700\u8981\u8c28\u614e\u8bc4\u4f30\u4f7f\u7528\u6b64\u529f\u80fd\u3002"]})]}),"\n",(0,l.jsx)(n.h3,{id:"\u7b5b\u9009\u4e0e\u91cd\u547d\u540d",children:"\u7b5b\u9009\u4e0e\u91cd\u547d\u540d"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u6570\u636e\u590d\u5236\u5230\u76ee\u6807\u5e93\u65f6\uff0c\u652f\u6301",(0,l.jsx)(n.code,{children:"\u8868"}),"\u548c",(0,l.jsx)(n.code,{children:"\u5217\uff08\u5b57\u6bb5\uff09"}),"\u88c1\u526a\uff1b"]}),"\n",(0,l.jsxs)(n.li,{children:["\u6570\u636e\u590d\u5236\u5230\u76ee\u6807\u5e93\u65f6\uff0c\u652f\u6301",(0,l.jsx)(n.code,{children:"\u8868"}),"\u548c",(0,l.jsx)(n.code,{children:"\u5217\uff08\u5b57\u6bb5\uff09"}),"\u91cd\u547d\u540d\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,l.jsx)(n.p,{children:"\u8868\u6216\u8005\u5217\u91cd\u65b0\u8fdb\u884c\u7b5b\u9009\u6216\u8005\u91cd\u547d\u540d\u4e0d\u4f1a\u5f71\u54cd\u6b63\u5728\u8fd0\u884c\u6216\u8005\u8fd0\u884c\u7ed3\u675f\u7684\u4efb\u52a1\uff0c\u65b0\u7684\u914d\u7f6e\u4f1a\u5728\u4efb\u52a1\u4e0b\u6b21\u542f\u52a8\u65f6\u751f\u6548\u3002\n\u60a8\u6709\u53ef\u80fd\u60a8\u9700\u8981\u505a\u5b8c\u76f8\u5173\u4fee\u6539\u540e\u4eba\u5de5\u8fdb\u884c\u6570\u636e\u91cd\u5237\u3002"})}),"\n",(0,l.jsx)(n.h2,{id:"\u8fde\u63a5\u5668",children:"\u8fde\u63a5\u5668"}),"\n",(0,l.jsxs)(n.h3,{id:"\u65b0\u589eclickzetta",children:["\u65b0\u589e",(0,l.jsx)(n.code,{children:"ClickZetta"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"ClickZetta"}),"\u662f",(0,l.jsx)(n.a,{href:"https://www.yunqi.tech",children:"\u4e91\u5668\u79d1\u6280"}),"\u7814\u53d1\u7684\u4e0b\u4e00\u4ee3Single-Engine\u4e3a\u6838\u5fc3\u7406\u5ff5\u7684\u6e56\u4ed3\u5e73\u53f0\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u652f\u6301\u81ea\u52a8\u5efa\u8868\uff08Create Table\uff09\u548c\u4fee\u6539\u8868\u7ed3\u6784\uff08Alter Table\uff09\uff1b"}),"\n",(0,l.jsxs)(n.li,{children:["\u652f\u6301\u6570\u636e\u5b9e\u65f6\u5199\u5165\uff0c\u652f\u6301\u57fa\u4e8e",(0,l.jsx)(n.code,{children:"Primary Key"}),"\u8fdb\u884c\u6570\u636e\u66f4\u65b0\uff1b"]}),"\n",(0,l.jsx)(n.li,{children:"\u6682\u672a\u652f\u6301\u6570\u636e\u8bfb\u53d6\uff08\u542bBATCH\u548cCDC\uff09\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{title:"\u9650\u5236",type:"caution",children:(0,l.jsxs)(n.p,{children:["\u53d7",(0,l.jsx)(n.code,{children:"ClickZetta"}),"\u5f53\u524d\u7248\u672c\u9650\u5236\uff0c\u5bf9\u4e8e\u542b ",(0,l.jsx)(n.code,{children:"Primary Key"}),"\u7684\u8868\uff0c\u76ee\u524d\u4ec5\u652f\u6301\u5355\u7ebf\u7a0b\u5199\u5165\u3002",(0,l.jsx)(n.code,{children:"bluepipe"}),"\u81ea\u52a8\u8fdb\u884c\u4e86\u9002\u914d\uff0c\u65e0",(0,l.jsx)(n.code,{children:"Primary Key"}),"\n\u7684\u8868\u4ecd\u7136\u53ef\u4ee5\u591a\u7ebf\u7a0b\u5927\u541e\u5410\u5199\u5165\u3002"]})}),"\n",(0,l.jsxs)(n.h3,{id:"\u65b0\u589eintersystems",children:["\u65b0\u589e",(0,l.jsx)(n.code,{children:"InterSystems"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"InterSystems"}),"\u662f\u4e00\u5bb6\u63d0\u4f9b\u6570\u636e\u7ba1\u7406\u548c\u533b\u7597\u4fe1\u606f\u7cfb\u7edf\u7684\u516c\u53f8\uff0c\u4e3a\u533b\u7597\u5065\u5eb7\u3001\u91d1\u878d\u670d\u52a1\u3001\u4f9b\u5e94\u94fe\u548c\u7269\u6d41\u7b49\u884c\u4e1a\u63d0\u4f9b\u6570\u636e\u89e3\u51b3\u65b9\u6848\u3002\n",(0,l.jsx)(n.code,{children:"InterSystems"}),"\u57282022 Gartner","\xa9\ufe0f"," \u4e91\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\u9b54\u529b\u8c61\u9650","\u2122\ufe0f","\u4e2d\u88ab\u8bc4\u4e3a\u201c\u8fdc\u89c1\u8005\uff08Visionary\uff09\u201d\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u517c\u5bb9",(0,l.jsx)(n.a,{href:"https://www.intersystems.com/data-platform/",children:(0,l.jsx)(n.code,{children:"InterSystems IRIS"})})," \u548c",(0,l.jsx)(n.a,{href:"https://www.intersystems.com/cache/",children:(0,l.jsx)(n.code,{children:"InterSystems Cach\xe9"})}),"\u4e24\u5957\u5f15\u64ce\uff1b"]}),"\n",(0,l.jsx)(n.li,{children:"\u652f\u6301\u901a\u8fc7\u6279\u91cf\u65b9\u5f0f\u8bfb\u53d6\u6570\u636e\uff1b"}),"\n",(0,l.jsx)(n.li,{children:"\u6682\u672a\u652f\u6301\u57fa\u4e8e\u65e5\u5fd7\u8ba2\u9605\u7684 CDC \u80fd\u529b\uff1b"}),"\n",(0,l.jsx)(n.li,{children:"\u6682\u672a\u652f\u6301\u6570\u636e\u5199\u5165\u80fd\u529b\u3002"}),"\n"]}),"\n",(0,l.jsxs)(n.h3,{id:"\u4f18\u5316apache-hive",children:["\u4f18\u5316",(0,l.jsx)(n.code,{children:"Apache Hive"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u63a5\u5165\u65f6\u652f\u6301",(0,l.jsx)(n.a,{href:"https://cwiki.apache.org/confluence/display/hive/hiveserver2+clients#HiveServer2Clients-ConnectionURLWhenZooKeeperServiceDiscoveryIsEnabled",children:(0,l.jsx)(n.code,{children:"Zookeeper Service Discovery"})}),"\u914d\u7f6e\uff1b"]}),"\n",(0,l.jsxs)(n.li,{children:["CDC\u6570\u636e\u4ee5",(0,l.jsx)(n.code,{children:"APPEND"}),"\u6a21\u5f0f\u5199\u5165\u4e34\u65f6\u8868\uff0c\u5b9a\u671f",(0,l.jsx)(n.code,{children:"MERGE"}),"\u5230\u4e3b\u8868\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u9057\u7559\u95ee\u9898",children:"\u9057\u7559\u95ee\u9898"}),"\n",(0,l.jsx)(n.h3,{id:"\u9519\u8bef\u7387\u63a7\u5236",children:"\u9519\u8bef\u7387\u63a7\u5236"}),"\n",(0,l.jsxs)(n.p,{children:["\u590d\u5236\u8fc7\u7a0b\u4e2d\u7684",(0,l.jsx)(n.code,{children:"\u9519\u8bef\u7387\u63a7\u5236"}),"\u5c1a\u672a\u652f\u6301\u3002\n\u56e0\u6b64\uff0c\u5728\u5f53\u524d\u7248\u672c\u4e2d\uff0c\u5982\u679c\u67d0\u884c\u6570\u636e\u56e0\u4e3a\u5b57\u6bb5\u7c7b\u578b\u4e0d\u517c\u5bb9\u3001\u6216\u8005\u5b57\u7b26\u8d85\u957f\u7b49\u539f\u56e0\u800c\u65e0\u6cd5\u5199\u5165\uff0c\u5219\u4f1a\u5bfc\u81f4\u6574\u4e2a\u4efb\u52a1\u5931\u8d25\u3002"]}),"\n",(0,l.jsx)(n.h3,{id:"cdc\u6a21\u5f0f\u4e0b\u8868\u4e4b\u95f4\u7684\u8026\u5408",children:"CDC\u6a21\u5f0f\u4e0b\u8868\u4e4b\u95f4\u7684\u8026\u5408"}),"\n",(0,l.jsx)(n.p,{children:"\u7531\u4e8eCDC\u6280\u672f\u7684\u7279\u6b8a\u6027\uff0c\u51fa\u4e8e\u6570\u636e\u5e93\u8d44\u6e90\u8003\u8651\uff0c\u6211\u4eec\u9650\u5236\u4e86\u4e00\u4e2a\u4f5c\u4e1a\u6700\u591a\u542f\u7528\u4e00\u6761CDC\u6d41\u6765\u590d\u5236\u6570\u636e\uff0c\u8fd9\u5fc5\u7136\u5bfc\u81f4\u4e0d\u540c\u8868\u4e4b\u95f4\u4e92\u76f8\u8026\u5408\u3002\n\u5373\u67d0\u5f20\u8868\u65e0\u6cd5\u5199\u5165\uff0c\u6216\u8005\u5199\u5165\u6027\u80fd\u53d8\u6162\uff0c\u4f1a\u5bfc\u81f4\u540c\u4e00\u4e2a\u4f5c\u4e1a\u5185\u5176\u4ed6\u8868\u7684\u590d\u5236\u4e5f\u88ab\u963b\u585e\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8003\u8651\u89e3\u51b3\u6b64\u95ee\u9898\u800c\u5e26\u6765\u7684\u6280\u672f\u590d\u6742\u5ea6\u6025\u5267\u4e0a\u5347\uff0c\u77ed\u671f\u5185\u6211\u4eec\u4e0d\u4f1a\u7740\u624b\u53bb\u89e3\u51b3\u3002\u60a8\u53ef\u57fa\u4e8e\u4e1a\u52a1\u4f18\u5148\u7ea7\uff0c\u5c06\u4e00\u4e2a\u4f5c\u4e1a\u62c6\u5206\u6210\u591a\u4e2a\u4f5c\u4e1a\u6765\u89c4\u907f\u8fd9\u4e00\u95ee\u9898\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>d});var l=s(6540);const i={},r=l.createContext(i);function c(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);