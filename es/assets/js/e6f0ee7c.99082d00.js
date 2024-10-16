"use strict";(self.webpackChunk_1stblue_github_io=self.webpackChunk_1stblue_github_io||[]).push([[8908],{9549:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>o});var n=l(4848),i=l(8453);const d={slug:"v0.10.1-release-notes",authors:["aleafs"],tags:["Release Notes","v0.10.1"]},c="Release Notes (v.0.10.1)",r={permalink:"/es/blog/v0.10.1-release-notes",editUrl:"https://github.com/1stblue/1stblue.github.io/tree/deploy-bluepipe-landing-page/blog/2024-04-23-v010-released.md",source:"@site/blog/2024-04-23-v010-released.md",title:"Release Notes (v.0.10.1)",description:"\u4e3b\u8981\u53d8\u5316",date:"2024-04-23T00:00:00.000Z",tags:[{inline:!0,label:"Release Notes",permalink:"/es/blog/tags/release-notes"},{inline:!0,label:"v0.10.1",permalink:"/es/blog/tags/v-0-10-1"}],readingTime:1.385,hasTruncateMarker:!1,authors:[{name:"aleafs",title:"\u5927\u9f84\u7a0b\u5e8f\u5458",url:"https://github.com/aleafs",imageURL:"https://avatars.githubusercontent.com/u/535479",key:"aleafs",page:null}],frontMatter:{slug:"v0.10.1-release-notes",authors:["aleafs"],tags:["Release Notes","v0.10.1"]},unlisted:!1,prevItem:{title:"Release Notes (v.0.11.0)",permalink:"/es/blog/v0.11.0-release-notes"},nextItem:{title:"Tips for sqlplus",permalink:"/es/blog/tips-for-sqlplus"}},t={authorsImageUrls:[void 0]},o=[{value:"\u4e3b\u8981\u53d8\u5316",id:"\u4e3b\u8981\u53d8\u5316",level:2},{value:"\u5168\u65b0\u7684<code>\u8fde\u63a5</code>\u8bbe\u8ba1",id:"\u5168\u65b0\u7684\u8fde\u63a5\u8bbe\u8ba1",level:3},{value:"\u5de5\u5177\u96c6<code>Utility</code>",id:"\u5de5\u5177\u96c6utility",level:3},{value:"\u8fde\u63a5\u5668",id:"\u8fde\u63a5\u5668",level:2},{value:"<code>PostgresSQL</code>\uff08\u6539\u8fdb\uff09",id:"postgressql\u6539\u8fdb",level:3},{value:"<code>ClickZetta</code>\uff08\u6539\u8fdb\uff09",id:"clickzetta\u6539\u8fdb",level:3},{value:"<code>Oracle Database</code>\uff08\u6539\u8fdb\uff09",id:"oracle-database\u6539\u8fdb",level:3},{value:"<code>GBase 8s</code>\uff08\u65b0\u589e\uff09",id:"gbase-8s\u65b0\u589e",level:3},{value:"<code>GaussDB</code>\uff08\u65b0\u589e\uff09",id:"gaussdb\u65b0\u589e",level:3},{value:"\u57fa\u7840\u955c\u50cf",id:"\u57fa\u7840\u955c\u50cf",level:2},{value:"<code>runtime</code>",id:"runtime",level:3},{value:"<code>gateway</code>",id:"gateway",level:3}];function a(e){const s={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"\u4e3b\u8981\u53d8\u5316",children:"\u4e3b\u8981\u53d8\u5316"}),"\n",(0,n.jsxs)(s.h3,{id:"\u5168\u65b0\u7684\u8fde\u63a5\u8bbe\u8ba1",children:["\u5168\u65b0\u7684",(0,n.jsx)(s.code,{children:"\u8fde\u63a5"}),"\u8bbe\u8ba1"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"JDBC URL"}),"\u7684\u89e3\u6790\u8bc6\u522b\u80fd\u529b\uff0c\u63d0\u5347",(0,n.jsx)(s.code,{children:"Java"}),"\u5f00\u53d1\u8005\u7fa4\u4f53\u7684\u4f7f\u7528\u4f53\u9a8c\uff1b"]}),"\n",(0,n.jsx)(s.li,{children:"\u6570\u636e\u5e93\u6d41\u63a7\u80fd\u529b\uff0c\u907f\u514d\u5927\u91cf\u4f5c\u4e1a\u540c\u65f6\u8fd0\u884c\u9020\u6210\u6570\u636e\u5e93\u4e0d\u7a33\u5b9a\uff1b"}),"\n",(0,n.jsx)(s.li,{children:"\u591a\u5730\u5740\u80fd\u529b\uff0c\u4e3a\u540e\u7eed\u9ad8\u53ef\u7528\u3001\u8bfb\u5199\u5206\u79bb\u529f\u80fd\u505a\u652f\u6491\u3002"}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"\u5de5\u5177\u96c6utility",children:["\u5de5\u5177\u96c6",(0,n.jsx)(s.code,{children:"Utility"})]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"docker"}),"\u7f51\u7edc\u8bca\u65ad\uff1b"]}),"\n",(0,n.jsx)(s.li,{children:"\u4f5c\u4e1a\u914d\u7f6e\u5907\u4efd\u529f\u80fd\u3002"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u8fde\u63a5\u5668",children:"\u8fde\u63a5\u5668"}),"\n",(0,n.jsxs)(s.h3,{id:"postgressql\u6539\u8fdb",children:[(0,n.jsx)(s.code,{children:"PostgresSQL"}),"\uff08\u6539\u8fdb\uff09"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"CDC"}),"\u6a21\u5f0f\u5f00\u542f\u81ea\u52a8\u521b\u5efa",(0,n.jsx)(s.code,{children:"publication"}),"\uff08\u9700\u8981",(0,n.jsx)(s.code,{children:"super"}),"\u6743\u9650\uff09\uff1b"]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"clickzetta\u6539\u8fdb",children:[(0,n.jsx)(s.code,{children:"ClickZetta"}),"\uff08\u6539\u8fdb\uff09"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"DDL"}),"\u8bed\u53e5\u6267\u884c\u540e\u5f3a\u5236\u5237\u65b0\u6570\u636e\u5b57\u5178\uff0c\u663e\u8457\u964d\u4f4e\u4f5c\u4e1a\u5931\u8d25\u7387\uff1b"]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"oracle-database\u6539\u8fdb",children:[(0,n.jsx)(s.code,{children:"Oracle Database"}),"\uff08\u6539\u8fdb\uff09"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"CDC"}),"\u6a21\u5f0f\u4e0b\u4e00\u7cfb\u5217bug fix\uff1b"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"Schema Repair"}),": ",(0,n.jsx)(s.code,{children:"integer"}),"\u7c7b\u578b\u8bc6\u522b\u6210",(0,n.jsx)(s.code,{children:"number"}),"\u7684 bug fix\uff1b"]}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"gbase-8s\u65b0\u589e",children:[(0,n.jsx)(s.code,{children:"GBase 8s"}),"\uff08\u65b0\u589e\uff09"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5199\u5165\u80fd\u529b\uff1b"}),"\n"]}),"\n",(0,n.jsxs)(s.h3,{id:"gaussdb\u65b0\u589e",children:[(0,n.jsx)(s.code,{children:"GaussDB"}),"\uff08\u65b0\u589e\uff09"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u5199\u5165\u80fd\u529b\uff1b"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u57fa\u7840\u955c\u50cf",children:"\u57fa\u7840\u955c\u50cf"}),"\n",(0,n.jsx)(s.h3,{id:"runtime",children:(0,n.jsx)(s.code,{children:"runtime"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"runtime"}),"\u662f",(0,n.jsx)(s.code,{children:"bluepipe"}),"\u7684",(0,n.jsx)(s.code,{children:"JDK"}),"\u8fd0\u884c\u73af\u5883\uff0c\u6b64\u6b21\u66f4\u65b0\uff1a"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\u65b0\u589e",(0,n.jsx)(s.code,{children:"krb5-user"}),"\u548c",(0,n.jsx)(s.code,{children:"xxd"}),"\u8f6f\u4ef6\u5305\uff0c\u4f9b",(0,n.jsx)(s.code,{children:"Kerberos"}),"\u8c03\u8bd5\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"gateway",children:(0,n.jsx)(s.code,{children:"gateway"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"gateway"}),"\u662f",(0,n.jsx)(s.code,{children:"bluepipe"}),"\u7684",(0,n.jsx)(s.code,{children:"openresty"}),"\u8fd0\u884c\u73af\u5883\uff0c\u8d1f\u8d23\u7528\u6237\u8bf7\u6c42\u7684\u63a5\u5165\u4ee3\u7406\u3001\u8eab\u4efd\u8ba4\u8bc1\u548c\u6743\u9650\u68c0\u67e5\u7b49\u5de5\u4f5c\u3002\n\u6b64\u6b21\u66f4\u65b0\uff1a"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"\u72ec\u7acb\u51fa\u5355\u72ec\u955c\u50cf\uff1b"}),"\n",(0,n.jsxs)(s.li,{children:["\u589e\u52a0\u57fa\u4e8e ",(0,n.jsx)(s.code,{children:"password"}),"\u548c\u6807\u51c6",(0,n.jsx)(s.code,{children:"OAuth"}),"\u8eab\u4efd\u8ba4\u8bc1\u529f\u80fd\u3002"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,s,l)=>{l.d(s,{R:()=>c,x:()=>r});var n=l(6540);const i={},d=n.createContext(i);function c(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);