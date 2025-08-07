import { redirect } from 'next/navigation';

export default function RootPage() {
  // 重定向到默认语言页面
  redirect('/zh');
}

export const dynamic = 'force-static';

export async function generateMetadata() {
  return {
    title: 'Redirecting...',
    description: 'Redirecting to default language page',
  };
} 