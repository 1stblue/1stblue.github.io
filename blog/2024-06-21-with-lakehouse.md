---
slug: bluepipe-with-lakehouse
authors: [ aleafs ]
image: /img/blog-static/cover-bridge.jpeg
tags: [ lakehouse, network, Oracle ]
---

# 构建跨网络数据管道最佳实践

本文以[云器](https://yunqi.tech/) `Lakehouse` 为例，介绍利用`bluepipe`构建跨网络的数据复制最佳实践。

如下图，客户业务系统部署在私有 IDC 中，而`Lakehouse`作为多租户湖仓服务部署在云上。数据需要从`Oracle`同步到`Lakehouse`
，我们推荐将`bluepipe`部署在客户 IDC 中，**推**数据到`Lakehouse`。

![Oracle to Lakehouse](/img/blog-static/cross-network-pipe.png)

## 方案优势

### 开箱即用，10 分钟完成配置

* `bluepipe`几乎可以运行在任何`Linux`系统中，支持`x86`和`arm`芯片；常见的机架式服务器、笔记本电脑，甚至树莓派都可以用来部署；
* 极简的配置过程，默认参数即可达到最佳性能。

### 全、增量一体化，无需运维干预

* 全量同步与增量同步深度协同，几乎无需日常运维操作；
* 高效的数据比对与热修复技术，始终保证数据一致；
* 高度鲁棒的`Schema Evolution`。

### 推数据，而不是暴露端口

* `bluepipe`与您的数据库一起部署在您的内网，无需对外暴露端口；
* 弹性`buffer size`技术，在`吞吐(Throughput)`和`延迟(latency)`之间自动平衡。

## `Oracle`链路的独特优势

`bluepipe`基于`Oracle LogMiner`实现对变更数据的捕捉。与此同时，在以下几个方面做了深度优化：

### 对`DDL`行为的深度兼容

在`LogMiner`默认策略下，当发生`DDL`行为后，相关表上后续的`DML`操作均无法正确解析，从而导致无法正确捕捉到变更。

`bluepipe`维护了字典文件的自动构建策略，保证表结构变更后仍然能捕捉到正确的增量数据。

### 大事务优化

`Oracle Redo Log`中记录了完整的事务(`Transaction`)过程，而业务上通常仅希望拿到`commit`
之后的数据，因此，需要在传输过程中使用`buffer`来暂存尚未`commit`的变更记录。

`bluepipe`基于独特的内存管理技术，单节点上也能轻松应对千万量级的大事务。

### 全面支持名称超过 30 字符的表

`Oracle 12.2`版本之后，对表名、字段名的最大长度支持到了 128 字节。
但因为种种原因，`LogMiner`对于无`OGG LICENSE`的实例，至今仍不支持对包含长名称的表的 DML
解析，详情参考[官方文档](https://docs.oracle.com/en/database/oracle/oracle-database/19/sutil/oracle-logminer-utility.html)。

`bluepipe`基于高效的流批融合技术，全面支持了此种情况下的增量数据捕捉与投递。

### 适配支持`RAC`架构
