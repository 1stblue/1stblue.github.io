"use strict";(self.webpackChunk_1stblue_github_io=self.webpackChunk_1stblue_github_io||[]).push([[9048],{609:(e,t,n)=>{n.d(t,{V:()=>l,t:()=>c});var a=n(6540),o=n(9532),i=n(4848);const s=Symbol("EmptyContext"),r=a.createContext(s);function l(e){let{children:t,name:n,items:o}=e;const s=(0,a.useMemo)((()=>n&&o?{name:n,items:o}:null),[n,o]);return(0,i.jsx)(r.Provider,{value:s,children:t})}function c(){const e=(0,a.useContext)(r);if(e===s)throw new o.dV("DocsSidebarProvider");return e}},6972:(e,t,n)=>{n.d(t,{B5:()=>g,Nr:()=>d,OF:()=>x,Y:()=>b,w8:()=>m});var a=n(6540),o=n(6347),i=n(2831),s=n(4070),r=n(9169),l=n(3025),c=n(609);function d(e){return"link"!==e.type||e.unlisted?"category"===e.type?function(e){if(e.href&&!e.linkUnlisted)return e.href;for(const t of e.items){const e=d(t);if(e)return e}}(e):void 0:e.href}const u=(e,t)=>void 0!==e&&(0,r.ys)(e,t),h=(e,t)=>e.some((e=>m(e,t)));function m(e,t){return"link"===e.type?u(e.href,t):"category"===e.type&&(u(e.href,t)||h(e.items,t))}function p(e,t){switch(e.type){case"category":return m(e,t)||e.items.some((e=>p(e,t)));case"link":return!e.unlisted||m(e,t);default:return!0}}function b(e,t){return(0,a.useMemo)((()=>e.filter((e=>p(e,t)))),[e,t])}function f(e){let{sidebarItems:t,pathname:n,onlyCategories:a=!1}=e;const o=[];return function e(t){for(const i of t)if("category"===i.type&&((0,r.ys)(i.href,n)||e(i.items))||"link"===i.type&&(0,r.ys)(i.href,n)){return a&&"category"!==i.type||o.unshift(i),!0}return!1}(t),o}function x(){const e=(0,c.t)(),{pathname:t}=(0,o.zy)(),n=(0,s.vT)()?.pluginData.breadcrumbs;return!1!==n&&e?f({sidebarItems:e.items,pathname:t}):null}function g(e){let{route:t}=e;const n=(0,o.zy)(),a=(0,l.r)(),s=t.routes,r=s.find((e=>(0,o.B6)(n.pathname,e)));if(!r)return null;const c=r.sidebar,d=c?a.docsSidebars[c]:void 0;return{docElement:(0,i.v)(s),sidebarName:c,sidebarItems:d}}},3025:(e,t,n)=>{n.d(t,{n:()=>r,r:()=>l});var a=n(6540),o=n(9532),i=n(4848);const s=a.createContext(null);function r(e){let{children:t,version:n}=e;return(0,i.jsx)(s.Provider,{value:n,children:t})}function l(){const e=(0,a.useContext)(s);if(null===e)throw new o.dV("DocsVersionProvider");return e}},1888:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ke});var a=n(6540),o=n(4164),i=n(1213),s=n(7559),r=n(6972),l=n(609),c=n(1312),d=n(3104),u=n(5062);const h={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var m=n(4848);function p(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:r}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(r(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,m.jsx)("button",{"aria-label":(0,c.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var b=n(3109),f=n(6347),x=n(4581),g=n(6342),v=n(8774),j=n(6025),C=n(4586),y=n(2303),k=n(5293);const A={themedComponent:"themedComponent_mlkZ","themedComponent--light":"themedComponent--light_NVdE","themedComponent--dark":"themedComponent--dark_xIcU"};function _(e){let{className:t,children:n}=e;const i=(0,y.A)(),{colorMode:s}=(0,k.G)();return(0,m.jsx)(m.Fragment,{children:(i?"dark"===s?["dark"]:["light"]:["light","dark"]).map((e=>{const i=n({theme:e,className:(0,o.A)(t,A.themedComponent,A[`themedComponent--${e}`])});return(0,m.jsx)(a.Fragment,{children:i},e)}))})}function N(e){const{sources:t,className:n,alt:a,...o}=e;return(0,m.jsx)(_,{className:n,children:e=>{let{theme:n,className:i}=e;return(0,m.jsx)("img",{src:t[n],alt:a,className:i,...o})}})}function S(e){let{logo:t,alt:n,imageClassName:a}=e;const o={light:(0,j.Ay)(t.src),dark:(0,j.Ay)(t.srcDark||t.src)},i=(0,m.jsx)(N,{className:t.className,sources:o,height:t.height,width:t.width,alt:n,style:t.style});return a?(0,m.jsx)("div",{className:a,children:i}):i}function T(e){const{siteConfig:{title:t}}=(0,C.A)(),{navbar:{title:n,logo:a}}=(0,g.p)(),{imageClassName:o,titleClassName:i,...s}=e,r=(0,j.Ay)(a?.href||"/"),l=n?"":t,c=a?.alt??l;return(0,m.jsxs)(v.A,{to:r,...s,...a?.target&&{target:a.target},children:[a&&(0,m.jsx)(S,{logo:a,alt:c,imageClassName:o}),null!=n&&(0,m.jsx)("b",{className:i,children:n})]})}function w(e){return(0,m.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,m.jsxs)("g",{fill:"#7a7a7a",children:[(0,m.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,m.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const I="collapseSidebarButton_PEFL",B="collapseSidebarButtonIcon_kv0_";function M(e){let{onClick:t}=e;return(0,m.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",I),onClick:t,children:(0,m.jsx)(w,{className:B})})}var E=n(5041),L=n(9532);const H=Symbol("EmptyContext"),P=a.createContext(H);function R(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,m.jsx)(P.Provider,{value:i,children:t})}var D=n(1422),G=n(9169);function F(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,m.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function U(e){let{item:t,onItemClick:n,activePath:i,level:l,index:c,...d}=e;const{items:u,label:h,collapsible:p,className:b,href:f}=t,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,g.p)(),j=function(e){const t=(0,y.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,r.Nr)(e):void 0),[e,t])}(t),C=(0,r.w8)(t,i),k=(0,G.ys)(f,i),{collapsed:A,setCollapsed:_}=(0,D.u)({initialState:()=>!!p&&(!C&&t.collapsed)}),{expandedItem:N,setExpandedItem:S}=function(){const e=(0,a.useContext)(P);if(e===H)throw new L.dV("DocSidebarItemsExpandedStateProvider");return e}(),T=function(e){void 0===e&&(e=!A),S(e?null:c),_(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,L.ZC)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:C,collapsed:A,updateCollapsed:T}),(0,a.useEffect)((()=>{p&&null!=N&&N!==c&&x&&_(!0)}),[p,N,c,_,x]),(0,m.jsxs)("li",{className:(0,o.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":A},b),children:[(0,m.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,m.jsx)(v.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!f&&p,"menu__link--active":C}),onClick:p?e=>{n?.(t),f?T(!1):(e.preventDefault(),T())}:()=>{n?.(t)},"aria-current":k?"page":void 0,role:p&&!f?"button":void 0,"aria-expanded":p&&!f?!A:void 0,href:p?j??"#":j,...d,children:h}),f&&p&&(0,m.jsx)(F,{collapsed:A,categoryLabel:h,onClick:e=>{e.preventDefault(),T()}})]}),(0,m.jsx)(D.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:A,children:(0,m.jsx)(J,{items:u,tabIndex:A?-1:0,onItemClick:n,activePath:i,level:l+1})})]})}var W=n(6654);const V="iconExternalLink_nPIU";function z(e){let{width:t=13.5,height:n=13.5}=e;return(0,m.jsx)("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:V,children:(0,m.jsx)("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})})}const O="menuExternalLink_NmtK";function Y(e){let{item:t,onItemClick:n,activePath:a,level:i,index:l,...c}=e;const{href:d,label:u,className:h,autoAddBaseUrl:p}=t,b=(0,r.w8)(t,a),f=(0,W.A)(d);return(0,m.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",h),children:(0,m.jsxs)(v.A,{className:(0,o.A)("menu__link",!f&&O,{"menu__link--active":b}),autoAddBaseUrl:p,"aria-current":b?"page":void 0,to:d,...f&&{onClick:n?()=>n(t):void 0},...c,children:[u,!f&&(0,m.jsx)(z,{})]})},u)}const q="menuHtmlItem_M9Kj";function $(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:r,className:l}=t;return(0,m.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(n),r&&[q,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:i}},a)}function K(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,m.jsx)(U,{item:t,...n});case"html":return(0,m.jsx)($,{item:t,...n});default:return(0,m.jsx)(Y,{item:t,...n})}}function Z(e){let{items:t,...n}=e;const a=(0,r.Y)(t,n.activePath);return(0,m.jsx)(R,{children:a.map(((e,t)=>(0,m.jsx)(K,{item:e,index:t,...n},t)))})}const J=(0,a.memo)(Z),Q="menu_SIkG",X="menuWithAnnouncementBar_GW3s";function ee(e){let{path:t,sidebar:n,className:i}=e;const r=function(){const{isActive:e}=(0,E.M)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,m.jsx)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",Q,r&&X,i),children:(0,m.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(J,{items:n,activePath:t,level:1})})})}const te="sidebar_njMd",ne="sidebarWithHideableNavbar_wUlq",ae="sidebarHidden_VK0M",oe="sidebarLogo_isFc";function ie(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:r}}}=(0,g.p)();return(0,m.jsxs)("div",{className:(0,o.A)(te,s&&ne,i&&ae),children:[s&&(0,m.jsx)(T,{tabIndex:-1,className:oe}),(0,m.jsx)(ee,{path:t,sidebar:n}),r&&(0,m.jsx)(M,{onClick:a})]})}const se=a.memo(ie);var re=n(5600),le=n(9876);const ce=e=>{let{sidebar:t,path:n}=e;const a=(0,le.M)();return(0,m.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,m.jsx)(J,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function de(e){return(0,m.jsx)(re.GX,{component:ce,props:e})}const ue=a.memo(de);function he(e){const t=(0,x.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,m.jsxs)(m.Fragment,{children:[n&&(0,m.jsx)(se,{...e}),a&&(0,m.jsx)(ue,{...e})]})}const me={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function pe(e){let{toggleSidebar:t}=e;return(0,m.jsx)("div",{className:me.expandButton,title:(0,c.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,m.jsx)(w,{className:me.expandButtonIcon})})}const be={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function fe(e){let{children:t}=e;const n=(0,l.t)();return(0,m.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function xe(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:r}=(0,f.zy)(),[l,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{l&&c(!1),!l&&(0,b.O)()&&c(!0),i((e=>!e))}),[i,l]);return(0,m.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,be.docSidebarContainer,n&&be.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(be.docSidebarContainer)&&n&&c(!0)},children:(0,m.jsx)(fe,{children:(0,m.jsxs)("div",{className:(0,o.A)(be.sidebarViewport,l&&be.sidebarViewportHidden),children:[(0,m.jsx)(he,{sidebar:t,path:r,onCollapse:d,isHidden:l}),l&&(0,m.jsx)(pe,{toggleSidebar:d})]})})})}const ge={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ve(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,l.t)();return(0,m.jsx)("main",{className:(0,o.A)(ge.docMainContainer,(t||!a)&&ge.docMainContainerEnhanced),children:(0,m.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",ge.docItemWrapper,t&&ge.docItemWrapperEnhanced),children:n})})}const je={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function Ce(e){let{children:t}=e;const n=(0,l.t)(),[o,i]=(0,a.useState)(!1);return(0,m.jsxs)("div",{className:je.docsWrapper,children:[(0,m.jsx)(p,{}),(0,m.jsxs)("div",{className:je.docRoot,children:[n&&(0,m.jsx)(xe,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,m.jsx)(ve,{hiddenSidebarContainer:o,children:t})]})]})}var ye=n(3363);function ke(e){const t=(0,r.B5)(e);if(!t)return(0,m.jsx)(ye.A,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,m.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,m.jsx)(l.V,{name:a,items:c,children:(0,m.jsx)(Ce,{children:n})})})}},3363:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var a=n(4164),o=n(1312),i=n(1107),s=n(4848);function r(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.A,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}},1422:(e,t,n)=>{n.d(t,{N:()=>x,u:()=>c});var a=n(6540),o=n(8193),i=n(205),s=n(3109),r=n(4848);const l="ease-in-out";function c(e){let{initialState:t}=e;const[n,o]=(0,a.useState)(t??!1),i=(0,a.useCallback)((()=>{o((e=>!e))}),[]);return{collapsed:n,setCollapsed:o,toggleCollapsed:i}}const d={display:"none",overflow:"hidden",height:"0px"},u={display:"block",overflow:"visible",height:"auto"};function h(e,t){const n=t?d:u;e.style.display=n.display,e.style.overflow=n.overflow,e.style.height=n.height}function m(e){let{collapsibleRef:t,collapsed:n,animation:o}=e;const i=(0,a.useRef)(!1);(0,a.useEffect)((()=>{const e=t.current;function a(){const t=e.scrollHeight,n=o?.duration??function(e){if((0,s.O)())return 1;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}(t);return{transition:`height ${n}ms ${o?.easing??l}`,height:`${t}px`}}function r(){const t=a();e.style.transition=t.transition,e.style.height=t.height}if(!i.current)return h(e,n),void(i.current=!0);return e.style.willChange="height",function(){const t=requestAnimationFrame((()=>{n?(r(),requestAnimationFrame((()=>{e.style.height=d.height,e.style.overflow=d.overflow}))):(e.style.display="block",requestAnimationFrame((()=>{r()})))}));return()=>cancelAnimationFrame(t)}()}),[t,n,o])}function p(e){if(!o.A.canUseDOM)return e?d:u}function b(e){let{as:t="div",collapsed:n,children:o,animation:i,onCollapseTransitionEnd:s,className:l,disableSSRStyle:c}=e;const d=(0,a.useRef)(null);return m({collapsibleRef:d,collapsed:n,animation:i}),(0,r.jsx)(t,{ref:d,style:c?void 0:p(n),onTransitionEnd:e=>{"height"===e.propertyName&&(h(d.current,n),s?.(n))},className:l,children:o})}function f(e){let{collapsed:t,...n}=e;const[o,s]=(0,a.useState)(!t),[l,c]=(0,a.useState)(t);return(0,i.A)((()=>{t||s(!0)}),[t]),(0,i.A)((()=>{o&&c(t)}),[o,t]),o?(0,r.jsx)(b,{...n,collapsed:l}):null}function x(e){let{lazy:t,...n}=e;const a=t?f:b;return(0,r.jsx)(a,{...n})}},3109:(e,t,n)=>{function a(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}n.d(t,{O:()=>a})},9169:(e,t,n)=>{n.d(t,{Dt:()=>r,ys:()=>s});var a=n(6540),o=n(8328),i=n(4586);function s(e,t){const n=e=>(!e||e.endsWith("/")?e:`${e}/`)?.toLowerCase();return n(e)===n(t)}function r(){const{baseUrl:e}=(0,i.A)().siteConfig;return(0,a.useMemo)((()=>function(e){let{baseUrl:t,routes:n}=e;function a(e){return e.path===t&&!0===e.exact}function o(e){return e.path===t&&!e.exact}return function e(t){if(0===t.length)return;return t.find(a)||e(t.filter(o).flatMap((e=>e.routes??[])))}(n)}({routes:o.A,baseUrl:e})),[e])}}}]);