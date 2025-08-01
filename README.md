# 个人网站 - 国际化版本

这是一个使用 Next.js 15、React 19、TypeScript、Material-UI 和 Tailwind CSS 构建的个人网站项目，支持中英文国际化。

## 功能特性

- 🌐 **国际化支持**: 支持中文和英文，使用 `next-intl` 实现
- 📱 **响应式设计**: 适配各种设备尺寸
- 🎨 **现代化 UI**: 使用 Material-UI 组件库
- ⚡ **高性能**: 基于 Next.js 15 和 React 19
- 🔧 **TypeScript**: 完整的类型安全支持

## 技术栈

- **框架**: Next.js 15
- **UI 库**: Material-UI v7
- **样式**: Tailwind CSS v4
- **国际化**: next-intl
- **语言**: TypeScript
- **包管理**: pnpm

## 项目结构

```
src/
├── app/
│   └── [locale]/          # 国际化路由
│       ├── layout.tsx     # 根布局
│       ├── page.tsx       # 首页
│       ├── services/      # 服务页面
│       ├── pricing/       # 价格页面
│       └── contact/       # 联系页面
├── components/
│   └── Navigation.tsx     # 导航组件
├── i18n.ts               # 国际化配置
└── middleware.ts         # 中间件
messages/
├── zh.json              # 中文翻译
└── en.json              # 英文翻译
```

## 国际化功能

### 支持的语言
- 中文 (zh) - 默认语言
- 英文 (en)

### 语言切换
- 在导航栏右侧有语言切换按钮
- 支持 URL 路由切换语言
- 自动检测用户浏览器语言

### 翻译文件
- `messages/zh.json` - 中文翻译
- `messages/en.json` - 英文翻译

## 开发指南

### 安装依赖
```bash
pnpm install
```

### 启动开发服务器
```bash
pnpm dev
```

### 构建生产版本
```bash
pnpm build
```

### 启动生产服务器
```bash
pnpm start
```

## 添加新翻译

1. 在 `messages/zh.json` 中添加中文翻译
2. 在 `messages/en.json` 中添加对应的英文翻译
3. 在组件中使用 `useTranslations()` hook 获取翻译

### 示例
```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>{t('myComponent.title')}</h1>
      <p>{t('myComponent.description')}</p>
    </div>
  );
}
```

## 路由结构

- `/zh` - 中文首页
- `/en` - 英文首页
- `/zh/services` - 中文服务页面
- `/en/services` - 英文服务页面
- `/zh/pricing` - 中文价格页面
- `/en/pricing` - 英文价格页面
- `/zh/contact` - 中文联系页面
- `/en/contact` - 英文联系页面

## 自定义配置

### 添加新语言
1. 在 `src/i18n.ts` 中的 `locales` 数组添加新语言代码
2. 创建对应的翻译文件 `messages/[locale].json`
3. 更新导航组件中的语言显示名称

### 修改默认语言
在 `src/middleware.ts` 中修改 `defaultLocale` 参数。

## 部署

项目可以部署到任何支持 Next.js 的平台：

- Vercel (推荐)
- Netlify
- AWS
- 自托管服务器

## 许可证

MIT License
