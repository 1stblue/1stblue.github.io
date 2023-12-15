---
id: deploy-docker
sidebar_position: 1
---

# 采用 Docker 部署

:::caution
Docker部署仅用于进行产品原型验证，不能用于生产环境。
:::

## 系统要求

### 硬件资源

* x86_64 架构
* CPU: 4核
* 内存: 16G
* 硬盘: 100G

### 操作系统

* CentOS 7.* 及以上

### 软件依赖

* Docker 24.* 及以上

### 网络要求

* 为了能够安装`bluepipe`运行所依赖的三方软件，您的机器应该能够访问互联网。
* 为了达到本地验证的最佳效果，您的机器应该能够连接所需同步的数据源。

## 安装 Docker

### 通过yum安装
#### 增加yum源

```powershell
sudo yum install -y yum-utils
sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
```

#### 安装

```powershell
sudo yum install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

#### 启动

```powershell
sudo systemctl start docker
```
### 其他方式
更多安装详情请查看Docker官方文档
[Install Docker Engine on CentOS](https://docs.docker.com/engine/install/centos/)

## 安装服务

### 解压安装包

在获取到Bluepipe的安装包可以看到两个tar.gz的压缩包，将images.tar.gz导入到docker镜像中，将另一个包解压。

```powershell
# 导入镜像
docker load < images.tar.gz
# 解压docker代码包，压缩包格式是 bluepipe.tar.gz 或者 bluepipe-***.tar.gz
tar -xf bluepipe-***.tar.gz
```

### 启动服务

进入解压后的docker目录，启动docker compose

```powershell
cd docker
docker compose up -d
```

查看正在运行的docker容器

```powershell
docker ps
CONTAINER ID   IMAGE                        COMMAND                   CREATED         STATUS         PORTS                                              NAMES
4edc4025c052   1stblue/openjdk-17:latest    "/docker-entrypoint.…"   5 seconds ago   Up 3 seconds                                                      bluepipe-worker-1
7072bfed3ab8   1stblue/openjdk-17:latest    "/docker-entrypoint.…"   5 seconds ago   Up 3 seconds                                                      bluepipe-openapi-1
da6786e3da14   openresty/openresty:alpine   "/usr/local/openrest…"   5 seconds ago   Up 4 seconds   0.0.0.0:443->443/tcp                               bluepipe-resty-1
```