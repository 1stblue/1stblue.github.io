"use strict";(self.webpackChunk_1stblue_github_io=self.webpackChunk_1stblue_github_io||[]).push([[4212],{3250:(t,a,e)=>{e.r(a),e.d(a,{default:()=>x});e(6540);var s=e(4164),r=e(1213),o=e(7559),l=e(6461),n=e(2071),i=e(1463),c=e(1107),u=e(7857);const h={authorListItem:"authorListItem_n3yI"};var m=e(4848);function d(t){let{author:a}=t;return(0,m.jsx)("li",{className:h.authorListItem,children:(0,m.jsx)(u.A,{as:"h2",author:a,count:a.count})})}function g(t){let{authors:a}=t;return(0,m.jsx)("section",{className:(0,s.A)("margin-vert--lg",h.authorsListSection),children:(0,m.jsx)("ul",{children:a.map((t=>(0,m.jsx)(d,{author:t},t.key)))})})}function x(t){let{authors:a,sidebar:e}=t;const u=(0,l.uz)();return(0,m.jsxs)(r.e3,{className:(0,s.A)(o.G.wrapper.blogPages,o.G.page.blogAuthorsListPage),children:[(0,m.jsx)(r.be,{title:u}),(0,m.jsx)(i.A,{tag:"blog_authors_list"}),(0,m.jsxs)(n.A,{sidebar:e,children:[(0,m.jsx)(c.A,{as:"h1",children:u}),(0,m.jsx)(g,{authors:a})]})]})}},6461:(t,a,e)=>{e.d(a,{ZD:()=>l,uz:()=>n});e(6540);var s=e(1312),r=e(3465);e(4848);function o(){const{selectMessage:t}=(0,r.W)();return a=>t(a,(0,s.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:a}))}function l(t){const a=o();return(0,s.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:a(t.count),tagName:t.label})}const n=()=>(0,s.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})},7857:(t,a,e)=>{e.d(a,{A:()=>A});e(6540);var s=e(4164),r=e(8774),o=e(6400),l=e(3347),n=e(9976),i=e(9697),c=e(8911),u=e(1502);const h={authorSocials:"authorSocials_OQLn",authorSocialLink:"authorSocialLink_O1ZE",authorSocialIcon:"authorSocialIcon_Lbip"};var m=e(4848);const d={twitter:{Icon:o.A,label:"Twitter"},github:{Icon:l.A,label:"GitHub"},stackoverflow:{Icon:i.A,label:"Stack Overflow"},linkedin:{Icon:c.A,label:"LinkedIn"},x:{Icon:n.A,label:"X"}};function g(t){let{platform:a,link:e}=t;const{Icon:o,label:l}=d[n=a]??{Icon:u.A,label:n};var n;return(0,m.jsx)(r.A,{className:h.authorSocialLink,href:e,title:l,children:(0,m.jsx)(o,{className:(0,s.A)(h.authorSocialLink)})})}function x(t){let{author:a}=t;const e=Object.entries(a.socials??{});return(0,m.jsx)("div",{className:h.authorSocials,children:e.map((t=>{let[a,e]=t;return(0,m.jsx)(g,{platform:a,link:e},a)}))})}var j=e(1107);const p={authorImage:"authorImage_GKcB","author-as-h1":"author-as-h1_VSIq","author-as-h2":"author-as-h2_L4qz",authorDetails:"authorDetails_uciD",authorName:"authorName_r1JK",authorTitle:"authorTitle_ym37",authorBlogPostCount:"authorBlogPostCount_vm3g"};function b(t){return t.href?(0,m.jsx)(r.A,{...t}):(0,m.jsx)(m.Fragment,{children:t.children})}function f(t){let{title:a}=t;return(0,m.jsx)("small",{className:p.authorTitle,title:a,children:a})}function _(t){let{name:a,as:e}=t;return e?(0,m.jsx)(j.A,{as:e,className:p.authorName,children:a}):(0,m.jsx)("span",{className:p.authorName,children:a})}function v(t){let{count:a}=t;return(0,m.jsx)("span",{className:(0,s.A)(p.authorBlogPostCount),children:a})}function A(t){let{as:a,author:e,className:r,count:o}=t;const{name:l,title:n,url:i,imageURL:c,email:u,page:h}=e,d=h?.permalink||i||u&&`mailto:${u}`||void 0;return(0,m.jsxs)("div",{className:(0,s.A)("avatar margin-bottom--sm",r,p[`author-as-${a}`]),children:[c&&(0,m.jsx)(b,{href:d,className:"avatar__photo-link",children:(0,m.jsx)("img",{className:(0,s.A)("avatar__photo",p.authorImage),src:c,alt:l})}),(l||n)&&(0,m.jsxs)("div",{className:(0,s.A)("avatar__intro",p.authorDetails),children:[(0,m.jsxs)("div",{className:"avatar__name",children:[l&&(0,m.jsx)(b,{href:d,children:(0,m.jsx)(_,{name:l,as:a})}),void 0!==o&&(0,m.jsx)(v,{count:o})]}),!!n&&(0,m.jsx)(f,{title:n}),(0,m.jsx)(x,{author:e})]})]})}},2071:(t,a,e)=>{e.d(a,{A:()=>l});e(6540);var s=e(318),r=e(9274),o=e(4848);function l(t){const{sidebar:a,toc:e,children:l,...n}=t;a&&a.items.length;return(0,o.jsx)(s.A,{...n,children:(0,o.jsxs)("div",{className:"container margin-vert--lg flex gap-[10px]",children:[(0,o.jsxs)("div",{className:"flex-1 flex",children:[(0,o.jsx)(r.A,{sidebar:a}),(0,o.jsx)("main",{children:l})]}),e&&(0,o.jsx)("div",{className:"flex-shrink-0",children:e})]})})}}}]);