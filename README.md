# 农业公司网站模板

这是一个通用型农业公司官方网站模板，可用于展示公司业务、产品、合作案例等信息。

## 项目概述

本模板基于 Next.js 构建，采用现代化的前端技术栈，适用于各类农业、种植、农产品销售等企业的官网建设。您可以快速将其自定义为符合您公司品牌和需求的企业网站。

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

- **框架**: Next.js
- **语言**: React + TypeScript
- **样式**: Tailwind CSS
- **UI 组件**: shadcn/ui (New York 风格)
- **动画**: tw-animate-css
- **轮播图**: embla-carousel-react + embla-carousel-autoplay
- **图标**: lucide-react
- **工具库**: class-variance-authority, clsx, tailwind-merge
- **代码规范**: ESLint, Prettier

## 目录结构

```
├── app/                          # Next.js App Router 页面
│   ├── about/                    # 关于我们页面
│   ├── cases/                    # 合作案例页面
│   ├── contact/                  # 联系我们页面
│   ├── cooperation/              # 合作模式页面
│   ├── news/                     # 新闻动态页面
│   ├── orchard/                  # 果园展示页面
│   ├── products/                 # 产品中心页面
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
│   │   │   └── ...
│   │   └── navbar/               # 导航栏组件
│   └── ui/                       # shadcn/ui 基础组件
├── config/                       # 配置文件
│   ├── home.ts                   # 首页数据配置
│   ├── products.ts               # 产品数据配置
│   └── site.ts                   # 站点配置
├── lib/                          # 工具函数
│   └── utils.ts
├── providers/                    # React Context Providers
├── public/                       # 静态资源
├── styles/                       # 样式文件
├── types/                        # TypeScript 类型定义
├── components.json               # shadcn/ui 配置
├── next.config.mjs               # Next.js 配置
├── postcss.config.mjs            # PostCSS 配置（含 Tailwind CSS）
├── tsconfig.json                 # TypeScript 配置
├── package.json
└── README.md
```

## 快速自定义指南

### 1. 更新公司信息

打开 `config/site.ts`，修改以下字段：

```typescript
export const siteConfig = {
  name: "您的公司名称",           // 公司名称
  url: "https://your-domain.com",  // 网站域名
  description: "公司描述...",      // 公司简短描述
  contact: {
    address: "公司地址",           // 公司地址
    phone: "联系电话",             // 联系电话
    email: "邮箱地址",             // 电子邮箱
    wechat: "微信号",             // 微信号
  },
  stats: {
    plantingArea: "1200",          // 种植面积（亩）
    annualOutput: "300",           // 年产量（吨）
    partnerCount: "100",           // 合作伙伴数量
    years: "8",                    // 从业年数
  },
};
```

### 2. 更新Logo

替换 `public/icon.png` 为您的公司Logo图片，并在 `components/logos/taihe.tsx` 中调整显示配置。

### 3. 更新首页数据

修改 `config/home.ts` 可调整首页展示内容：
- `bannerData` - 轮播图数据
- `businessData` - 业务介绍数据
- `productsData` - 产品展示数据
- `advantagesData` - 核心优势数据
- `casesData` - 合作案例数据
- `newsData` - 新闻动态数据

### 4. 更新产品数据

修改 `config/products.ts` 可调整产品详情数据。

### 5. 更新各页面内容

各页面内容位于 `app/` 目录下的对应文件中，直接修改即可：
- `app/about/page.tsx` - 关于我们页面
- `app/contact/page.tsx` - 联系我们页面
- `app/orchard/page.tsx` - 果园展示页面
- `app/news/page.tsx` - 新闻动态页面
- 等等...

### 6. 更新品牌配色

Tailwind CSS 使用 CSS 变量配置主题，在 `app/globals.css` 中修改 CSS 变量即可调整网站整体配色。

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
  name: "您的公司名称",
  url: "https://your-domain.com",
  description: "公司描述...",
  contact: {
    address: "公司地址",
    phone: "联系电话",
    email: "邮箱地址",
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
- 产品数据：修改 `config/products.ts`
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

Tailwind CSS 使用 CSS 变量配置主题，在 `app/globals.css` 中修改 CSS 变量即可。

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
