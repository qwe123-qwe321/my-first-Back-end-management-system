@echo off
echo 开始部署流程...

REM 检查是否有未提交的更改
git status --porcelain >nul
if %errorlevel% equ 0 (
    echo 检测到未提交的更改，正在提交...
    git add .
    git commit -m "自动提交: %date% %time%"
) else (
    echo 没有未提交的更改。
)

REM 推送到GitHub
echo 推送到GitHub...
git push origin main

echo 部署流程完成！GitHub Actions将自动触发Vercel部署。
pause