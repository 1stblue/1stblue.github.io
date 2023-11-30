---
id: sample-connector
title: 示例连接器
sidebar_label: 示例连接器
sidebar_position: 1
---

## 介绍

## 前置依赖

### 版本要求

- 5.7.\*
- 8.\*.\*

查看当前 MySQL Server 版本的 SQL 语句为：

```mysql title="check-mysql-version.sql"
SELECT VERSION();
```

:::caution
未列在上述清单里的版本，程序运行时不一定报错，但我们无法保证其每项功能都能正确工作。
:::

### 系统参数
| Variable Name | Value | Required |
|:--------------|:------|:---------|
| v1            | OFF   | Yes      |
| v2            | OFF   | No       |

### 服务状态

配置了主备复制的MySQL实例，如果从备库读取数据，其延迟不应该超过`10`分钟.

查看主备复制延迟的命令为：

```mysql title="check-replica-delay.sql"
SHOW REPLICA STATUS;
```

:::tip
威尔法我发
:::

### 账号权限

## 连接配置

## 类型映射

## 限制与约束

## 性能基准

## 常见问题
