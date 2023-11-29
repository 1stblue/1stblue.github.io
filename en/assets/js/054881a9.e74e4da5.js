"use strict";(self.webpackChunk_1stblue_io=self.webpackChunk_1stblue_io||[]).push([[4413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>O});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,O=u["".concat(c,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(O,o(o({ref:t},s),{},{components:n})):a.createElement(O,o({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>O,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(7294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const i={slug:"oracle-split-read",title:"Oracle\u5927\u8868\u7684\u5e76\u884c\u8bfb\u53d6",authors:["aleafs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-04-29-create-full-stack-app/social.jpg",tags:["Oracle","ROWID","\u5e76\u884c"]},c=void 0,p={permalink:"/en/blog/oracle-split-read",source:"@site/blog/2023-10-11-oracle-split-read.md",title:"Oracle\u5927\u8868\u7684\u5e76\u884c\u8bfb\u53d6",description:"\u6d4b\u8bd5\u73af\u5883",date:"2023-10-11T00:00:00.000Z",formattedDate:"October 11, 2023",tags:[{label:"Oracle",permalink:"/en/blog/tags/oracle"},{label:"ROWID",permalink:"/en/blog/tags/rowid"},{label:"\u5e76\u884c",permalink:"/en/blog/tags/\u5e76\u884c"}],readingTime:2.375,hasTruncateMarker:!1,authors:[{name:"aleafs",title:"\u7a0b\u5e8f\u5458",url:"https://github.com/aleafs",imageURL:"https://avatars.githubusercontent.com/u/535479",key:"aleafs"}],frontMatter:{slug:"oracle-split-read",title:"Oracle\u5927\u8868\u7684\u5e76\u884c\u8bfb\u53d6",authors:["aleafs"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-04-29-create-full-stack-app/social.jpg",tags:["Oracle","ROWID","\u5e76\u884c"]},relatedPosts:[],authorPosts:[]},s={authorsImageUrls:[void 0]},u=[{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:2},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:3},{value:"\u6570\u636e",id:"\u6570\u636e",level:3},{value:"\u6d4b\u8bd5\u9a8c\u8bc1",id:"\u6d4b\u8bd5\u9a8c\u8bc1",level:2},{value:"A: \u57fa\u4e8e\u4e3b\u952e/\u7d22\u5f15\u5217\uff0c\u6309\u7167(min, max)\u533a\u95f4\u5207\u5206",id:"a-\u57fa\u4e8e\u4e3b\u952e\u7d22\u5f15\u5217\u6309\u7167min-max\u533a\u95f4\u5207\u5206",level:3},{value:"B: \u57fa\u4e8eROWID\uff0c\u6309\u7167(min, max)\u533a\u95f4\u5207\u5206",id:"b-\u57fa\u4e8erowid\u6309\u7167min-max\u533a\u95f4\u5207\u5206",level:3},{value:"C: \u57fa\u4e8eROWID\uff0cScan, split by rows",id:"c-\u57fa\u4e8erowidscan-split-by-rows",level:3},{value:"D: <code>DBMS_PARALLEL_EXECUTE</code>\u5305<code>create_chunks_by_rowid</code>",id:"d-dbms_parallel_execute\u5305create_chunks_by_rowid",level:3},{value:"E: \u57fa\u4e8eROWID\uff0cHash\u5207\u5206",id:"e-\u57fa\u4e8erowidhash\u5207\u5206",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}],m={toc:u},d="wrapper";function O(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)(d,l(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,a.kt)("h3",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,a.kt)("h3",{id:"\u6570\u636e"},"\u6570\u636e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8868\u7ed3\u6784")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-oraclesqlplus",metastring:'title="create-table.sql"',title:'"create-table.sql"'},"CREATE TABLE TPCH.FP_RAW_DATA\n(\n    CP_IDX   number(20, 0)    not null,\n    WAFERID  varchar(10)      not null,\n    BIN      number(10, 0)    not null,\n    SITE     DOUBLE PRECISION,\n    X        DOUBLE PRECISION not null,\n    Y        DOUBLE PRECISION not null,\n    BIN_1    DOUBLE PRECISION not null,\n    BIN_2    DOUBLE PRECISION,\n    BIN_3    DOUBLE PRECISION,\n    -- BIN_4 ~ BIN_39 DOUBLE PRECISION\n    BIN_40   DOUBLE PRECISION,\n    BIN_CODE VARCHAR(10)\n);\n\nCREATE UNIQUE INDEX TPCH.FP_RAW_IDX2 ON TPCH.FP_RAW_DATA (CP_IDX, WAFERID, X, Y);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u51c6\u590720,000\u4e07\uff082\u4ebf\uff09\u884c\u6570\u636e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-oraclesqlplus"},"SELECT TABLE_NAME\n     , NUM_ROWS\n     , AVG_ROW_LEN\n     , ROUND(AVG_ROW_LEN * NUM_ROWS / 1024 / 1024 / 1024, 2) AS GB\nFROM ALL_TABLES\nwhere OWNER = 'TPCH'\n  AND TABLE_NAME = 'FP_RAW_DATA_MARS3'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"TABLE_NAME\n--------------------------------------------------------------------------------\n  NUM_ROWS AVG_ROW_LEN         GB\n---------- ----------- ----------\nFP_RAW_DATA_MARS3\n 200000000      99      18.44\n")),(0,a.kt)("p",null,"\u520616\u4e2a\u5206\u7247\u8fdb\u884c\uff0c\u5e73\u5747\u6bcf\u4e2a\u5206\u7247\u5904\u740612,500,000\uff081250\u4e07\uff09\u884c\u6570\u636e"),(0,a.kt)("p",null,"\u811a\u6ce8",(0,a.kt)("sup",{parentName:"p",id:"fnref-1-784864"},(0,a.kt)("a",{parentName:"sup",href:"#fn-1-784864",className:"footnote-ref"},"1"))),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u9a8c\u8bc1"},"\u6d4b\u8bd5\u9a8c\u8bc1"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u7f16\u53f7"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5207\u5206\u5b57\u6bb5"),(0,a.kt)("th",{parentName:"tr",align:"left"},"\u5207\u5206\u65b9\u6cd5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"A"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CP_IDX"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Range: (Minimum, Maximum)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"B"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ROWID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Range: (Minimum, Maximum)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"C"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ROWID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Range: Scan")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"D"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ROWID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Range: DBMS_PARALLEL_EXECUTE.create_chunks_by_rowid")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"E"),(0,a.kt)("td",{parentName:"tr",align:"left"},"ROWID"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Hash")))),(0,a.kt)("h3",{id:"a-\u57fa\u4e8e\u4e3b\u952e\u7d22\u5f15\u5217\u6309\u7167min-max\u533a\u95f4\u5207\u5206"},"A: \u57fa\u4e8e\u4e3b\u952e/\u7d22\u5f15\u5217\uff0c\u6309\u7167(min, max)\u533a\u95f4\u5207\u5206"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-oraclesqlplus"},"SELECT /*+parallel(4)*/\n    COUNT(1)       AS total\n     , MIN(CP_IDX) AS lower\n     , MAX(CP_IDX) AS upper\nFROM TPCH.FP_RAW_DATA;\n")),(0,a.kt)("h3",{id:"b-\u57fa\u4e8erowid\u6309\u7167min-max\u533a\u95f4\u5207\u5206"},"B: \u57fa\u4e8eROWID\uff0c\u6309\u7167(min, max)\u533a\u95f4\u5207\u5206"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-oraclesqlplus"},"SELECT /*+parallel(4)*/\n    COUNT(1)      AS total\n     , MIN(ROWID) AS lower\n     , MAX(ROWID) AS upper\nFROM TPCH.FP_RAW_DATA;\n")),(0,a.kt)("h3",{id:"c-\u57fa\u4e8erowidscan-split-by-rows"},"C: \u57fa\u4e8eROWID\uff0cScan, split by rows"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-oraclesqlplus"},"SELECT /*+parallel(4)*/ id\nFROM (SELECT id, ROWNUM AS rn\n      FROM (SELECT ROWID AS id\n            FROM TPCH.FP_RAW_DATA\n            ORDER BY ROWID) t) x\nWHERE MOD(rn, 12500000) = 0\n")),(0,a.kt)("h3",{id:"d-dbms_parallel_execute\u5305create_chunks_by_rowid"},"D: ",(0,a.kt)("inlineCode",{parentName:"h3"},"DBMS_PARALLEL_EXECUTE"),"\u5305",(0,a.kt)("inlineCode",{parentName:"h3"},"create_chunks_by_rowid")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-oraclesqlplus"},"BEGIN\n    DBMS_PARALLEL_EXECUTE.create_task(task_name => 'tpch_test');\n    DBMS_PARALLEL_EXECUTE.create_chunks_by_rowid(\n            task_name => 'tpch_test',\n            table_owner => 'TPCH',\n            table_name => 'FP_RAW_DATA',\n            by_row => TRUE,\n            chunk_size => 12500000);\nEND;\n/\n\nSELECT chunk_id, status, start_rowid, end_rowid\nFROM user_parallel_execute_chunks\nWHERE task_name = 'tpch_test'\nORDER BY chunk_id;\n")),(0,a.kt)("h3",{id:"e-\u57fa\u4e8erowidhash\u5207\u5206"},"E: \u57fa\u4e8eROWID\uff0cHash\u5207\u5206"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-oraclesqlplus",metastring:'title="hello.sql"',title:'"hello.sql"'},"SELECT *\nFROM TPCH.FP_RAW_DATA\nWHERE MOD(DBMS_ROWID.ROWID_ROW_NUMBER(TPCH.FP_RAW_DATA.ROWID), 16) = 0\n")),(0,a.kt)("h2",{id:"\u7ed3\u8bba"},"\u7ed3\u8bba"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum\ntempor eros aliquam consequat. Lorem ipsum dolor sit amet")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728\u6211\u4eec\u7684\u573a\u666f\u4e2d\uff0c\u5141\u8bb8",(0,a.kt)("inlineCode",{parentName:"li"},"Partitioned Table"),"?"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5148\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"DBMS_PARALLEL_EXECUTE"),"\u5305\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"create_chunks_by_rowid"),"\u65b9\u6cd5\uff0c\u83b7\u53d6\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"ROWID"),"\u5207\u5206\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u56e0\u4e3a\u7248\u672c\u517c\u5bb9\u6027\u6216\u8005\u6743\u9650\u7b49\u539f\u56e0\u5bfc\u81f41\u5931\u8d25\uff0c\u5219\u5c1d\u8bd5\u91c7\u7528\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u5566\u5566\u5566")),(0,a.kt)("div",{className:"footnotes"},(0,a.kt)("hr",{parentName:"div"}),(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol",id:"fn-1-784864"},(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/en/database/oracle/oracle-database/19/arpls/DBMS_PARALLEL_EXECUTE.html"},"Oracle DBMS_PARALLEL_EXECUTE"),(0,a.kt)("a",{parentName:"li",href:"#fnref-1-784864",className:"footnote-backref"},"\u21a9")))))}O.isMDXComponent=!0}}]);