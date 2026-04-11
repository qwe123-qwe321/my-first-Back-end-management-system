# 王者荣耀后台管理系统

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.2-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Ant Design](https://img.shields.io/badge/Ant_Design-6.3-0170FE?logo=ant-design&logoColor=white)](https://ant.design/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-black?logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![React Query](https://img.shields.io/badge/React_Query-5-FAB040?logo=react-query&logoColor=white)](https://tanstack.com/query)
[![Zustand](https://img.shields.io/badge/Zustand-5-7A20CB?logo=react&logoColor=white)](https://github.com/pmndrs/zustand)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![MSW](https://img.shields.io/badge/MSW-2-FF6A33?logo=msw&logoColor=white)](https://mswjs.io/)

一个基于 React 19 + TypeScript + Vite 构建的现代化王者荣耀主题后台管理系统，包含完整的前端工程化实践。

## 🚀 功能亮点

- **完整的主题切换** - 支持亮色/暗黑模式，使用 Tailwind CSS 原生 dark: 类
- **浏览器式标签页** - 支持标签页打开、切换、关闭、固定首页标签
- **用户管理模块** - 基于 react-hook-form + zod 的完整表单验证
- **高级数据表格** - 使用 @tanstack/react-table 实现排序、搜索、分页
- **API 模拟** - MSW 完整的 REST API 模拟，支持 CRUD 操作
- **状态管理** - Zustand 统一管理用户、Token、主题状态
- **权限路由** - 路由守卫 + 组件懒加载
- **完整错误页面** - 403/404/500 错误页面设计

## 🛠️ 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | 19.x | 用户界面库 |
| TypeScript | 5.9.x | 类型安全 |
| Vite | 8.0.x | 构建工具 |
| Tailwind CSS | 4.2.x | 实用优先的 CSS 框架 |
| Ant Design | 6.3.x | 企业级 UI 组件库 |
| shadcn/ui | - | 无样式组件库 |
| React Query | 5.x | 服务端状态管理 |
| Zustand | 5.x | 轻量级状态管理 |
| React Router | 7.x | 路由管理 |
| React Hook Form | 7.x | 表单管理 |
| Zod | 4.x | 数据验证 |
| React Table | 8.x | 无头表格 |
| MSW | 2.x | API 模拟 |

## 📦 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 📸 项目截图

| 首页 | 用户管理 |
|------|----------|
| ![首页](./screenshots/dashboard.png) | ![用户管理](./screenshots/users.png) |

| 亮色主题 | 暗黑主题 |
|----------|----------|
| ![亮色](./screenshots/light.png) | ![暗黑](./screenshots/dark.png) |

## 🌐 部署链接

- [Vercel 部署](https://your-deployment-url.vercel.app)
- [GitHub Pages](https://your-username.github.io/your-repo)

## 📝 项目结构

```
src/
├── components/          # 组件
│   ├── ui/            # shadcn/ui 组件
│   ├── layout/        # 布局组件
│   └── common/        # 通用组件
├── pages/            # 页面
├── store/            # Zustand 状态管理
├── router/           # 路由配置
├── mocks/            # MSW 模拟数据
├── schemas/          # Zod 验证模式
├── lib/              # 工具函数
└── context/          # React Context
```

## 📄 License

MIT

## 👨‍💻 作者

[Your Name](https://github.com/your-username)
