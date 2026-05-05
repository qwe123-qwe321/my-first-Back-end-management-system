# 自动部署到Vercel指南

## 概述

本项目已配置自动部署到Vercel的流程。当代码推送到GitHub仓库的main分支时，GitHub Actions会自动构建项目并部署到Vercel。

## 配置步骤

### 1. GitHub仓库设置

1. 在GitHub上创建新的仓库
2. 将本地仓库连接到GitHub：
   ```bash
   git remote add origin https://github.com/你的用户名/仓库名.git
   git branch -M main
   git push -u origin main
   ```

### 2. Vercel配置

1. 登录 [Vercel](https://vercel.com)
2. 导入GitHub仓库
3. 配置部署设置（使用默认设置即可）

### 3. GitHub Secrets配置

在GitHub仓库的 Settings > Secrets and variables > Actions 中添加以下secrets：

- `VERCEL_TOKEN`: 从Vercel账户设置中获取
- `VERCEL_ORG_ID`: 从Vercel项目设置中获取
- `VERCEL_PROJECT_ID`: 从Vercel项目设置中获取

## 使用方法

### 手动部署

运行部署脚本：

```bash
# Windows用户
deploy.bat

# Linux/Mac用户
chmod +x deploy.sh
./deploy.sh
```

### 自动部署

每次推送到main分支时，GitHub Actions会自动：

1. 检查代码
2. 安装依赖
3. 构建项目
4. 部署到Vercel

## 工作流程文件

`.github/workflows/deploy-to-vercel.yml` 包含完整的部署配置。

## 验证部署

1. 推送到GitHub后，查看Actions标签页
2. 等待工作流完成
3. 访问Vercel提供的部署URL

## 故障排除

1. **构建失败**: 检查本地 `npm run build` 是否成功
2. **部署失败**: 验证GitHub Secrets配置
3. **权限问题**: 确保GitHub Actions有仓库写入权限
