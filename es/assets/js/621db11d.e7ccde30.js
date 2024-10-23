"use strict";(self.webpackChunk_1stblue_github_io=self.webpackChunk_1stblue_github_io||[]).push([[4212],{3250:(a,t,e)=>{e.r(t),e.d(t,{default:()=>x});e(6540);var s=e(4164),r=e(1213),l=e(7559),o=e(6461),n=e(2071),i=e(1463),c=e(1107),u=e(7857);const h={authorListItem:"authorListItem_n3yI"};var m=e(4848);function d(a){let{author:t}=a;return(0,m.jsx)("li",{className:h.authorListItem,children:(0,m.jsx)(u.A,{as:"h2",author:t,count:t.count})})}function g(a){let{authors:t}=a;return(0,m.jsx)("section",{className:(0,s.A)("margin-vert--lg",h.authorsListSection),children:(0,m.jsx)("ul",{children:t.map((a=>(0,m.jsx)(d,{author:a},a.key)))})})}function x(a){let{authors:t,sidebar:e}=a;const u=(0,o.uz)();return(0,m.jsxs)(r.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogAuthorsListPage),children:[(0,m.jsx)(r.be,{title:u}),(0,m.jsx)(i.A,{tag:"blog_authors_list"}),(0,m.jsxs)(n.A,{sidebar:e,children:[(0,m.jsx)(c.A,{as:"h1",children:u}),(0,m.jsx)(g,{authors:t})]})]})}},6461:(a,t,e)=>{e.d(t,{ZD:()=>o,uz:()=>n});e(6540);var s=e(1312),r=e(3465);e(4848);function l(){const{selectMessage:a}=(0,r.W)();return t=>a(t,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function o(a){const t=l();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(a.count),tagName:a.label})}const n=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},7857:(a,t,e)=>{e.d(t,{A:()=>A});e(6540);var s=e(4164),r=e(8774),l=e(6400),o=e(3347),n=e(9976),i=e(9697),c=e(8911),u=e(1502);const h={authorSocials:"authorSocials_OQLn",authorSocialLink:"authorSocialLink_O1ZE",authorSocialIcon:"authorSocialIcon_Lbip"};var m=e(4848);const d={twitter:{Icon:l.A,label:"Twitter"},github:{Icon:o.A,label:"GitHub"},stackoverflow:{Icon:i.A,label:"Stack Overflow"},linkedin:{Icon:c.A,label:"LinkedIn"},x:{Icon:n.A,label:"X"}};function g(a){let{platform:t,link:e}=a;const{Icon:l,label:o}=d[n=t]??{Icon:u.A,label:n};var n;return(0,m.jsx)(r.A,{className:h.authorSocialLink,href:e,title:o,children:(0,m.jsx)(l,{className:(0,s.A)(h.authorSocialLink)})})}function x(a){let{author:t}=a;const e=Object.entries(t.socials??{});return(0,m.jsx)("div",{className:h.authorSocials,children:e.map((a=>{let[t,e]=a;return(0,m.jsx)(g,{platform:t,link:e},t)}))})}var j=e(1107);const p={authorImage:"authorImage_GKcB","author-as-h1":"author-as-h1_VSIq","author-as-h2":"author-as-h2_L4qz",authorDetails:"authorDetails_uciD",authorName:"authorName_r1JK",authorTitle:"authorTitle_ym37",authorBlogPostCount:"authorBlogPostCount_vm3g"};function f(a){return a.href?(0,m.jsx)(r.A,{...a}):(0,m.jsx)(m.Fragment,{children:a.children})}function b(a){let{title:t}=a;return(0,m.jsx)("small",{className:p.authorTitle,title:t,children:t})}function _(a){let{name:t,as:e}=a;return e?(0,m.jsx)(j.A,{as:e,className:p.authorName,children:t}):(0,m.jsx)("span",{className:p.authorName,children:t})}function v(a){let{count:t}=a;return(0,m.jsx)("span",{className:(0,s.A)(p.authorBlogPostCount),children:t})}function A(a){let{as:t,author:e,className:r,count:l}=a;const{name:o,title:n,url:i,imageURL:c,email:u,page:h}=e,d=h?.permalink||i||u&&`mailto:${u}`||void 0;return(0,m.jsxs)("div",{className:(0,s.A)("avatar margin-bottom--sm",r,p[`author-as-${t}`]),children:[c&&(0,m.jsx)(f,{href:d,className:"avatar__photo-link",children:(0,m.jsx)("img",{className:(0,s.A)("avatar__photo",p.authorImage),src:c,alt:o})}),(o||n)&&(0,m.jsxs)("div",{className:(0,s.A)("avatar__intro",p.authorDetails),children:[(0,m.jsxs)("div",{className:"avatar__name",children:[o&&(0,m.jsx)(f,{href:d,children:(0,m.jsx)(_,{name:o,as:t})}),void 0!==l&&(0,m.jsx)(v,{count:l})]}),!!n&&(0,m.jsx)(b,{title:n}),(0,m.jsx)(x,{author:e})]})]})}},2071:(a,t,e)=>{e.d(t,{A:()=>o});e(6540);var s=e(318),r=e(9274),l=e(4848);function o(a){const{sidebar:t,toc:e,children:o,...n}=a;t&&t.items.length;return(0,l.jsx)(s.A,{...n,children:(0,l.jsxs)("div",{className:"container margin-vert--lg flex gap-[10px]",children:[(0,l.jsxs)("div",{className:"flex-1 flex",children:[(0,l.jsx)(r.A,{sidebar:t}),(0,l.jsx)("main",{className:"w-full",children:o})]}),e&&(0,l.jsx)("div",{className:"flex-shrink-0",children:e})]})})}}}]);