'use client';

import { Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * 错误页面
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // 记录错误到控制台或错误监控服务
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="text-6xl">⚠️</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">
          出错了
        </h1>
        
        <p className="text-muted-foreground mb-2">
          抱歉，页面加载时发生了错误。
        </p>
        
        {process.env.NODE_ENV === 'development' && (
          <p className="text-sm text-muted-foreground/70 mb-8 font-mono">
            {error.message}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset}>
            <RefreshCw className="w-4 h-4 mr-2" />
            重试
          </Button>
          
          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              返回首页
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
