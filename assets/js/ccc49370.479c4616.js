"use strict";(self.webpackChunk_1stblue_github_io=self.webpackChunk_1stblue_github_io||[]).push([[3249,551],{3858:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});a(6540);var n=a(4848);function s(e){let{date:t,formattedDate:a}=e;return(0,n.jsx)("time",{dateTime:t,itemProp:"datePublished",children:a})}},2227:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});a(6540);var n=a(3465),s=a(1312),l=a(4848);function i(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,n.W)();return t=>{const a=Math.ceil(t);return e(a,(0,s.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,l.jsx)(l.Fragment,{children:a(t)})}},7857:(e,t,a)=>{a.d(t,{A:()=>N});a(6540);var n=a(4164),s=a(8774),l=a(6400),i=a(3347),r=a(9976),o=a(9697),c=a(8911),d=a(1502);const m={authorSocials:"authorSocials_OQLn",authorSocialLink:"authorSocialLink_O1ZE",authorSocialIcon:"authorSocialIcon_Lbip"};var h=a(4848);const u={twitter:{Icon:l.A,label:"Twitter"},github:{Icon:i.A,label:"GitHub"},stackoverflow:{Icon:o.A,label:"Stack Overflow"},linkedin:{Icon:c.A,label:"LinkedIn"},x:{Icon:r.A,label:"X"}};function x(e){let{platform:t,link:a}=e;const{Icon:l,label:i}=u[r=t]??{Icon:d.A,label:r};var r;return(0,h.jsx)(s.A,{className:m.authorSocialLink,href:a,title:i,children:(0,h.jsx)(l,{className:(0,n.A)(m.authorSocialLink)})})}function g(e){let{author:t}=e;const a=Object.entries(t.socials??{});return(0,h.jsx)("div",{className:m.authorSocials,children:a.map((e=>{let[t,a]=e;return(0,h.jsx)(x,{platform:t,link:a},t)}))})}var p=a(1107);const j={authorImage:"authorImage_GKcB","author-as-h1":"author-as-h1_VSIq","author-as-h2":"author-as-h2_L4qz",authorDetails:"authorDetails_uciD",authorName:"authorName_r1JK",authorTitle:"authorTitle_ym37",authorBlogPostCount:"authorBlogPostCount_vm3g"};function v(e){return e.href?(0,h.jsx)(s.A,{...e}):(0,h.jsx)(h.Fragment,{children:e.children})}function b(e){let{title:t}=e;return(0,h.jsx)("small",{className:j.authorTitle,title:t,children:t})}function f(e){let{name:t,as:a}=e;return a?(0,h.jsx)(p.A,{as:a,className:j.authorName,children:t}):(0,h.jsx)("span",{className:j.authorName,children:t})}function _(e){let{count:t}=e;return(0,h.jsx)("span",{className:(0,n.A)(j.authorBlogPostCount),children:t})}function N(e){let{as:t,author:a,className:s,count:l}=e;const{name:i,title:r,url:o,imageURL:c,email:d,page:m}=a,u=m?.permalink||o||d&&`mailto:${d}`||void 0;return(0,h.jsxs)("div",{className:(0,n.A)("avatar margin-bottom--sm",s,j[`author-as-${t}`]),children:[c&&(0,h.jsx)(v,{href:u,className:"avatar__photo-link",children:(0,h.jsx)("img",{className:(0,n.A)("avatar__photo",j.authorImage),src:c,alt:i})}),(i||r)&&(0,h.jsxs)("div",{className:(0,n.A)("avatar__intro",j.authorDetails),children:[(0,h.jsxs)("div",{className:"avatar__name",children:[i&&(0,h.jsx)(v,{href:u,children:(0,h.jsx)(f,{name:i,as:t})}),void 0!==l&&(0,h.jsx)(_,{count:l})]}),!!r&&(0,h.jsx)(b,{title:r}),(0,h.jsx)(g,{author:a})]})]})}},2071:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var n=a(4164),s=a(318),l=a(9274),i=a(6347),r=a(4848);function o(e){const{sidebar:t,toc:a,children:o,...c}=e,{pathname:d}=(t&&t.items.length,(0,i.zy)());return(0,r.jsx)(s.A,{...c,children:(0,r.jsxs)("div",{className:(0,n.A)("margin-vert--lg flex"),children:[(0,r.jsxs)("div",{className:"flex-1 flex",children:[(0,r.jsx)(l.A,{sidebar:t}),(0,r.jsx)("main",{className:(0,n.A)("w-full","/blog/"!==d&&"mt-[36px]"),children:o})]}),a&&(0,r.jsx)("div",{className:"flex-shrink-0 ml-[10px]",children:a})]})})}},5160:(e,t,a)=>{a.r(t),a.d(t,{default:()=>S});a(6540);var n=a(4164),s=a(1213),l=a(7559),i=a(9564),r=a(2071),o=a(1312),c=a(1720),d=a(4848);function m(e){const{nextItem:t,prevItem:a}=e;return(0,d.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[a&&(0,d.jsx)(c.A,{...a,subLabel:(0,d.jsx)(o.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"\u4e0a\u4e00\u7bc7"})}),t&&(0,d.jsx)(c.A,{...t,subLabel:(0,d.jsx)(o.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"\u4e0b\u4e00\u7bc7"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,i.e7)(),{title:a,description:n,date:l,tags:r,authors:o,frontMatter:c}=t,{keywords:m}=c,h=e.image??c.image;return(0,d.jsxs)(s.be,{title:a,description:n,keywords:m,image:h,children:[(0,d.jsx)("meta",{property:"og:type",content:"article"}),(0,d.jsx)("meta",{property:"article:published_time",content:l}),o.some((e=>e.url))&&(0,d.jsx)("meta",{property:"article:author",content:o.map((e=>e.url)).filter(Boolean).join(",")}),r.length>0&&(0,d.jsx)("meta",{property:"article:tag",content:r.map((e=>e.label)).join(",")})]})}var u=a(5260);function x(){const e=(0,i.J_)();return(0,d.jsx)(u.A,{children:(0,d.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var g=a(6054),p=a(6896),j=a(8774),v=a(440),b=a(8509),f=a(5200),_=a(4586),N=a(3858),A=a(2227),k=a(354),I=a.n(k),L=a(4323),C=a(4353),y=a.n(C),P=a(7857);const w=e=>{let{children:t}=e;const{metadata:a,isBlogPostPage:s}=(0,i.e7)(),{permalink:l,title:r,date:o,readingTime:c,frontMatter:m,tags:h,description:u,authors:x}=a,g=y()(o).format("YYYY\u5e74MM\u6708DD\u65e5"),p=x[0],{siteConfig:{url:k}}=(0,_.A)();return(0,d.jsxs)(f.A,{children:[(0,d.jsx)("div",{className:"text-sm",children:(0,d.jsxs)("div",{className:(0,n.A)("flex","justify-between","sm:flex-row flex-col"),children:[(0,d.jsx)("div",{className:"flex justify-center items-center gap-2 pl-[24px]",children:(0,d.jsx)(j.A,{to:"/blog",className:(0,n.A)("!text-gray-500 hover:text-bp-blue-1 text-sm no-underline"),children:"\u2190 \u8fd4\u56de\u535a\u5ba2"})}),(0,d.jsxs)("div",{className:"flex items-center gap-2 text-gray-600 ",children:[(0,d.jsx)(N.default,{date:o,formattedDate:g}),void 0!==c&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("span",{className:"w-[4px] h-[4px] rounded-full bg-gray-600 "}),(0,d.jsx)(A.default,{readingTime:c})]}),(0,d.jsx)("a",{className:"cursor-pointer text-bp-blue-1",onClick:()=>{I()(document.querySelector(".bluepipe-prose-blog-content"),{foreignObjectRendering:!1}).then((e=>{var t=e.width,a=e.height,n=t/515.28*841.89,s=a,l=0,i=515.28,o=515.28/t*a,c=e.toDataURL("image/jpeg",1),d=new L.Ay("","pt","a4");if(s<n)d.addImage(c,"JPEG",40,0,i,o);else for(;s>0;)d.addImage(c,"JPEG",40,l,i,o),l-=841.89,(s-=n)>0&&d.addPage();d.save(`${r}.pdf`)}))},children:"\u4e0b\u8f7d"})]})]})}),(0,d.jsxs)("div",{className:"p-[24px] bluepipe-prose-blog-content",children:[(0,d.jsx)("h1",{itemProp:"headline",children:s?r:(0,d.jsx)(j.A,{itemProp:"url",to:l,children:r})}),(0,d.jsxs)("div",{id:v.LU,className:"markdown",itemProp:"articleBody",children:[(0,d.jsx)(P.A,{author:p,className:"mt-[10px] mb-[40px]"}),(0,d.jsx)(b.A,{children:t})]})]})]})};function T(e){let{sidebar:t,children:a}=e;const{metadata:n,toc:s}=(0,i.e7)(),{nextItem:l,prevItem:o,frontMatter:c}=n,{hide_table_of_contents:h,toc_min_heading_level:u,toc_max_heading_level:x}=c;return(0,d.jsxs)(r.A,{toc:!h&&s.length>0?(0,d.jsx)(g.A,{toc:s,minHeadingLevel:u,maxHeadingLevel:x}):void 0,children:[(0,d.jsx)(p.A,{metadata:n}),(0,d.jsx)(w,{children:a}),(l||o)&&(0,d.jsx)(m,{nextItem:l,prevItem:o})]})}function S(e){const t=e.content;return(0,d.jsx)(i.in,{content:e.content,isBlogPostPage:!0,children:(0,d.jsxs)(s.e3,{className:(0,n.A)(l.G.wrapper.blogPages,l.G.page.blogPostPage),children:[(0,d.jsx)(h,{}),(0,d.jsx)(x,{}),(0,d.jsx)(T,{sidebar:e.sidebar,children:(0,d.jsx)(t,{})})]})})}},1720:(e,t,a)=>{a.d(t,{A:()=>i});a(6540);var n=a(4164),s=a(8774),l=a(4848);function i(e){const{permalink:t,title:a,subLabel:i,isNext:r}=e;return(0,l.jsxs)(s.A,{className:(0,n.A)("pagination-nav__link",r?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[i&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:i}),(0,l.jsx)("div",{className:"pagination-nav__label",children:a})]})}},6054:(e,t,a)=>{a.d(t,{A:()=>c});a(6540);var n=a(4164),s=a(4908);const l={tableOfContents:"tableOfContents_jeP5",docItemContainer:"docItemContainer_hgFs"};var i=a(4848);const r="table-of-contents__link toc-highlight",o="table-of-contents__link--active";function c(e){let{className:t,...a}=e;return(0,i.jsx)("div",{className:(0,n.A)(l.tableOfContents,"thin-scrollbar",t),children:(0,i.jsx)(s.A,{...a,linkClassName:r,linkActiveClassName:o})})}},4908:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(6540),s=a(6342),l=a(7243),i=a(366),r=a(8774),o=a(4848);function c(e){let{toc:t,className:a,linkClassName:n,isChild:s}=e;return t.length?(0,o.jsx)("div",{children:(0,o.jsx)("ul",{className:s?void 0:a,children:t.map((e=>(0,o.jsxs)("li",{children:[(0,o.jsx)(r.A,{to:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,o.jsx)(c,{isChild:!0,toc:e.children,className:a,linkClassName:n})]},e.id)))})}):null}const d=n.memo(c);function m(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:h,...u}=e;const x=(0,s.p)(),g=m??x.tableOfContents.minHeadingLevel,p=h??x.tableOfContents.maxHeadingLevel,j=(0,l.h)({toc:t,minHeadingLevel:g,maxHeadingLevel:p}),v=(0,n.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:p}}),[r,c,g,p]);return(0,i.i)(v),(0,o.jsx)("div",{children:(0,o.jsx)(d,{toc:j,className:a,linkClassName:r,...u})})}}}]);