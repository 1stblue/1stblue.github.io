"use strict";(self.webpackChunk_1stblue_io=self.webpackChunk_1stblue_io||[]).push([[4096],{1984:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),a=n(3727),o=n(5750),i=n(8241),s=n(7785),l=n(8087);const c=r.createContext({collectLink:()=>{}});var u=n(676);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}function b(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function v(e,t){var{isNavLink:n,to:d,href:v,activeClassName:g,isActive:h,"data-noBrokenLinkCheck":p,autoAddBaseUrl:k=!0}=e,E=f(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:w,baseUrl:O}}=(0,i.Z)(),{withBaseUrl:y}=(0,u.C)(),L=(0,r.useContext)(c),Z=(0,r.useRef)(null);(0,r.useImperativeHandle)(t,(()=>Z.current));const j=d||v;const T=(0,s.Z)(j),C=null==j?void 0:j.replace("pathname://","");let P=void 0!==C?(N=C,k&&(e=>e.startsWith("/"))(N)?y(N):N):void 0;var N;P&&T&&(P=(0,o.applyTrailingSlash)(P,{trailingSlash:w,baseUrl:O}));const M=(0,r.useRef)(!1),S=n?a.OL:a.rU,V=l.Z.canUseIntersectionObserver,D=(0,r.useRef)(),_=()=>{M.current||null==P||(window.docusaurus.preload(P),M.current=!0)};var x;(0,r.useEffect)((()=>(!V&&T&&null!=P&&window.docusaurus.prefetch(P),()=>{V&&D.current&&D.current.disconnect()})),[D,P,V,T]);const I=null!==(x=null==P?void 0:P.startsWith("#"))&&void 0!==x&&x,U=!P||!T||I;return U||p||L.collectLink(P),U?r.createElement("a",m({ref:Z,href:P},j&&!T&&{target:"_blank",rel:"noopener noreferrer"},E)):r.createElement(S,m(b(m({},E),{onMouseEnter:_,onTouchStart:_,innerRef:e=>{Z.current=e,V&&e&&T&&(D.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(D.current.unobserve(e),D.current.disconnect(),null!=P&&window.docusaurus.prefetch(P))}))})),D.current.observe(e))},to:P}),n&&{isActive:h,activeClassName:g}))}const g=r.forwardRef(v)},4220:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7294),a=n(6010),o=n(5319),i=n(6895),s=n(4999),l=n(9387);function c({children:e}){const t=function(){const{metadata:e,frontMatter:t,contentTitle:n}=(0,i.k)();return t.hide_title||void 0!==n?null:e.title}();return r.createElement("div",{className:(0,a.Z)(o.k.docs.docMarkdown,"markdown")},t&&r.createElement("header",null,r.createElement(s.Z,{as:"h1"},t)),r.createElement(l.Z,null,e))}},5479:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(4285),o=n(6895);function i(){const{metadata:e,frontMatter:t,assets:n}=(0,o.k)();var i;return r.createElement(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:null!==(i=n.image)&&void 0!==i?i:t.image})}},2085:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),a=n(6010),o=n(8241),i=n(1984),s=n(2210),l=n(5995),c=n(5319),u=n(9085),d=n(7391);const m={unreleased:function({siteTitle:e,versionMetadata:t}){return r.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:r.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return r.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:r.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=m[e.versionMetadata.banner];return r.createElement(t,e)}function f({versionLabel:e,to:t,onClick:n}){return r.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:r.createElement("b",null,r.createElement(i.Z,{to:t,onClick:n},r.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function v({className:e,versionMetadata:t}){const{siteConfig:{title:n}}=(0,o.Z)(),{pluginId:i}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,u.J)(i),{latestDocSuggestion:d,latestVersionSuggestion:m}=(0,l.Jo)(i),v=null!=d?d:(g=m).docs.find((e=>e.id===g.mainDocId));var g;return r.createElement("div",{className:(0,a.Z)(e,c.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},r.createElement("div",null,r.createElement(b,{siteTitle:n,versionMetadata:t})),r.createElement("div",{className:"margin-top--md"},r.createElement(f,{versionLabel:m.label,to:v.path,onClick:()=>s(m.name)})))}function g({className:e}){const t=(0,d.E)();return t.banner?r.createElement(v,{className:e,versionMetadata:t}):null}},5845:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(6010),o=n(2210),i=n(9527);const s={tags:"tags_jXut",tag:"tag_QGVx"};function l({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,a.Z)(s.tags,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:s.tag},r.createElement(i.Z,{label:e,permalink:t}))))))}},6895:(e,t,n)=>{n.d(t,{b:()=>i,k:()=>s});var r=n(7294),a=n(7806);const o=r.createContext(null);function i({children:e,content:t}){const n=function(e){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return r.createElement(o.Provider,{value:n},e)}function s(){const e=(0,r.useContext)(o);if(null===e)throw new a.i6("DocProvider");return e}}}]);