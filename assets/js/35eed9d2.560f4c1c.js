"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3420],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(r),d=o,f=c["".concat(u,".").concat(d)]||c[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1558:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>v,frontMatter:()=>p,metadata:()=>l,toc:()=>c});r(7294);var n=r(3905);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"mutation-mode",title:"Mutation Modes","example-tags":["form"]},u=void 0,l={unversionedId:"examples/mutation-mode",id:"examples/mutation-mode",title:"Mutation Modes",description:"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: pessimistic, optimistic and undoable. You can experience them with this app.",source:"@site/docs/examples/mutation-mode.md",sourceDirName:"examples",slug:"/examples/mutation-mode",permalink:"/docs/examples/mutation-mode",draft:!1,editUrl:"https://github.com/1stblue/1stblue.github.io/tree/main/docs/examples/mutation-mode.md",tags:[],version:"current",frontMatter:{id:"mutation-mode",title:"Mutation Modes","example-tags":["form"]},sidebar:"someSidebar",previous:{title:"Meta Properties Example",permalink:"/docs/examples/meta-properties"},next:{title:"Persist Query",permalink:"/docs/examples/persistQuery"}},m={},c=[],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=s("Tabs"),f=s("TabItem"),b=s("CodeSandboxExample"),y={toc:c},O="wrapper";function v(e){var{components:t}=e,r=i(e,["components"]);return(0,n.kt)(O,a(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}({},y,r),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,n.kt)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"optimistic")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"undoable"),". You can experience them with this app."),(0,n.kt)(d,{defaultValue:"antd",values:[{label:"Antd Design",value:"antd"},{label:"Chakra UI",value:"chakra-ui"},{label:"Mantine",value:"mantine"},{label:"Material UI",value:"material-ui"}],mdxType:"Tabs"},(0,n.kt)(f,{value:"antd",mdxType:"TabItem"},(0,n.kt)(b,{path:"form-antd-mutation-mode",mdxType:"CodeSandboxExample"})),(0,n.kt)(f,{value:"chakra-ui",mdxType:"TabItem"},(0,n.kt)(b,{path:"form-chakra-ui-mutation-mode",mdxType:"CodeSandboxExample"})),(0,n.kt)(f,{value:"mantine",mdxType:"TabItem"},(0,n.kt)(b,{path:"form-mantine-mutation-mode",mdxType:"CodeSandboxExample"})),(0,n.kt)(f,{value:"material-ui",mdxType:"TabItem"},(0,n.kt)(b,{path:"form-material-ui-mutation-mode",mdxType:"CodeSandboxExample"}))))}v.isMDXComponent=!0}}]);