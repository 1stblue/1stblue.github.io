"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[836],{4641:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"oracle-split-read","metadata":{"permalink":"/en/blog/oracle-split-read","editUrl":"https://github.com/1stblue/1stblue.github.io/tree/main/blog/2023-10-11-oracle-split-read.md","source":"@site/blog/2023-10-11-oracle-split-read.md","title":"Oracle\u5927\u8868\u7684\u5e76\u884c\u8bfb\u53d6","description":"\u6d4b\u8bd5\u73af\u5883","date":"2023-10-11T00:00:00.000Z","formattedDate":"October 11, 2023","tags":[{"label":"Oracle","permalink":"/en/blog/tags/oracle"},{"label":"ROWID","permalink":"/en/blog/tags/rowid"},{"label":"\u5e76\u884c","permalink":"/en/blog/tags/\u5e76\u884c"}],"readingTime":2.05,"hasTruncateMarker":false,"authors":[{"name":"aleafs","title":"\u7a0b\u5e8f\u5458","url":"https://github.com/aleafs","imageURL":"https://avatars.githubusercontent.com/u/535479","key":"aleafs"}],"frontMatter":{"slug":"oracle-split-read","title":"Oracle\u5927\u8868\u7684\u5e76\u884c\u8bfb\u53d6","authors":["aleafs"],"tags":["Oracle","ROWID","\u5e76\u884c"]}},"content":"## \u6d4b\u8bd5\u73af\u5883\\n\\n### \u786c\u4ef6\\n\\n### \u6570\u636e\\n\\n**\u8868\u7ed3\u6784**\\n\\n```oraclesqlplus title=\\"create-table.sql\\"\\nCREATE TABLE TPCH.FP_RAW_DATA\\n(\\n    CP_IDX   number(20, 0)    not null,\\n    WAFERID  varchar(10)      not null,\\n    BIN      number(10, 0)    not null,\\n    SITE     DOUBLE PRECISION,\\n    X        DOUBLE PRECISION not null,\\n    Y        DOUBLE PRECISION not null,\\n    BIN_1    DOUBLE PRECISION not null,\\n    BIN_2    DOUBLE PRECISION,\\n    BIN_3    DOUBLE PRECISION,\\n    -- BIN_4 ~ BIN_39 DOUBLE PRECISION\\n    BIN_40   DOUBLE PRECISION,\\n    BIN_CODE VARCHAR(10)\\n);\\n\\nCREATE UNIQUE INDEX TPCH.FP_RAW_IDX2 ON TPCH.FP_RAW_DATA (CP_IDX, WAFERID, X, Y);\\n```\\n\\n**\u51c6\u590710,000\u4e07\uff081\u4ebf\uff09\u884c\u6570\u636e**\\n\\n\u811a\u6ce8[^1]\\n\\n## \u6d4b\u8bd5\u9a8c\u8bc1\\n\\n| \u7f16\u53f7 | \u5207\u5206\u5b57\u6bb5   | \u5207\u5206\u65b9\u6cd5                                                |\\n|:--:|:-------|:----------------------------------------------------|\\n| A  | CP_IDX | Range: (Minimum, Maximum)                           |\\n| B  | ROWID  | Range: (Minimum, Maximum)                           |\\n| C  | ROWID  | Range: Scan                                         |\\n| D  | ROWID  | Range: DBMS_PARALLEL_EXECUTE.create_chunks_by_rowid |\\n| E  | ROWID  | Hash                                                |\\n\\n### A: \u57fa\u4e8e\u4e3b\u952e/\u7d22\u5f15\u5217\uff0c\u6309\u7167(min, max)\u533a\u95f4\u5207\u5206\\n\\n```oraclesqlplus\\nSELECT /*+parallel(4)*/\\n    COUNT(1)       AS total\\n     , MIN(CP_IDX) AS lower\\n     , MAX(CP_IDX) AS upper\\nFROM TPCH.FP_RAW_DATA;\\n```\\n\\n### B: \u57fa\u4e8eROWID\uff0c\u6309\u7167(min, max)\u533a\u95f4\u5207\u5206\\n\\n```oraclesqlplus\\nSELECT /*+parallel(4)*/\\n    COUNT(1)      AS total\\n     , MIN(ROWID) AS lower\\n     , MAX(ROWID) AS upper\\nFROM TPCH.FP_RAW_DATA;\\n```\\n\\n### C: \u57fa\u4e8eROWID\uff0cScan, split by rows\\n\\n```oraclesqlplus\\nSELECT /*+parallel(4)*/ id\\nFROM (SELECT id, ROWNUM AS rn\\n      FROM (SELECT ROWID AS id\\n            FROM TPCH.FP_RAW_DATA\\n            ORDER BY ROWID) t) x\\nWHERE MOD(rn, 2000000) = 0\\n```\\n\\n### D: `DBMS_PARALLEL_EXECUTE`\u5305`create_chunks_by_rowid`\\n\\n```oraclesqlplus\\nBEGIN\\n    DBMS_PARALLEL_EXECUTE.create_task(task_name => \'tpch_test\');\\n    DBMS_PARALLEL_EXECUTE.create_chunks_by_rowid(\\n            task_name => \'tpch_test\',\\n            table_owner => \'TPCH\',\\n            table_name => \'FP_RAW_DATA\',\\n            by_row => TRUE,\\n            chunk_size => 2000000);\\nEND;\\n/\\n\\nSELECT chunk_id, status, start_rowid, end_rowid\\nFROM user_parallel_execute_chunks\\nWHERE task_name = \'tpch_test\'\\nORDER BY chunk_id;\\n```\\n\\n### E: \u57fa\u4e8eROWID\uff0cHash\u5207\u5206\\n\\n```oraclesqlplus title=\\"hello.sql\\"\\nSELECT *\\nFROM TPCH.FP_RAW_DATA\\nWHERE MOD(DBMS_ROWID.ROWID_ROW_NUMBER(TPCH.FP_RAW_DATA.ROWID), 4) = 0\\n```\\n\\n## \u7ed3\u8bba\\n\\n:::tip\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum\\ntempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n:::\\n\\n1. \u5728\u6211\u4eec\u7684\u573a\u666f\u4e2d\uff0c\u5141\u8bb8`Partitioned Table`?\\n2. \u4f18\u5148\u4f7f\u7528 `DBMS_PARALLEL_EXECUTE`\u5305\u4e2d\u7684`create_chunks_by_rowid`\u65b9\u6cd5\uff0c\u83b7\u53d6\u57fa\u4e8e`ROWID`\u5207\u5206\uff1b\\n2. \u5982\u679c\u56e0\u4e3a\u7248\u672c\u517c\u5bb9\u6027\u6216\u8005\u6743\u9650\u7b49\u539f\u56e0\u5bfc\u81f41\u5931\u8d25\uff0c\u5219\u5c1d\u8bd5\u91c7\u7528\uff1b\\n3. \u5566\u5566\u5566\\n\\n[^1]: [Oracle DBMS_PARALLEL_EXECUTE](https://docs.oracle.com/en/database/oracle/oracle-database/19/arpls/DBMS_PARALLEL_EXECUTE.html)\\n[^2]: [InfoSphere Information Server Partitioned read methods](https://www.ibm.com/docs/en/iis/11.7?topic=reference-partitioned-read-methods)"}]}')}}]);