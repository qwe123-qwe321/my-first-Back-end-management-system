@echo off
echo ========================================
echo 一键更新脚本
echo ========================================

REM 检查是否有未提交的更改
echo 检查未提交的更改...
git status --porcelain >nul
if %errorlevel% equ 0 (
    echo 检测到未提交的更改，正在提交...
    git add .
    git commit -m "更新: %date% %time%"
    echo ✓ 更改已提交
) else (
    echo ✓ 没有未提交的更改
)

REM 推送更新
echo.
echo 正在推送到GitHub...
git push origin main

if %errorlevel% equ 0 (
    echo ✓ 推送成功！
    echo.
    echo ========================================
    echo 更新完成！
    echo ========================================
    echo 1. GitHub仓库已更新
    echo 2. Vercel将自动开始部署
    echo 3. 请访问Vercel控制台查看部署状态
    echo ========================================
) else (
    echo ✗ 推送失败，请检查错误信息
)

echo.
pause