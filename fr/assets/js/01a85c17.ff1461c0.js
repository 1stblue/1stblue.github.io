"use strict";(self.webpackChunk_1stblue_github_io=self.webpackChunk_1stblue_github_io||[]).push([[8209,5700],{3430:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});a(6540);var l=a(4848);const r=e=>(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",...e,children:(0,l.jsx)("path",{fill:"currentColor",fillRule:"evenodd",d:"M7.118 8.528A1 1 0 0 1 8 8h8a1 1 0 0 1 .832 1.555l-4 6a1 1 0 0 1-1.664 0l-4-6a1 1 0 0 1-.05-1.027Z",clipRule:"evenodd"})})},2071:(e,s,a)=>{a.d(s,{A:()=>c});a(6540);var l=a(4164),r=a(318),t=a(9274),n=a(6347),i=a(4848);function c(e){const{sidebar:s,toc:a,children:c,...o}=e,{pathname:d}=(s&&s.items.length,(0,n.zy)());return(0,i.jsx)(r.A,{...o,children:(0,i.jsxs)("div",{className:(0,l.A)("margin-vert--lg flex","/blog"===d&&"mt-[-20px]"),children:[(0,i.jsxs)("div",{className:"flex-1 flex",children:[(0,i.jsx)(t.A,{sidebar:s}),(0,i.jsx)("main",{className:"w-full",children:c})]}),a&&(0,i.jsx)("div",{className:"flex-shrink-0 ml-[10px]",children:a})]})})}},4854:(e,s,a)=>{a.r(s),a.d(s,{default:()=>x});a(6540);var l=a(4164),r=a(1213),t=a(7559),n=a(2071),i=a(5699),c=a(1463),o=a(1107),d=a(4848);function x(e){let{tags:s,sidebar:a}=e;const x="\u6240\u6709\u6807\u7b7e";return(0,d.jsxs)(r.e3,{className:(0,l.A)(t.G.wrapper.blogPages,t.G.page.blogTagsListPage),children:[(0,d.jsx)(r.be,{title:x}),(0,d.jsx)(c.A,{tag:"blog_tags_list"}),(0,d.jsxs)(n.A,{sidebar:a,children:[(0,d.jsx)(o.A,{as:"h2",className:"mb-[20px]",children:x}),(0,d.jsx)(i.A,{tags:s})]})]})}},58:(e,s,a)=>{a.d(s,{A:()=>n});a(6540);var l=a(4164),r=a(8774),t=a(4848);function n(e){let{permalink:s,label:a,isActive:n}=e;return(0,t.jsx)(r.A,{href:s,className:(0,l.A)("no-underline hover:no-underline hover:text-bp-blue-1","text-xs",!n&&"bg-gray-100 ",!n&&"text-gray-600 ","rounded","py-1","px-2",n&&"bg-gray-200 text-gray-500",n&&"dark-bg-gray-700 text-gray-300"),children:a})}},5699:(e,s,a)=>{a.d(s,{A:()=>m});var l=a(6540),r=a(58),t=a(8646),n=a(4164),i=a(91),c=a(8096),o=a(3430),d=a(4848);const x=e=>{e=e.replace(/-/g," ");return[["typescript","TypeScript"],["javascript","JavaScript"],["chakra ui","Chakra UI"],["material ui","Material UI"],["nextjs","Next.js"],["nestjs","NestJS"],["css","CSS"]].forEach((s=>{e=e.replace(s[0],s[1])})),(0,t.nx)(e)},h=e=>{let{tags:s,collapsed:a,onShowMoreClick:l}=e;return(0,d.jsx)("div",{className:(0,n.A)("hidden lg:flex","not-prose","justify-between","items-start"),children:(0,d.jsx)("ul",{className:(0,n.A)("overflow-hidden","flex-1"),style:{margin:0,padding:0},children:s.map((e=>(0,d.jsx)("li",{className:(0,n.A)("inline-flex","m-1"),children:(0,d.jsx)(r.A,{...e,label:x(e.label)})},e.permalink)))})})},g=e=>{let{tags:s}=e;return(0,d.jsx)("div",{className:"mb-10 block w-full lg:hidden",children:(0,d.jsx)(i.EN,{children:e=>{let{open:a}=e;return(0,d.jsxs)("div",{className:(0,n.A)("rounded-[4px]","border border-gray-100 "),children:[(0,d.jsxs)(i.EN.Button,{className:(0,n.A)("bg-gray-50 ","border-b border-gray-100 ","w-full","flex items-center gap-3","px-2 py-2"),children:[(0,d.jsx)(o.default,{className:(0,n.A)("h-5 w-5","text-gray-400 ","transition-transform duration-200 ease-in-out",{"-rotate-90 transform":!a})}),(0,d.jsx)("span",{className:(0,n.A)("text-sm"," text-gray-900"),children:"Blog Post Tags"})]}),(0,d.jsx)(c.e,{show:a,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,d.jsx)(i.EN.Panel,{className:"h-[200px] overflow-auto p-2 sm:h-[232px] sm:p-6",children:(0,d.jsx)("ul",{className:(0,n.A)("overflow-hidden","flex-1"),style:{margin:0,padding:0},children:s.map((e=>(0,d.jsx)("li",{className:(0,n.A)("inline-flex","m-1"),children:(0,d.jsx)(r.A,{...e,label:x(e.label)})},e.permalink)))})})})]})}})})};function m(e){let{tags:s}=e;const[a,r]=l.useState(!0),t=["bluepipe","react","nextjs","typescript","tutorial","material-ui","ant-design","docker","comparison"],n=(s??[]).sort(((e,s)=>{const a=t.indexOf(e.label),l=t.indexOf(s.label);return-1===a?-1===l?0:1:-1===l?-1:a-l}));return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(h,{collapsed:a,tags:n,onShowMoreClick:e=>r(e)}),(0,d.jsx)(g,{tags:n})]})}}}]);