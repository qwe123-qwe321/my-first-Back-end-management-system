@echo off
echo 开始更新流程...

REM 检查是否有未提交的更改
git status --porcelain >nul
if %errorlevel% equ 0 (
    echo 检测到未提交的更改，正在提交...
    git add .
    git commit -m "更新: %date% %time%"
) else (
    echo 没有未提交的更改。
)

REM 检查远程仓库配置
echo 检查远程仓库配置...
git remote -v

echo.
echo 如果看到远程仓库配置，请输入以下命令推送更新：
echo git push origin main
echo.
echo 如果没有远程仓库配置，请先配置：
echo git remote add origin 您的GitHub仓库URL
echo git push -u origin main
echo.
pause