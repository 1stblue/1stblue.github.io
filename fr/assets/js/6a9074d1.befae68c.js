"use strict";(self.webpackChunk_1stblue_github_io=self.webpackChunk_1stblue_github_io||[]).push([[7491],{6386:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>t});var s=n(4848),c=n(8453);const i={slug:"bluepipe-with-lakehouse",authors:["aleafs"],image:"/img/blog-static/cover-bridge.jpeg",tags:["lakehouse","network","Oracle"]},r="\u6784\u5efa\u8de8\u7f51\u7edc\u6570\u636e\u7ba1\u9053\u6700\u4f73\u5b9e\u8df5",d={permalink:"/fr/blog/bluepipe-with-lakehouse",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-06-21-with-lakehouse.md",source:"@site/blog/2024-06-21-with-lakehouse.md",title:"\u6784\u5efa\u8de8\u7f51\u7edc\u6570\u636e\u7ba1\u9053\u6700\u4f73\u5b9e\u8df5",description:"\u672c\u6587\u4ee5\u4e91\u5668 Lakehouse \u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u5229\u7528bluepipe\u6784\u5efa\u8de8\u7f51\u7edc\u7684\u6570\u636e\u590d\u5236\u6700\u4f73\u5b9e\u8df5\u3002",date:"2024-06-21T00:00:00.000Z",tags:[{inline:!0,label:"lakehouse",permalink:"/fr/blog/tags/lakehouse"},{inline:!0,label:"network",permalink:"/fr/blog/tags/network"},{inline:!0,label:"Oracle",permalink:"/fr/blog/tags/oracle"}],readingTime:3.155,hasTruncateMarker:!1,authors:[{name:"aleafs",title:"\u5927\u9f84\u7a0b\u5e8f\u5458",url:"https://github.com/aleafs",imageURL:"https://avatars.githubusercontent.com/u/535479",key:"aleafs",page:null}],frontMatter:{slug:"bluepipe-with-lakehouse",authors:["aleafs"],image:"/img/blog-static/cover-bridge.jpeg",tags:["lakehouse","network","Oracle"]},unlisted:!1,nextItem:{title:"Release Notes (v.0.11.0)",permalink:"/fr/blog/v0.11.0-release-notes"}},o={authorsImageUrls:[void 0]},t=[{value:"\u65b9\u6848\u4f18\u52bf",id:"\u65b9\u6848\u4f18\u52bf",level:2},{value:"\u5f00\u7bb1\u5373\u7528\uff0c10 \u5206\u949f\u5b8c\u6210\u914d\u7f6e",id:"\u5f00\u7bb1\u5373\u752810-\u5206\u949f\u5b8c\u6210\u914d\u7f6e",level:3},{value:"\u5168\u3001\u589e\u91cf\u4e00\u4f53\u5316\uff0c\u65e0\u9700\u8fd0\u7ef4\u5e72\u9884",id:"\u5168\u589e\u91cf\u4e00\u4f53\u5316\u65e0\u9700\u8fd0\u7ef4\u5e72\u9884",level:3},{value:"\u63a8\u6570\u636e\uff0c\u800c\u4e0d\u662f\u66b4\u9732\u7aef\u53e3",id:"\u63a8\u6570\u636e\u800c\u4e0d\u662f\u66b4\u9732\u7aef\u53e3",level:3},{value:"<code>Oracle</code>\u94fe\u8def\u7684\u72ec\u7279\u4f18\u52bf",id:"oracle\u94fe\u8def\u7684\u72ec\u7279\u4f18\u52bf",level:2},{value:"\u5bf9<code>DDL</code>\u884c\u4e3a\u7684\u6df1\u5ea6\u517c\u5bb9",id:"\u5bf9ddl\u884c\u4e3a\u7684\u6df1\u5ea6\u517c\u5bb9",level:3},{value:"\u5927\u4e8b\u52a1\u4f18\u5316",id:"\u5927\u4e8b\u52a1\u4f18\u5316",level:3},{value:"\u5168\u9762\u652f\u6301\u540d\u79f0\u8d85\u8fc7 30 \u5b57\u7b26\u7684\u8868",id:"\u5168\u9762\u652f\u6301\u540d\u79f0\u8d85\u8fc7-30-\u5b57\u7b26\u7684\u8868",level:3},{value:"\u9002\u914d\u652f\u6301<code>RAC</code>\u67b6\u6784",id:"\u9002\u914d\u652f\u6301rac\u67b6\u6784",level:3}];function a(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.p,{children:["\u672c\u6587\u4ee5",(0,s.jsx)(l.a,{href:"https://yunqi.tech/",children:"\u4e91\u5668"})," ",(0,s.jsx)(l.code,{children:"Lakehouse"})," \u4e3a\u4f8b\uff0c\u4ecb\u7ecd\u5229\u7528",(0,s.jsx)(l.code,{children:"bluepipe"}),"\u6784\u5efa\u8de8\u7f51\u7edc\u7684\u6570\u636e\u590d\u5236\u6700\u4f73\u5b9e\u8df5\u3002"]}),"\n",(0,s.jsxs)(l.p,{children:["\u5982\u4e0b\u56fe\uff0c\u5ba2\u6237\u4e1a\u52a1\u7cfb\u7edf\u90e8\u7f72\u5728\u79c1\u6709 IDC \u4e2d\uff0c\u800c",(0,s.jsx)(l.code,{children:"Lakehouse"}),"\u4f5c\u4e3a\u591a\u79df\u6237\u6e56\u4ed3\u670d\u52a1\u90e8\u7f72\u5728\u4e91\u4e0a\u3002\u6570\u636e\u9700\u8981\u4ece",(0,s.jsx)(l.code,{children:"Oracle"}),"\u540c\u6b65\u5230",(0,s.jsx)(l.code,{children:"Lakehouse"}),"\n\uff0c\u6211\u4eec\u63a8\u8350\u5c06",(0,s.jsx)(l.code,{children:"bluepipe"}),"\u90e8\u7f72\u5728\u5ba2\u6237 IDC \u4e2d\uff0c",(0,s.jsx)(l.strong,{children:"\u63a8"}),"\u6570\u636e\u5230",(0,s.jsx)(l.code,{children:"Lakehouse"}),"\u3002"]}),"\n",(0,s.jsx)(l.p,{children:(0,s.jsx)(l.img,{alt:"Oracle to Lakehouse",src:n(8637).A+"",width:"2350",height:"520"})}),"\n",(0,s.jsx)(l.h2,{id:"\u65b9\u6848\u4f18\u52bf",children:"\u65b9\u6848\u4f18\u52bf"}),"\n",(0,s.jsx)(l.h3,{id:"\u5f00\u7bb1\u5373\u752810-\u5206\u949f\u5b8c\u6210\u914d\u7f6e",children:"\u5f00\u7bb1\u5373\u7528\uff0c10 \u5206\u949f\u5b8c\u6210\u914d\u7f6e"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"bluepipe"}),"\u51e0\u4e4e\u53ef\u4ee5\u8fd0\u884c\u5728\u4efb\u4f55",(0,s.jsx)(l.code,{children:"Linux"}),"\u7cfb\u7edf\u4e2d\uff0c\u652f\u6301",(0,s.jsx)(l.code,{children:"x86"}),"\u548c",(0,s.jsx)(l.code,{children:"arm"}),"\u82af\u7247\uff1b\u5e38\u89c1\u7684\u673a\u67b6\u5f0f\u670d\u52a1\u5668\u3001\u7b14\u8bb0\u672c\u7535\u8111\uff0c\u751a\u81f3\u6811\u8393\u6d3e\u90fd\u53ef\u4ee5\u7528\u6765\u90e8\u7f72\uff1b"]}),"\n",(0,s.jsx)(l.li,{children:"\u6781\u7b80\u7684\u914d\u7f6e\u8fc7\u7a0b\uff0c\u9ed8\u8ba4\u53c2\u6570\u5373\u53ef\u8fbe\u5230\u6700\u4f73\u6027\u80fd\u3002"}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"\u5168\u589e\u91cf\u4e00\u4f53\u5316\u65e0\u9700\u8fd0\u7ef4\u5e72\u9884",children:"\u5168\u3001\u589e\u91cf\u4e00\u4f53\u5316\uff0c\u65e0\u9700\u8fd0\u7ef4\u5e72\u9884"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsx)(l.li,{children:"\u5168\u91cf\u540c\u6b65\u4e0e\u589e\u91cf\u540c\u6b65\u6df1\u5ea6\u534f\u540c\uff0c\u51e0\u4e4e\u65e0\u9700\u65e5\u5e38\u8fd0\u7ef4\u64cd\u4f5c\uff1b"}),"\n",(0,s.jsx)(l.li,{children:"\u9ad8\u6548\u7684\u6570\u636e\u6bd4\u5bf9\u4e0e\u70ed\u4fee\u590d\u6280\u672f\uff0c\u59cb\u7ec8\u4fdd\u8bc1\u6570\u636e\u4e00\u81f4\uff1b"}),"\n",(0,s.jsxs)(l.li,{children:["\u9ad8\u5ea6\u9c81\u68d2\u7684",(0,s.jsx)(l.code,{children:"Schema Evolution"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsx)(l.h3,{id:"\u63a8\u6570\u636e\u800c\u4e0d\u662f\u66b4\u9732\u7aef\u53e3",children:"\u63a8\u6570\u636e\uff0c\u800c\u4e0d\u662f\u66b4\u9732\u7aef\u53e3"}),"\n",(0,s.jsxs)(l.ul,{children:["\n",(0,s.jsxs)(l.li,{children:[(0,s.jsx)(l.code,{children:"bluepipe"}),"\u4e0e\u60a8\u7684\u6570\u636e\u5e93\u4e00\u8d77\u90e8\u7f72\u5728\u60a8\u7684\u5185\u7f51\uff0c\u65e0\u9700\u5bf9\u5916\u66b4\u9732\u7aef\u53e3\uff1b"]}),"\n",(0,s.jsxs)(l.li,{children:["\u5f39\u6027",(0,s.jsx)(l.code,{children:"buffer size"}),"\u6280\u672f\uff0c\u5728",(0,s.jsx)(l.code,{children:"\u541e\u5410(Throughput)"}),"\u548c",(0,s.jsx)(l.code,{children:"\u5ef6\u8fdf(latency)"}),"\u4e4b\u95f4\u81ea\u52a8\u5e73\u8861\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(l.h2,{id:"oracle\u94fe\u8def\u7684\u72ec\u7279\u4f18\u52bf",children:[(0,s.jsx)(l.code,{children:"Oracle"}),"\u94fe\u8def\u7684\u72ec\u7279\u4f18\u52bf"]}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.code,{children:"bluepipe"}),"\u57fa\u4e8e",(0,s.jsx)(l.code,{children:"Oracle LogMiner"}),"\u5b9e\u73b0\u5bf9\u53d8\u66f4\u6570\u636e\u7684\u6355\u6349\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u5728\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\u505a\u4e86\u6df1\u5ea6\u4f18\u5316\uff1a"]}),"\n",(0,s.jsxs)(l.h3,{id:"\u5bf9ddl\u884c\u4e3a\u7684\u6df1\u5ea6\u517c\u5bb9",children:["\u5bf9",(0,s.jsx)(l.code,{children:"DDL"}),"\u884c\u4e3a\u7684\u6df1\u5ea6\u517c\u5bb9"]}),"\n",(0,s.jsxs)(l.p,{children:["\u5728",(0,s.jsx)(l.code,{children:"LogMiner"}),"\u9ed8\u8ba4\u7b56\u7565\u4e0b\uff0c\u5f53\u53d1\u751f",(0,s.jsx)(l.code,{children:"DDL"}),"\u884c\u4e3a\u540e\uff0c\u76f8\u5173\u8868\u4e0a\u540e\u7eed\u7684",(0,s.jsx)(l.code,{children:"DML"}),"\u64cd\u4f5c\u5747\u65e0\u6cd5\u6b63\u786e\u89e3\u6790\uff0c\u4ece\u800c\u5bfc\u81f4\u65e0\u6cd5\u6b63\u786e\u6355\u6349\u5230\u53d8\u66f4\u3002"]}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.code,{children:"bluepipe"}),"\u7ef4\u62a4\u4e86\u5b57\u5178\u6587\u4ef6\u7684\u81ea\u52a8\u6784\u5efa\u7b56\u7565\uff0c\u4fdd\u8bc1\u8868\u7ed3\u6784\u53d8\u66f4\u540e\u4ecd\u7136\u80fd\u6355\u6349\u5230\u6b63\u786e\u7684\u589e\u91cf\u6570\u636e\u3002"]}),"\n",(0,s.jsx)(l.h3,{id:"\u5927\u4e8b\u52a1\u4f18\u5316",children:"\u5927\u4e8b\u52a1\u4f18\u5316"}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.code,{children:"Oracle Redo Log"}),"\u4e2d\u8bb0\u5f55\u4e86\u5b8c\u6574\u7684\u4e8b\u52a1(",(0,s.jsx)(l.code,{children:"Transaction"}),")\u8fc7\u7a0b\uff0c\u800c\u4e1a\u52a1\u4e0a\u901a\u5e38\u4ec5\u5e0c\u671b\u62ff\u5230",(0,s.jsx)(l.code,{children:"commit"}),"\n\u4e4b\u540e\u7684\u6570\u636e\uff0c\u56e0\u6b64\uff0c\u9700\u8981\u5728\u4f20\u8f93\u8fc7\u7a0b\u4e2d\u4f7f\u7528",(0,s.jsx)(l.code,{children:"buffer"}),"\u6765\u6682\u5b58\u5c1a\u672a",(0,s.jsx)(l.code,{children:"commit"}),"\u7684\u53d8\u66f4\u8bb0\u5f55\u3002"]}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.code,{children:"bluepipe"}),"\u57fa\u4e8e\u72ec\u7279\u7684\u5185\u5b58\u7ba1\u7406\u6280\u672f\uff0c\u5355\u8282\u70b9\u4e0a\u4e5f\u80fd\u8f7b\u677e\u5e94\u5bf9\u5343\u4e07\u91cf\u7ea7\u7684\u5927\u4e8b\u52a1\u3002"]}),"\n",(0,s.jsx)(l.h3,{id:"\u5168\u9762\u652f\u6301\u540d\u79f0\u8d85\u8fc7-30-\u5b57\u7b26\u7684\u8868",children:"\u5168\u9762\u652f\u6301\u540d\u79f0\u8d85\u8fc7 30 \u5b57\u7b26\u7684\u8868"}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.code,{children:"Oracle 12.2"}),"\u7248\u672c\u4e4b\u540e\uff0c\u5bf9\u8868\u540d\u3001\u5b57\u6bb5\u540d\u7684\u6700\u5927\u957f\u5ea6\u652f\u6301\u5230\u4e86 128 \u5b57\u8282\u3002\n\u4f46\u56e0\u4e3a\u79cd\u79cd\u539f\u56e0\uff0c",(0,s.jsx)(l.code,{children:"LogMiner"}),"\u5bf9\u4e8e\u65e0",(0,s.jsx)(l.code,{children:"OGG LICENSE"}),"\u7684\u5b9e\u4f8b\uff0c\u81f3\u4eca\u4ecd\u4e0d\u652f\u6301\u5bf9\u5305\u542b\u957f\u540d\u79f0\u7684\u8868\u7684 DML\n\u89e3\u6790\uff0c\u8be6\u60c5\u53c2\u8003",(0,s.jsx)(l.a,{href:"https://docs.oracle.com/en/database/oracle/oracle-database/19/sutil/oracle-logminer-utility.html",children:"\u5b98\u65b9\u6587\u6863"}),"\u3002"]}),"\n",(0,s.jsxs)(l.p,{children:[(0,s.jsx)(l.code,{children:"bluepipe"}),"\u57fa\u4e8e\u9ad8\u6548\u7684\u6d41\u6279\u878d\u5408\u6280\u672f\uff0c\u5168\u9762\u652f\u6301\u4e86\u6b64\u79cd\u60c5\u51b5\u4e0b\u7684\u589e\u91cf\u6570\u636e\u6355\u6349\u4e0e\u6295\u9012\u3002"]}),"\n",(0,s.jsxs)(l.h3,{id:"\u9002\u914d\u652f\u6301rac\u67b6\u6784",children:["\u9002\u914d\u652f\u6301",(0,s.jsx)(l.code,{children:"RAC"}),"\u67b6\u6784"]})]})}function h(e={}){const{wrapper:l}={...(0,c.R)(),...e.components};return l?(0,s.jsx)(l,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8637:(e,l,n)=>{n.d(l,{A:()=>s});const s=n.p+"assets/images/cross-network-pipe-eddbc84234790986facb8dda2658652e.png"},8453:(e,l,n)=>{n.d(l,{R:()=>r,x:()=>d});var s=n(6540);const c={},i=s.createContext(c);function r(e){const l=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function d(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:l},e.children)}}}]);