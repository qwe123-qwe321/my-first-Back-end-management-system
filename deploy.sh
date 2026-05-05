#!/bin/bash

# 部署脚本
echo "开始部署流程..."

# 检查是否有未提交的更改
if [[ -n $(git status --porcelain) ]]; then
    echo "检测到未提交的更改，正在提交..."
    git add .
    git commit -m "自动提交: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# 推送到GitHub
echo "推送到GitHub..."
git push origin main

echo "部署流程完成！GitHub Actions将自动触发Vercel部署。"