---
slug: oracle-split-read
title: Oracle大表的并行读取
authors: [ aleafs ]
tags: [ Oracle, ROWID, 并行 ]
---

## 测试环境

### 硬件

### 数据

**表结构**

```oraclesqlplus title="create-table.sql"
CREATE TABLE TPCH.FP_RAW_DATA
(
    CP_IDX   number(20, 0)    not null,
    WAFERID  varchar(10)      not null,
    BIN      number(10, 0)    not null,
    SITE     DOUBLE PRECISION,
    X        DOUBLE PRECISION not null,
    Y        DOUBLE PRECISION not null,
    BIN_1    DOUBLE PRECISION not null,
    BIN_2    DOUBLE PRECISION,
    BIN_3    DOUBLE PRECISION,
    -- BIN_4 ~ BIN_39 DOUBLE PRECISION
    BIN_40   DOUBLE PRECISION,
    BIN_CODE VARCHAR(10)
);

CREATE UNIQUE INDEX TPCH.FP_RAW_IDX2 ON TPCH.FP_RAW_DATA (CP_IDX, WAFERID, X, Y);
```

**准备20,000万（2亿）行数据**

```oraclesqlplus
SELECT TABLE_NAME
     , NUM_ROWS
     , AVG_ROW_LEN
     , ROUND(AVG_ROW_LEN * NUM_ROWS / 1024 / 1024 / 1024, 2) AS GB
FROM ALL_TABLES
where OWNER = 'TPCH'
  AND TABLE_NAME = 'FP_RAW_DATA_MARS3'
```

```shell
TABLE_NAME
--------------------------------------------------------------------------------
  NUM_ROWS AVG_ROW_LEN	       GB
---------- ----------- ----------
FP_RAW_DATA_MARS3
 200000000	    99	    18.44
```
分16个分片进行，平均每个分片处理12,500,000（1250万）行数据

脚注[^1]

## 测试验证

| 编号 | 切分字段   | 切分方法                                                |
|:--:|:-------|:----------------------------------------------------|
| A  | CP_IDX | Range: (Minimum, Maximum)                           |
| B  | ROWID  | Range: (Minimum, Maximum)                           |
| C  | ROWID  | Range: Scan                                         |
| D  | ROWID  | Range: DBMS_PARALLEL_EXECUTE.create_chunks_by_rowid |
| E  | ROWID  | Hash                                                |

### A: 基于主键/索引列，按照(min, max)区间切分

```oraclesqlplus
SELECT /*+parallel(4)*/
    COUNT(1)       AS total
     , MIN(CP_IDX) AS lower
     , MAX(CP_IDX) AS upper
FROM TPCH.FP_RAW_DATA;
```

### B: 基于ROWID，按照(min, max)区间切分

```oraclesqlplus
SELECT /*+parallel(4)*/
    COUNT(1)      AS total
     , MIN(ROWID) AS lower
     , MAX(ROWID) AS upper
FROM TPCH.FP_RAW_DATA;
```

### C: 基于ROWID，Scan, split by rows

```oraclesqlplus
SELECT /*+parallel(4)*/ id
FROM (SELECT id, ROWNUM AS rn
      FROM (SELECT ROWID AS id
            FROM TPCH.FP_RAW_DATA
            ORDER BY ROWID) t) x
WHERE MOD(rn, 12500000) = 0
```

### D: `DBMS_PARALLEL_EXECUTE`包`create_chunks_by_rowid`

```oraclesqlplus
BEGIN
    DBMS_PARALLEL_EXECUTE.create_task(task_name => 'tpch_test');
    DBMS_PARALLEL_EXECUTE.create_chunks_by_rowid(
            task_name => 'tpch_test',
            table_owner => 'TPCH',
            table_name => 'FP_RAW_DATA',
            by_row => TRUE,
            chunk_size => 12500000);
END;
/

SELECT chunk_id, status, start_rowid, end_rowid
FROM user_parallel_execute_chunks
WHERE task_name = 'tpch_test'
ORDER BY chunk_id;
```

### E: 基于ROWID，Hash切分

```oraclesqlplus title="hello.sql"
SELECT *
FROM TPCH.FP_RAW_DATA
WHERE MOD(DBMS_ROWID.ROWID_ROW_NUMBER(TPCH.FP_RAW_DATA.ROWID), 16) = 0
```

## 结论

:::tip
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum
tempor eros aliquam consequat. Lorem ipsum dolor sit amet
:::

1. 在我们的场景中，允许`Partitioned Table`?
2. 优先使用 `DBMS_PARALLEL_EXECUTE`包中的`create_chunks_by_rowid`方法，获取基于`ROWID`切分；
2. 如果因为版本兼容性或者权限等原因导致1失败，则尝试采用；
3. 啦啦啦

[^1]: [Oracle DBMS_PARALLEL_EXECUTE](https://docs.oracle.com/en/database/oracle/oracle-database/19/arpls/DBMS_PARALLEL_EXECUTE.html)
[^2]: [InfoSphere Information Server Partitioned read methods](https://www.ibm.com/docs/en/iis/11.7?topic=reference-partitioned-read-methods) 