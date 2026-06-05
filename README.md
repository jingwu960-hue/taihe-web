# 态禾农业官网

湖北态禾农业股份有限公司官方网站，展示公司业务、产品、合作案例等信息。

## 项目概述

态禾农业是一家专业从事桃树、梨树规模化种植及鲜果销售的现代化农业企业。本网站基于 Next.js 16 构建，采用现代化的前端技术栈，为用户提供美观、响应式的浏览体验。

## 核心功能

### 页面功能
- **首页** - 轮播图展示、核心数据统计、业务介绍、产品展示、优势特点、合作案例、新闻动态
- **产品中心** - 产品分类展示、筛选功能、详细产品介绍
- **合作案例** - 客户案例展示、分类筛选
- **关于我们** - 企业简介、发展历程、企业文化、资质荣誉
- **联系我们** - 在线留言表单、联系信息展示
- **果园展示** - 种植基地展示
- **合作模式** - 合作方式介绍
- **新闻动态** - 企业新闻展示

### 技术特性
- 响应式设计，支持多设备访问
- 流畅的用户界面和动画效果
- SEO 优化配置
- 完整的 TypeScript 类型支持

## 技术栈

- **框架**: Next.js 16.2.4
- **语言**: React 19.2.5 + TypeScript 5.9.3
- **样式**: Tailwind CSS 4.2.1
- **UI 组件**: shadcn/ui (New York 风格)
- **动画**: tw-animate-css
- **轮播图**: embla-carousel-react + embla-carousel-autoplay
- **图标**: lucide-react
- **工具库**: class-variance-authority, clsx, tailwind-merge
- **代码规范**: ESLint, Prettier

## 目录结构

```
taihe-web/
├── app/                          # Next.js App Router 页面
│   ├── about/                    # 关于我们页面
│   ├── cases/                    # 合作案例页面
│   ├── contact/                  # 联系我们页面
│   ├── cooperation/              # 合作模式页面
│   ├── news/                     # 新闻动态页面
│   ├── orchard/                  # 果园展示页面
│   ├── products/                 # 产品中心页面
│   │   ├── peach/                # 桃子产品详情
│   │   └── pear/                 # 梨子产品详情
│   ├── technology/               # 技术介绍页面
│   ├── layout.tsx                # 根布局
│   ├── page.tsx                  # 首页
│   ├── error.tsx                 # 错误页面
│   └── globals.css               # 全局样式
├── components/                   # React 组件
│   ├── logos/                    # Logo 组件
│   ├── sections/                 # 页面区块组件
│   │   ├── footer/               # 页脚组件
│   │   ├── home/                 # 首页区块
│   │   │   ├── carousel/         # 轮播图组件
│   │   │   ├── advantages-section.tsx
│   │   │   ├── business-section.tsx
│   │   │   ├── cases-section.tsx
│   │   │   ├── cta-section.tsx
│   │   │   ├── news-section.tsx
│   │   │   ├── products-section.tsx
│   │   │   └── stats-section.tsx
│   │   └── navbar/               # 导航栏组件
│   └── ui/                       # shadcn/ui 基础组件
│       ├── button.tsx
│       ├── card.tsx
│       ├── counter.tsx
│       ├── floating-contact.tsx
│       ├── footer.tsx
│       ├── layout-lines.tsx
│       ├── navbar.tsx
│       ├── navigation.tsx
│       └── sheet.tsx
├── config/                       # 配置文件
│   ├── home.ts                   # 首页数据配置
│   └── site.ts                   # 站点配置
├── hooks/                        # 自定义 Hooks
│   ├── use-debounce.ts
│   ├── use-intersection-observer.ts
│   ├── use-local-storage.ts
│   ├── use-media-query.ts
│   └── use-scroll.ts
├── lib/                          # 工具函数
│   ├── fonts.ts
│   └── utils.ts
├── providers/                    # React Context Providers
├── public/                       # 静态资源
├── styles/                       # 样式文件
│   └── utils.css
├── types/                        # TypeScript 类型定义
│   ├── advantage.ts
│   ├── banner.ts
│   ├── business.ts
│   ├── case.ts
│   ├── index.ts
│   ├── news.ts
│   ├── product.ts
│   └── site.ts
├── components.json               # shadcn/ui 配置
├── next.config.mjs               # Next.js 配置
├── postcss.config.mjs            # PostCSS 配置（含 Tailwind CSS）
├── tsconfig.json                 # TypeScript 配置
├── package.json
└── README.md
```

## 安装与配置

### 前置要求
- Node.js 18+ 
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 开发模式启动

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站

### 生产构建

```bash
npm run build
```

### 启动生产服务

```bash
npm start
```

### 代码检查

```bash
npm run lint
```

## 配置说明

### 站点配置

修改 `config/site.ts` 可调整站点基本信息：

```typescript
export const siteConfig = {
  name: "态禾农业",
  url: "https://taihe-agriculture.com",
  description: "湖北态禾农业股份有限公司从事桃树、梨树规模化种植及鲜果销售...",
  contact: {
    address: "湖北省孝感市大悟县城关镇中心村",
    phone: "13339842020",
    email: "contact@taihe-agriculture.com",
  },
  // ...
};
```

### 首页数据配置

修改 `config/home.ts` 可调整首页展示的轮播图、产品、案例等数据。

### 图片配置

在 `next.config.mjs` 中配置允许的远程图片域名：

```javascript
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};
```

## 使用说明

### 页面路由

项目使用 Next.js App Router，所有页面位于 `app/` 目录下：

| 路径 | 页面 |
|------|------|
| `/` | 首页 |
| `/about` | 关于我们 |
| `/products` | 产品中心 |
| `/products/peach` | 桃子产品详情 |
| `/products/pear` | 梨子产品详情 |
| `/cases` | 合作案例 |
| `/contact` | 联系我们 |
| `/cooperation` | 合作模式 |
| `/news` | 新闻动态 |
| `/orchard` | 果园展示 |
| `/technology` | 技术介绍 |

### 组件使用

项目使用 `shadcn/ui` 组件库，可通过 `npx shadcn-ui@latest add [component]` 添加新组件。

### 数据修改

- 首页数据：修改 `config/home.ts`
- 站点信息：修改 `config/site.ts`
- 页面内容：直接修改对应页面的 `.tsx` 文件

## 部署

### Vercel 部署

项目基于 Next.js，最适合部署到 Vercel：

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 在 Vercel 中导入项目
3. 配置环境变量（如需要）
4. 点击部署

### 其他平台部署

可参考 Next.js 官方文档进行部署：
- [Docker 部署](https://nextjs.org/docs/app/building-your-application/deploying#docker)
- [Node.js 服务器部署](https://nextjs.org/docs/app/building-your-application/deploying#self-hosting)

## 常见问题

### 如何修改网站配色？

Tailwind CSS 4 使用 CSS 变量配置主题，在 `app/globals.css` 中修改 CSS 变量即可。

### 如何添加新页面？

在 `app/` 目录下创建新的文件夹和 `page.tsx` 文件，Next.js 会自动生成路由。

### 如何添加新的 shadcn/ui 组件？

```bash
npx shadcn-ui@latest add [component-name]
```

## 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 详见 `LICENSE.md` 文件

## 联系方式

- 公司地址：湖北省孝感市大悟县城关镇中心村
- 联系电话：13339842020
- 电子邮箱：contact@taihe-agriculture.com
