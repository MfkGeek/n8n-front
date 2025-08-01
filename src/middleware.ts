import createMiddleware from 'next-intl/middleware';
import { locales } from '../i18n';

export default createMiddleware({
  // 支持的语言列表
  locales,
  // 默认语言
  defaultLocale: 'zh',
  // 本地化检测
  localeDetection: true
});

export const config = {
  // 匹配所有路径，除了 api、_next、静态文件等
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
}; 