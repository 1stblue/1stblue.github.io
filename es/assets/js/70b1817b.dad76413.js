"use strict";(self.webpackChunk_1stblue_github_io=self.webpackChunk_1stblue_github_io||[]).push([[9759],{1993:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=l(4848),s=l(8453);const r={slug:"oracle-split-read20221021",title:"Oracle\u5927\u8868\u7684\u5e76\u884c\u8bfb\u53d620221021",authors:["aleafs"],image:"/img/oracle.png",tags:["Oracle","ROWID","\u5e76\u884c"]},i=void 0,a={permalink:"/es/blog/oracle-split-read20221021",editUrl:"https://github.com/1stblue/1stblue.github.io/tree/deploy-bluepipe-landing-page/blog/2022/2022-10-21-oracle-split-read copy 6.md",source:"@site/blog/2022/2022-10-21-oracle-split-read copy 6.md",title:"Oracle\u5927\u8868\u7684\u5e76\u884c\u8bfb\u53d620221021",description:"\u6d4b\u8bd5\u73af\u5883",date:"2022-10-21T00:00:00.000Z",tags:[{inline:!0,label:"Oracle",permalink:"/es/blog/tags/oracle"},{inline:!0,label:"ROWID",permalink:"/es/blog/tags/rowid"},{inline:!0,label:"\u5e76\u884c",permalink:"/es/blog/tags/\u5e76\u884c"}],readingTime:2.375,hasTruncateMarker:!1,authors:[{name:"aleafs",title:"\u5927\u9f84\u7a0b\u5e8f\u5458",url:"https://github.com/aleafs",imageURL:"https://avatars.githubusercontent.com/u/535479",key:"aleafs",page:null}],frontMatter:{slug:"oracle-split-read20221021",title:"Oracle\u5927\u8868\u7684\u5e76\u884c\u8bfb\u53d620221021",authors:["aleafs"],image:"/img/oracle.png",tags:["Oracle","ROWID","\u5e76\u884c"]},unlisted:!1,prevItem:{title:"Release Notes (v0.9.5)",permalink:"/es/blog/v095-release-notes"},nextItem:{title:"Oracle\u5927\u8868\u7684\u5e76\u884c\u8bfb\u53d620221015",permalink:"/es/blog/oracle-split-read20221015"}},c={authorsImageUrls:[void 0]},d=[{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",level:2},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:3},{value:"\u6570\u636e",id:"\u6570\u636e",level:3},{value:"\u6d4b\u8bd5\u9a8c\u8bc1",id:"\u6d4b\u8bd5\u9a8c\u8bc1",level:2},{value:"A: \u57fa\u4e8e\u4e3b\u952e/\u7d22\u5f15\u5217\uff0c\u6309\u7167(min, max)\u533a\u95f4\u5207\u5206",id:"a-\u57fa\u4e8e\u4e3b\u952e\u7d22\u5f15\u5217\u6309\u7167min-max\u533a\u95f4\u5207\u5206",level:3},{value:"B: \u57fa\u4e8eROWID\uff0c\u6309\u7167(min, max)\u533a\u95f4\u5207\u5206",id:"b-\u57fa\u4e8erowid\u6309\u7167min-max\u533a\u95f4\u5207\u5206",level:3},{value:"C: \u57fa\u4e8eROWID\uff0cScan, split by rows",id:"c-\u57fa\u4e8erowidscan-split-by-rows",level:3},{value:"D: <code>DBMS_PARALLEL_EXECUTE</code>\u5305<code>create_chunks_by_rowid</code>",id:"d-dbms_parallel_execute\u5305create_chunks_by_rowid",level:3},{value:"E: \u57fa\u4e8eROWID\uff0cHash\u5207\u5206",id:"e-\u57fa\u4e8erowidhash\u5207\u5206",level:3},{value:"\u7ed3\u8bba",id:"\u7ed3\u8bba",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u6d4b\u8bd5\u73af\u5883",children:"\u6d4b\u8bd5\u73af\u5883"}),"\n",(0,t.jsx)(n.h3,{id:"\u786c\u4ef6",children:"\u786c\u4ef6"}),"\n",(0,t.jsx)(n.h3,{id:"\u6570\u636e",children:"\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u8868\u7ed3\u6784"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-oraclesqlplus",metastring:'title="create-table.sql"',children:"CREATE TABLE TPCH.FP_RAW_DATA\n(\n    CP_IDX   number(20, 0)    not null,\n    WAFERID  varchar(10)      not null,\n    BIN      number(10, 0)    not null,\n    SITE     DOUBLE PRECISION,\n    X        DOUBLE PRECISION not null,\n    Y        DOUBLE PRECISION not null,\n    BIN_1    DOUBLE PRECISION not null,\n    BIN_2    DOUBLE PRECISION,\n    BIN_3    DOUBLE PRECISION,\n    -- BIN_4 ~ BIN_39 DOUBLE PRECISION\n    BIN_40   DOUBLE PRECISION,\n    BIN_CODE VARCHAR(10)\n);\n\nCREATE UNIQUE INDEX TPCH.FP_RAW_IDX2 ON TPCH.FP_RAW_DATA (CP_IDX, WAFERID, X, Y);\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"\u51c6\u590720,000\u4e07\uff082\u4ebf\uff09\u884c\u6570\u636e"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-oraclesqlplus",children:"SELECT TABLE_NAME\n     , NUM_ROWS\n     , AVG_ROW_LEN\n     , ROUND(AVG_ROW_LEN * NUM_ROWS / 1024 / 1024 / 1024, 2) AS GB\nFROM ALL_TABLES\nwhere OWNER = 'TPCH'\n  AND TABLE_NAME = 'FP_RAW_DATA_MARS3'\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"TABLE_NAME\n--------------------------------------------------------------------------------\n  NUM_ROWS AVG_ROW_LEN\t       GB\n---------- ----------- ----------\nFP_RAW_DATA_MARS3\n 200000000\t    99\t    18.44\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u520616\u4e2a\u5206\u7247\u8fdb\u884c\uff0c\u5e73\u5747\u6bcf\u4e2a\u5206\u7247\u5904\u740612,500,000\uff081250\u4e07\uff09\u884c\u6570\u636e"}),"\n",(0,t.jsxs)(n.p,{children:["\u811a\u6ce8",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-1-240950",id:"user-content-fnref-1-240950","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u6d4b\u8bd5\u9a8c\u8bc1",children:"\u6d4b\u8bd5\u9a8c\u8bc1"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"\u7f16\u53f7"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u5207\u5206\u5b57\u6bb5"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"\u5207\u5206\u65b9\u6cd5"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"A"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"CP_IDX"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Range: (Minimum, Maximum)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"B"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"ROWID"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Range: (Minimum, Maximum)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"C"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"ROWID"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Range: Scan"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"D"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"ROWID"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Range: DBMS_PARALLEL_EXECUTE.create_chunks_by_rowid"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"E"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"ROWID"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"Hash"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"a-\u57fa\u4e8e\u4e3b\u952e\u7d22\u5f15\u5217\u6309\u7167min-max\u533a\u95f4\u5207\u5206",children:"A: \u57fa\u4e8e\u4e3b\u952e/\u7d22\u5f15\u5217\uff0c\u6309\u7167(min, max)\u533a\u95f4\u5207\u5206"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-oraclesqlplus",children:"SELECT /*+parallel(4)*/\n    COUNT(1)       AS total\n     , MIN(CP_IDX) AS lower\n     , MAX(CP_IDX) AS upper\nFROM TPCH.FP_RAW_DATA;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"b-\u57fa\u4e8erowid\u6309\u7167min-max\u533a\u95f4\u5207\u5206",children:"B: \u57fa\u4e8eROWID\uff0c\u6309\u7167(min, max)\u533a\u95f4\u5207\u5206"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-oraclesqlplus",children:"SELECT /*+parallel(4)*/\n    COUNT(1)      AS total\n     , MIN(ROWID) AS lower\n     , MAX(ROWID) AS upper\nFROM TPCH.FP_RAW_DATA;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"c-\u57fa\u4e8erowidscan-split-by-rows",children:"C: \u57fa\u4e8eROWID\uff0cScan, split by rows"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-oraclesqlplus",children:"SELECT /*+parallel(4)*/ id\nFROM (SELECT id, ROWNUM AS rn\n      FROM (SELECT ROWID AS id\n            FROM TPCH.FP_RAW_DATA\n            ORDER BY ROWID) t) x\nWHERE MOD(rn, 12500000) = 0\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"d-dbms_parallel_execute\u5305create_chunks_by_rowid",children:["D: ",(0,t.jsx)(n.code,{children:"DBMS_PARALLEL_EXECUTE"}),"\u5305",(0,t.jsx)(n.code,{children:"create_chunks_by_rowid"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-oraclesqlplus",children:"BEGIN\n    DBMS_PARALLEL_EXECUTE.create_task(task_name => 'tpch_test');\n    DBMS_PARALLEL_EXECUTE.create_chunks_by_rowid(\n            task_name => 'tpch_test',\n            table_owner => 'TPCH',\n            table_name => 'FP_RAW_DATA',\n            by_row => TRUE,\n            chunk_size => 12500000);\nEND;\n/\n\nSELECT chunk_id, status, start_rowid, end_rowid\nFROM user_parallel_execute_chunks\nWHERE task_name = 'tpch_test'\nORDER BY chunk_id;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"e-\u57fa\u4e8erowidhash\u5207\u5206",children:"E: \u57fa\u4e8eROWID\uff0cHash\u5207\u5206"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-oraclesqlplus",metastring:'title="hello.sql"',children:"SELECT *\nFROM TPCH.FP_RAW_DATA\nWHERE MOD(DBMS_ROWID.ROWID_ROW_NUMBER(TPCH.FP_RAW_DATA.ROWID), 16) = 0\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7ed3\u8bba",children:"\u7ed3\u8bba"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum\ntempor eros aliquam consequat. Lorem ipsum dolor sit amet"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728\u6211\u4eec\u7684\u573a\u666f\u4e2d\uff0c\u5141\u8bb8",(0,t.jsx)(n.code,{children:"Partitioned Table"}),"?"]}),"\n",(0,t.jsxs)(n.li,{children:["\u4f18\u5148\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"DBMS_PARALLEL_EXECUTE"}),"\u5305\u4e2d\u7684",(0,t.jsx)(n.code,{children:"create_chunks_by_rowid"}),"\u65b9\u6cd5\uff0c\u83b7\u53d6\u57fa\u4e8e",(0,t.jsx)(n.code,{children:"ROWID"}),"\u5207\u5206\uff1b"]}),"\n",(0,t.jsx)(n.li,{children:"\u5982\u679c\u56e0\u4e3a\u7248\u672c\u517c\u5bb9\u6027\u6216\u8005\u6743\u9650\u7b49\u539f\u56e0\u5bfc\u81f41\u5931\u8d25\uff0c\u5219\u5c1d\u8bd5\u91c7\u7528\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u5566\u5566\u5566"}),"\n"]}),"\n","\n",(0,t.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{id:"user-content-fn-1-240950",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://docs.oracle.com/en/database/oracle/oracle-database/19/arpls/DBMS_PARALLEL_EXECUTE.html",children:"Oracle DBMS_PARALLEL_EXECUTE"})," ",(0,t.jsx)(n.a,{href:"#user-content-fnref-1-240950","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>i,x:()=>a});var t=l(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);