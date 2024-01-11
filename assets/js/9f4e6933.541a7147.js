"use strict";(self.webpackChunk_1stblue_io=self.webpackChunk_1stblue_io||[]).push([[977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),b=o,d=s["".concat(a,".").concat(b)]||s[b]||f[b]||i;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=b;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>s});r(7294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const c={id:"etl-tools",sidebar_position:1},a="ETL\u5de5\u5177",u={unversionedId:"concept/integration/etl-tools",id:"concept/integration/etl-tools",title:"ETL\u5de5\u5177",description:"Azkaban",source:"@site/docs/concept/16-integration/001-etl-tools.md",sourceDirName:"concept/16-integration",slug:"/concept/integration/etl-tools",permalink:"/docs/concept/integration/etl-tools",draft:!1,editUrl:"https://github.com/1stblue/1stblue.github.io/tree/main/docs/concept/16-integration/001-etl-tools.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"etl-tools",sidebar_position:1},sidebar:"someSidebar",previous:{title:"\u4e0e\u5176\u4ed6\u7cfb\u7edf\u96c6\u6210",permalink:"/docs/concept/integration/"},next:{title:"\u53ef\u89c2\u6d4b\u6027",permalink:"/docs/concept/integration/observability"}},p={},s=[{value:"Azkaban",id:"azkaban",level:2},{value:"\u5b89\u88c5\u4e0e\u914d\u7f6e",id:"\u5b89\u88c5\u4e0e\u914d\u7f6e",level:3},{value:"\u8fd0\u884c\u4f5c\u4e1a",id:"\u8fd0\u884c\u4f5c\u4e1a",level:3},{value:"Airflow",id:"airflow",level:2},{value:"\u5b89\u88c5\u4e0e\u914d\u7f6e",id:"\u5b89\u88c5\u4e0e\u914d\u7f6e-1",level:3},{value:"\u8fd0\u884c\u4f5c\u4e1a",id:"\u8fd0\u884c\u4f5c\u4e1a-1",level:3},{value:"Dolphinscheduler",id:"dolphinscheduler",level:2},{value:"\u5b89\u88c5\u4e0e\u914d\u7f6e",id:"\u5b89\u88c5\u4e0e\u914d\u7f6e-2",level:3},{value:"\u8fd0\u884c\u4f5c\u4e1a",id:"\u8fd0\u884c\u4f5c\u4e1a-2",level:3}],f={toc:s},b="wrapper";function d(e){var{components:t}=e,r=l(e,["components"]);return(0,n.kt)(b,i(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},f,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"etl\u5de5\u5177"},"ETL\u5de5\u5177"),(0,n.kt)("h2",{id:"azkaban"},"Azkaban"),(0,n.kt)("h3",{id:"\u5b89\u88c5\u4e0e\u914d\u7f6e"},"\u5b89\u88c5\u4e0e\u914d\u7f6e"),(0,n.kt)("h3",{id:"\u8fd0\u884c\u4f5c\u4e1a"},"\u8fd0\u884c\u4f5c\u4e1a"),(0,n.kt)("h2",{id:"airflow"},"Airflow"),(0,n.kt)("h3",{id:"\u5b89\u88c5\u4e0e\u914d\u7f6e-1"},"\u5b89\u88c5\u4e0e\u914d\u7f6e"),(0,n.kt)("h3",{id:"\u8fd0\u884c\u4f5c\u4e1a-1"},"\u8fd0\u884c\u4f5c\u4e1a"),(0,n.kt)("h2",{id:"dolphinscheduler"},"Dolphinscheduler"),(0,n.kt)("h3",{id:"\u5b89\u88c5\u4e0e\u914d\u7f6e-2"},"\u5b89\u88c5\u4e0e\u914d\u7f6e"),(0,n.kt)("h3",{id:"\u8fd0\u884c\u4f5c\u4e1a-2"},"\u8fd0\u884c\u4f5c\u4e1a"))}d.isMDXComponent=!0}}]);